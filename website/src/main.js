/*
 * @Author: SpenserCai
 * @Date: 2023-10-01 10:22:20
 * @version: 
 * @LastEditors: SpenserCai
 * @LastEditTime: 2023-10-24 21:42:42
 * @Description: file content
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Notifications from 'notiwind'
import VueLazyLoad from 'vue3-lazyload'
// import { initFlowbite,initModals } from 'flowbite'


import './css/main.css'
import App from './App.vue'
import router from './router'
// import { useMainStore } from '@/stores/main.js'



// Init Pinia
const pinia = createPinia()
// const flowbite = initFlowbite()
// const modals = initModals()

// Create Vue app
// createApp(App).use(router).use(pinia).use(Notifications).use(flowbite).use(modals).mount('#app')
createApp(App).use(router).use(pinia).use(Notifications).use(VueLazyLoad).mount('#app')

// Init main store
// const mainStore = useMainStore(pinia)

// Fetch sample data
// mainStore.fetchSampleClients()
// mainStore.fetchSampleHistory()

// Dark mode
// Uncomment, if you'd like to restore persisted darkMode setting, or use `prefers-color-scheme: dark`. Make sure to uncomment localStorage block in src/stores/darkMode.js
// import { useDarkModeStore } from './stores/darkMode'

// const darkModeStore = useDarkModeStore(pinia)

// if (
//   (!localStorage['darkMode'] && window.matchMedia('(prefers-color-scheme: dark)').matches) ||
//   localStorage['darkMode'] === '1'
// ) {
//   darkModeStore.set(true)
// }

// Default title tag
const defaultDocumentTitle = 'LACHU-AI'

// Set document title from route meta
router.afterEach((to) => {
  document.title = to.meta?.title
    ? `${to.meta.title} — ${defaultDocumentTitle}`
    : defaultDocumentTitle
})
