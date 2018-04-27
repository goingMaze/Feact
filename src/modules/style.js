function updateStyle(oldVnode, vnode) {
	let elm = vnode.elm, oldStyle = oldVnode.data.style, style = vnode.data.style;
	if(!oldStyle && !style) return;
	oldStyle = oldStyle || {}
	style = style || {}
	for(let key of Object.keys(oldStyle)) {
		if(!style[name]) {
			elm.style[name] = ''
		}
	}
	for(let key of Object.keys(style)) {
		elm.style[key] = style[key]
	}
}

export default {
	create: updateStyle,
	update: updateStyle
}