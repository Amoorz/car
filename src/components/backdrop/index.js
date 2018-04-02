import Vue from 'vue'
import backdrop from './backdrop'

let instance;
let showing = false;
let backdropConstructor = Vue.extend(backdrop);

let initInstance = () => {
  instance = new backdropConstructor({
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
    Vue.prototype.$backdrop = init
  }
}