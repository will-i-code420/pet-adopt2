import Vue from 'vue'
import Form from '~/components/common/Form'
import ErrorMsg from '~/components/common/ErrorMsg'

const components = {
  Form,
  ErrorMsg
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
