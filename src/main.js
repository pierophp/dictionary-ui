import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import WordsPage from './pages/WordsPage'
import AboutPage from './pages/AboutPage'
import {
  baseUrl
} from '../config'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.emulateJSON = true
Vue.http.options.root = baseUrl

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
  '/admin': {
    name: 'admin',
    component: function (resolve) {
      require(['./pages/AdminPage'], resolve)
    }
  },
  'admin/words': {
    name: 'admin_words',
    component: function (resolve) {
      require(['./pages/admin/words/ListPage'], resolve)
    }
  },
  'admin/words/create': {
    name: 'admin_words_create',
    component: function (resolve) {
      require(['./pages/admin/words/CreatePage'], resolve)
    }
  },
  'admin/words/edit/:id': {
    name: 'admin_words_edit',
    component: function (resolve) {
      require(['./pages/admin/words/CreatePage'], resolve)
    }
  }
})

router.alias({
  '/': '/words'
})

router.start(app, 'body')
