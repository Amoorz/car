import Vue from 'vue'
import loading from './loading'

let instance;
let showing = false;
let loadingConstructor = Vue.extend(loading);

let initInstance = () => {
  instance = new loadingConstructor({
    el: document.createElement('div')
  })
  document.body.appendChild(instance.$el)
}
let init = (content) => {
  if (content == 0) {
    initInstance()
    instance.show()
  } else {
    instance.hide()
  }
}

export default {
  install (Vue, config = {}) {
    Vue.prototype.$loading = init
  }
}