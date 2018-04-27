/*
* 核心功能：diff不同节点 http://note.youdao.com/noteshare?id=46a339a80be370f85ad999c1f3e539ee&sub=1DA66C35CE5B475B82E9C7C93E674FE1
*/

import Vnode from './vnode'

const hooks = ['create', 'update', 'remove', 'destory']
const emptyNode = Vnode('', {}, [], undefined, undefined)
const cbs = {};

function isDef(n) { return n !== undefined; }
function isUnDef(n) { return n === undefined }
function sameVnode(oldVnode, vnode) {
	return oldVnode.tag === vnode.tag && oldVnode.key === vnode.key
}
function domToVnode(elm) {
	let id = elm.id ? `#${elm.id}` : '';
	let c = elm.className ? `.${elm.className.split(' ').join('.')}` : '';
	return Vnode(elm.tagName.toLowerCase() + id + c, {}, [], undefined, elm);
}
function init(modules = []) {
	// 添加钩子函数，处理样式、props、事件等
	for (let i = 0; i < hooks.length; i++) {
		cbs[hooks[i]] = []
		for (let j = 0; j < modules.length; j++) {
			if (isDef(modules[j][hooks[i]])) {
				cbs[hooks[i]].push(modules[j][hooks[i]])
			}
		}
	}
	return function patch(oldVnode, vnode) {
		if (isUnDef(oldVnode.tag)) {
			oldVnode = domToVnode(oldVnode)
		}
		if (sameVnode(oldVnode, vnode)) {
			patchVnode(oldVnode, vnode)
		} else {
			let elm = oldVnode.elm, parentNode = elm.parentNode;
			createElm(vnode)
			if (parentNode !== null) {
				parentNode.insertBefore(vnode.elm, elm.nextSibling)
				removeVnodes(parentNode, [oldVnode], 0, 0)
			}
		}
		return vnode
	}
}
function patchVnode(oldVnode, vnode) {
	let elm = vnode.elm = oldVnode.elm, oldCh = oldVnode.children, ch = vnode.children;
	if (oldVnode === vnode) return;
	if (!sameVnode(oldVnode, vnode)) {
		let parentElm = oldVnode.elm.parentNode;
		let elm = createElm(vnode)
		parentElm.insertBefore(elm, oldVnode.elm)
		removeVnodes(parentElm, [oldVnode], 0, 0)
		return;
	}
	if (isDef(vnode.data)) {
		for (let i = 0; i < cbs.update.length; i++) {
			cbs.update[i](oldVnode, vnode)
		}
	}
	if (isUnDef(vnode.text)) {
		if (isDef(oldCh) && isDef(ch)) {
			updateChildren(elm, oldCh, ch)
		} else if (isDef(ch)) {
			addVnodes(elm, null, ch, 0, ch.length - 1)
		} else if (isDef(oldCh)) {
			removeVnodes(elm, oldCh, 0, oldCh.length - 1)
		} else if (isDef(oldVnode.text)) {
			elm.textContent = ''
		}
	} else if (oldVnode.text !== vnode.text) {
		elm.textContent = vnode.text
	}
}
function updateChildren(parentElm, oldCh, newCh) {
	let oldStartIdx = 0, oldEndIdx = oldCh.length - 1,
		newStartIdx = 0, newEndIdx = newCh.length - 1;
	let oldStartVnode = oldCh[0], oldEndVnode = oldCh[oldCh.length - 1],
		newStartVnode = newCh[0], newEndVnode = newCh[newCh.length - 1];
	let idxMap;
	while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
		if (sameVnode(oldStartVnode, newStartVnode)) {
			patchVnode(oldStartVnode, newStartVnode)
			oldStartVnode = oldCh[++oldStartIdx]
			newStartVnode = newCh[++newStartIdx]
		} else if (sameVnode(oldEndVnode, newEndVnode)) {
			patchVnode(oldEndVnode, newEndVnode)
			oldEndVnode = oldCh[--oldEndIdx]
			newEndVnode = newCh[--newEndIdx]
		} else if (sameVnode(oldStartVnode, newEndVnode)) {
			patchVnode(oldStartVnode, newEndVnode)
			parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling)
			oldStartVnode = oldCh[++oldStartIdx]
			newEndVnode = newCh[--newEndIdx]
		} else if (sameVnode(oldEndVnode, newStartVnode)) {
			patchVnode(oldEndVnode, newStartVnode)
			parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm)
			oldEndVnode = oldCh[--oldEndIdx]
			newStartVnode = newCh[++newStartIdx]
		} else {
			if (isUnDef(idxMap)) {
				idxMap = mapKeyToIndex(oldCh)
			}
			let tempIdx = idxMap[newStartVnode.key];
			if (isUnDef(tempIdx)) {
				let newElm = createElm(newStartVnode);
				parentElm.insertBefore(newElm, oldStartVnode.elm)
				newStartVnode = newCh[++newStartIdx]
			} else {
				patchVnode(oldCh[tempIdx], newStartVnode)
				parentElm.insertBefore(oldCh[tempIdx], oldStartVnode.elm)
				oldCh[tempIdx] = undefined // 标记表示已处理
				newStartVnode = newCh[++newStartIdx]
			}
		}
	}
	if (oldStartIdx > oldEndIdx) {
		let before = isUnDef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
		addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx)
	} else if (newStartIdx > newEndIdx) {
		removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)
	}
}
function createElm(vnode) {
	let elm = {}, { tag, children, data, text } = vnode;
	if (isDef(tag)) {
		let hashIdx = tag.indexOf('#'),
			dotIdx = tag.indexOf('.'),
			hash = hashIdx > 0 ? hashIdx : tag.length,
			dot = dotIdx > 0 ? dotIdx : tag.length;
		let tempTag = hashIdx !== -1 || dotIdx !== -1 ? tag.slice(0, Math.min(hash, dot)) : tag,
			elm = vnode.elm = document.createElement(tempTag);
		if (hash < dot) elm.id = tag.slice(hash + 1, dot)
		if (dotIdx > 0) elm.className = tag.slice(dot + 1).replace(/\./g, ' ')
		if (Array.isArray(children)) {
			for (let item of children) {
				elm.appendChild(createElm(item))
			}
		} else if (['number', 'string'].includes(typeof text)) {
			elm.appendChild(document.createTextNode(text))
		}
		for (let i = 0; i < cbs.create.length; i++) {
			cbs.create[i](emptyNode, vnode)
		}
	} else {
		elm = vnode.elm = document.createTextNode(text)
	}
	return vnode.elm
}
function addVnodes(parentElm, before, vnodes, startIdx, endIdx) {
	for (; startIdx <= endIdx; startIdx++) {
		parentElm.insertBefore(createElm(vnodes[startIdx]), before)
	}
}
function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
	for (; startIdx <= endIdx; startIdx++) {
		let vnode = vnodes[startIdx]
		if (isDef(vnode)) {
			if(isDef(vnode.tag)) {
				vnode.elm.parentNode.removeChild(vnode.elm)
				for(let i = 0; i < cbs.remove.length; i++) {
					cbs.remove[i](vnode)
				}
			} else {
				parentElm.removeChild(vnode.elm)
			}
		}
	}
}
function mapKeyToIndex(list, startIdx, endIdx) {
	let keyMap = {}, key;
	for (let i = startIdx; i <= endIdx; i++) {
		key = list[i].key
		if (isDef(key)) {
			keyMap[key] = i
		}
	}
	return keyMap;
}

export { init }