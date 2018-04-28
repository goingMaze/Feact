console.log("start----");

import { init } from './patch'
import h from './d2V'

import attr from './modules/attributes'
import nClass from './modules/class'
import props from './modules/props'
import style from './modules/style'

const patch = init([
	attr,
	nClass, // makes it easy to toggle classes
	props, // for setting properties on DOM elements
	style, // handles styling on elements with support for animations
])

var someFn = function () {
	console.log('someFn', arguments);
}

var anotherEventHandler = function () {
	console.log('anotherEventHandler', arguments);
}

var vnode = h('div#container.two.classes', { on: { click: someFn } }, [
	h('p', { style: { fontWeight: 'bold' } }, 'This is bold'),
	' and this is just normal text',
	h('a', { props: { href: '/foo' } }, 'I\'ll take you places!')
]);

console.log('vnode', vnode);

var newVnode = h('div#container.two.classes', { on: { click: anotherEventHandler } }, [
	h('span', { style: { fontWeight: 'normal', fontStyle: 'italic' } }, 'This is now italic type'),
	' and this is still just normal text',
	h('a', { props: { href: '/bar' } }, 'I\'ll take you places!')
]);

console.log('newVnode', newVnode);

function patchNew(vnode, newVnode) {
	// Second `patch` invocation
	let n = patch(vnode, newVnode); // Snabbdom efficiently updates the old view to the new state
	console.log(n)
}

window.addEventListener('DOMContentLoaded', () => {
	var container = document.getElementById('container');

	vnode = patch(container, vnode);

	setTimeout(function () { patchNew(vnode, newVnode) }, 2000);
});
