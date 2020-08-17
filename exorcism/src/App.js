import { defineComponent, h, ref } from '@vue/runtime-core'

export default defineComponent({
	setup () {
		const pageName = ref('Sprite')
		return {
			pageName
		}
	},
	render (ctx) {
		console.log('render1', ctx.pageName)
		return h (ctx.pageName)
	}
})
