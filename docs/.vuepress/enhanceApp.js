import { defineClientAppEnhance } from '@vuepress/client'
import Features from './components/Features.vue'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('Features', Features)
})