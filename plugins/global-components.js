import Vue from 'vue'
import Form from '~/components/common/Form'

const components = {
  Form
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
