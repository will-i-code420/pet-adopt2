import Vue from 'vue'
import Form from '~/components/common/Form'
import ErrorMsg from '~/components/common/ErrorMsg'
import SuccessMsg from '~/components/common/SuccessMsg'

const components = {
  Form,
  ErrorMsg,
  SuccessMsg
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
