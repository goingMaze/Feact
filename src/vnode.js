/*
* 虚拟dom节点
*/
export default function (tag, data, children, text, elm) {
	const key = data === undefined ? undefined : data.key;
	return {
		tag, data, children, text, elm, key
	};
}

// data: {
// 	attr, // 原生属性
// 	props,	// 自定义props
// 	class, // 类名
// 	style, // 样式
// 	eventlistener, // 事件
// 	dataset // 属性集
// }