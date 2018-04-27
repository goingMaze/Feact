function updateAttributes(oldVnode, vnode) {
	let elm = vnode.elm, oldAttrs = oldVnode.data.attrs, attrs = vnode.data.attrs;
	if(!oldAttrs && !attrs) return;
	oldAttrs = oldAttrs || {}
	attrs = attrs || {}
	for(let key of Object.keys(attrs)) {
		let cur = attrs[key], old = oldAttrs[key];
		if(old !== cur) {
			elm.setAttribute(key, cur)
		}
	}
	for(let key of Object.keys(oldAttrs)) {
		if(!elm.hasAttribute(key)) {
			elm.removeAttribute(key)
		}
	}
}

export default {
	create: updateAttributes,
	update: updateAttributes
}