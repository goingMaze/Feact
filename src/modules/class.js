function updateClasses(oldVnode, vnode) {
	let elm = vnode.elm, oldClass = oldVnode.data.class, nclass = vnode.data.class;
	if(!oldClass && !nclass) return;
	elm.className = nclass.join(' ')
}

export default {
	create: updateClasses,
	update: updateClasses
}