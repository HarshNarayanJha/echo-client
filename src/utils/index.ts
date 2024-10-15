import { createVNode, render } from 'vue'
import { Toast as BSToast } from 'bootstrap'
import Toast from '@/components/Toast.vue'

export const showToast = (message: string, parent: HTMLElement) => {

  const vNode = createVNode(Toast, { message })
  const el = document.createElement('div')
  parent.appendChild(el)
  render(vNode, el)

  const toast = BSToast.getOrCreateInstance(el.children[0])

  setTimeout(() => {
    if (el) {
      render(null, el)
      parent.removeChild(el)
    }
  }, 5000)

  toast.show()
}
