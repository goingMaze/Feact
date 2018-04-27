
class Element {
	constructor(tagName, props = {}, children = [], text, elm, key) {
		this.tagName = tagName; // 标签名
		this.props = props; // vnode绑定的数据
		this.children = Array.isArray(children) ? children : [children]; // 子元素数组
		this.key = props ? props.key : null; // 用于不同vnode的对比
		this.text = text; // 文本内容
		let count = 0;
		this.children.forEach((child, i) => {
			if (child instanceof Element) {
				// Elemnt节点
				count += child.count
			} else {
				// 文本节点
				this.children[i] = String(child)
			}
			count++
		})
		this.count = count;
	}
	render() {
		const el = document.createElement(this.tagName);
		const props = this.props;
		const children = this.children || [];
		for (let propName of Object.keys(props)) {
			let propValue = props[propName];
			el.setAttribute(propName, propValue)
		}
		children.forEach(child => {
			const childEl = child instanceof Element ? child.render() :
				document.createTextNode(child);
			el.appendChild(childEl)
		});
		return el
	}
}

export default function (tagName, props, children, text, elm, key) {
	return new Element(tagName, props, children, text, elm, key);
}