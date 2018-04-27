const REPLACE = 0;
const REORDER = 1;
const PROPS = 2;
const TEXT = 3;

function patch(node, changes) {
	let walker = { index: 0 };
	dfsCompare(node, walker, changes)
}
function dfsCompare(node, walker, changes) {
	let currentChanges = changes[walker.index];
	if(currentChanges) {
		applyPatches(node, currentChanges)
	}
	Array.from(node.childNodes).map((child, i) => {
		walker.index++;
		dfsCompare(child, walker, changes)
	})
}
function applyPatches(node, currentChanges) {
	currentChanges.map(change => {
		switch(change.type) {
			case REPLACE:
				let newNode = typeof change.node === 'string' ?
					document.createTextNode(change.node) : change.node.render();
				node.parentNode.replaceChild(newNode, node);
				break;
			case REORDER:
				break;
			case PROPS:
				setProps(node, change.props);
				break;
			case TEXT:
				if(node.textContent) {
					node.textContent = change.content;
				}
				break;
			default:
				throw new Error('Unkonwn change type' + change.type)
				break;
		}
	})
}
function setProps(node, props) {
	for(let key of Object.keys(props)) {
		if(props[key] === null) {
			node.removeAttribute(key)
		} else {
			let value = props[key]
			node.setAttribute(key, value)
		}
	}
}

patch.REPLACE = REPLACE
patch.REORDER = REORDER
patch.PROPS = PROPS
patch.TEXT = TEXT

export default patch;