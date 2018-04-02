import Vue from 'vue'
import toast from './toast'

let instance;
let showing = false;
let toastConstructor = Vue.extend(toast);

let initInstance = () => {
  instance = new toastConstructor({
    el: document.createElement('div')
  })
  document.body.appendChild(instance.$el)
}
let init = (content) => {
  if (showing == false) {
    showing = true
    initInstance()
    instance.msg = content
    instance.visible = true
    setTimeout(function() {
      instance.visible = false
      showing = false
    }, 2000)
  }
}

export default {
  install (Vue, config = {}) {
    Vue.prototype.$toast = init
  }
}