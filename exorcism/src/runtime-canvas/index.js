import { createRenderer } from '@vue/runtime-core'

const renderer = createRenderer({
	createElement (type) {
		let ele
		switch (type) {
			case 'Sprite':
				console.log('render1 LSprite')
				ele = new LSprite()
				ele.graphics.drawRect(0,"#FFF",[0,0,640,640],true,"rgba(255,0,0,0.5)");
				break
		}
		return ele
	},
	createComment() {},
	// 获取父节点
	parentNode() {},
	// 获取兄弟节点
	nextSibling() {},
	remove(el) {
		console.log('el', el)
		const parent = el.parent;
		if (parent) {
			parent.removeChild(el);
		}
	},
	insert(el, parent, anchor) {
		console.log('el insert', el)
		console.log('parent', parent)
		if (typeof parent.addChild === 'function') {
			parent.addChild(el)
		}

	}
})

export function createApp(rootComponent) {
	return renderer.createApp(rootComponent);
}
