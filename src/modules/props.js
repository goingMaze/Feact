function updateProps(oldVnode, vnode) {
	let elm = vnode.elm, oldProps = oldVnode.data.props, props = vnode.data.props;
	if(!oldProps && !props) return;
	oldProps = oldProps || {}
	props = props || {}
	for(let key of Object.keys(oldProps)) {
		if(!props[key]) {
			delete elm[key]
		}
	}
	for(let key of Object.keys(props)) {
		let cur = props[key], old = oldProps[key];
		if(old !== cur && (key !== 'value' || elm[key] !== cur)) {
			elm[key] = cur
		}
	}
}

export default {
	create: updateProps,
	update: updateProps
}