
import Vue from 'vue'
const {
  bind,
  addClass,
  removeClass
} = Vue.util

let onRouteUpdate = (currentPath, path, el, customRegex) => {
  let activeClass = 'active'
  if (customRegex) {
    let activeRE = new RegExp(customRegex)
    if (activeRE.test(currentPath)) {
      toggleClasses(el, activeClass, addClass)
    } else {
      toggleClasses(el, activeClass, removeClass)
    }
  } else {
    if (path == currentPath) {
      toggleClasses(el, activeClass, addClass)
    } else {
      toggleClasses(el, activeClass, removeClass)
    }
  }
}

let toggleClasses = (el, key, fn) => {
  key = key.trim()
  if (key.indexOf(' ') === -1) {
    fn(el, key)
    return
  }

  var keys = key.split(/\s+/)
  for (var i = 0, l = keys.length; i < l; i++) {
    fn(el, keys[i])
  }
}

Vue.directive('menu-active', function (params) {
  const vm = this.vm
  let that = this

  var callback = function () {
    onRouteUpdate(that.vm.$route.path, params.path, that.el, params.regex)
  }

  vm.$watch('$route', bind(callback))

  callback()
})
