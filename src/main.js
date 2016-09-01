import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import WordsPage from './pages/WordsPage'
import AboutPage from './pages/AboutPage'

Vue.use(VueRouter)

let app = Vue.extend({
  components: { App }
})

let router = new VueRouter()

router.map({
  '/words': {
    name: 'words',
    component: WordsPage
  },
  '/words/:type/:fromLang/:toLang/:letter': {
    name: 'words_with_params',
    component: WordsPage
  },
  '/about': {
    name: 'about',
    component: AboutPage
  },
})

router.alias({
  '/': '/words'
})

router.start(app, 'body')
