import { createVNode, render } from 'vue'
import Toast from '@/components/Toast.vue'

export const showToast = (message: string, parent: HTMLElement) => {

  const vNode = createVNode(Toast, { message })
  const el = document.createElement('div')
  parent.appendChild(el)
  render(vNode, el)

  // const toast = BSToast.getOrCreateInstance(el.children[0])
  const toast = el.children[0]

  setTimeout(() => {
    if (el) {
      render(null, el)
      parent.removeChild(el)
    }
  }, 5000)

  setTimeout(() => {
    toast.classList.remove('show')
  }, 3500)

  toast.classList.add('show')
}
