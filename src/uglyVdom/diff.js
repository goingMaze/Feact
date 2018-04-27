import patch from './patch'
// import listDiff from './listDiff'
function isString(str) {
	return typeof str === 'string';
}
function diff(oldTree, newTree) {
	let index = 0;
	let changes = {};
	dfsCompare(oldTree, newTree, index, changes);
	return changes;
}
function dfsCompare(oldNode, newNode, index, changes) {
	let currentChanges = [];
	if ([null, undefined].includes(newNode)) {

	} else if (isString(oldNode) && isString(newNode)) {
		// 都是文本节点
		if (newNode !== oldNode) {
			currentChanges.push({
				type: patch.TEXT,
				content: newNode
			});
		}
	} else if (oldNode.tagName === newNode.tagName && oldNode.key === newNode.key) {
		// 同类节点
		let propsChanges = diffProps(oldNode, newNode);
		if (propsChanges) {
			currentChanges.push({
				type: patch.PROPS,
				props: propsChanges
			});
		}
		diffChildren(oldNode.children, newNode.children, index, changes, currentChanges)
	} else {
		currentChanges.push({
			type: patch.REPLACE,
			node: newNode
		})
	}
	if (currentChanges.length) {
		changes[index] = currentChanges;
	}
}
function diffChildren(oldChildren, newChildren, index, changes, currentChanges) {
	// let diffs = listDiff(oldChildren, newChildren, 'key');
	// newChildren = diffs.children;
	// if(diffs.moves.length) {
	// 	let reorderChange = {
	// 		type: patch.REORDER,
	// 		moves: diffs.moves
	// 	}
	// 	currentChanges.push(reorderChange)
	// }
	let leftNode = null;
	let currentNodeIdx = index;
	oldChildren.forEach((child, i) => {
		let newChild = newChildren[i];
		currentNodeIdx = (leftNode && leftNode.count) ?
			currentNodeIdx + leftNode.count + 1 : currentNodeIdx + 1;
		dfsCompare(child, newChild, currentNodeIdx, changes)
		leftNode = child
	});
}
function diffProps(oldNode, newNode) {
	let count = 0;
	let oldProps = oldNode.props;
	let newProps = newNode.props;
	let key, value;
	let propsChanges = {};
	for (let key of Object.keys(oldProps)) {
		let value = oldProps[key];
		if (newProps[key] !== value) {
			count++;
			propsChanges[key] = newProps[key]
		}
	}
	for (let key of Object.keys(newProps)) {
		let value = newProps[key]
		if (!oldProps.hasOwnProperty(key)) {
			count++;
			propsChanges[key] = value
		}
	}
	if (count === 0) {
		return null
	}
	return propsChanges
}

export default diff