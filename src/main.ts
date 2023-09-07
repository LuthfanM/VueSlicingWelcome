import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import FontLoader from './helpers/loader/font-loader'

const app = createApp(App)

app.use(router)
app.use(FontLoader)

app.mount('#app')
