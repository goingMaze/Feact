/*
*	dom转vnode
*/
import Vnode from './vnode'
export default function (tag, b, c) {
	let data = {}, children, text;
	if (c !== undefined) {
		data = b
		if (Array.isArray(c)) {
			children = c
		} else if (['number', 'string'].includes(typeof c)) {
			text = c
		}
	} else if (b !== undefined) {
		if(Array.isArray(c)) {
			children = b
		} else if (['number', 'string'].includes(typeof b)) {
			text = b
		} else {
			data = b
		}
	}
	if(Array.isArray(children)) {
		for(let i = 0; i < children.length; i++) {
			if(['number', 'string'].includes(typeof children[i])) {
				children[i] = Vnode(undefined, undefined, undefined, children[i])
			}
		}
	}
	return Vnode(tag, data, children, text, undefined)
}