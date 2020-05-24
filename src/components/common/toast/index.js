// 插件制作
import Toast from './Toast'

const obj = {}

obj.install = function(Vue, options){
  let toastConstructor = Vue.extend(Toast)

  let $toast = new toastConstructor({
    el: document.createElement('div')
  })

  document.body.appendChild($toast.$el)

  Vue.prototype.$toast = $toast
}

export default obj