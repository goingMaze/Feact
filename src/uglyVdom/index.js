import Element from './element'
import diff from './diff'
import patch from './patch'

let ul = Element('ul', { id: 'list' }, [
	Element('li', { key: 1, class: 'item' }, ['Item 1']),
	Element('li', { key: 2, class: 'item' }, ['Item 2']),
	Element('li', { key: 3, class: 'item' }, ['Item 3'])
]);

let node2 = Element('div', { id: 'd' }, [
	Element('li', { key: 1, class: 'item' }, ['Item 1']),
	Element('li', { key: 2, class: 'item' }, Element('div', {}, '')),
	Element('li', { key: 3, class: 'item' }, ['Item 3'])
]);

let node3 = Element('div', { id: 'm' }, [
	Element('p', { class: 'p' }, '这是个段落'),
	Element('div', { class: 'h' }, Element('div', {}, Element('img', { src: 'https://www.baidu.com/img/bd_logo1.png', alt: 'img', width: '200px' }))),
]);

let node4 = Element('div', { id: 'c' }, [
	Element('p', { class: 'd' }, '这是个段落2'),
	Element('div', { class: 'a' }, Element('div', {}, Element('h3', { src: '', href: 'img' }, '这是个标题'))),
]);

// console.log(diff(ul, node2));

let diffNode = diff(node3, node4)
console.log(diffNode);

let ulRoot = ul.render();
let node3Root = node3.render();

document.body.appendChild(ulRoot)
document.body.appendChild(node3Root)

setTimeout(() => {
	let start = new Date();
	patch(node3Root, diffNode)
	let end = new Date();
	console.log('time: ', end - start);
}, 3000);