import { createApp } from "./runtime-canvas"
import App from './app'
LInit(16,"app",640,960, () => {
	console.log('start init')
	console.log('LGlobal.stage', LGlobal.stage)
	createApp(App).mount(LGlobal.stage)
})
