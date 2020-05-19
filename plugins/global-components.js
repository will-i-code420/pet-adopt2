import Vue from 'vue'
import Form from '~/components/common/Form'
import ErrorMsg from '~/components/common/ErrorMsg'
import SuccessMsg from '~/components/common/SuccessMsg'
import Pagination from '~/components/common/Pagination'

const components = {
  Form,
  ErrorMsg,
  SuccessMsg,
  Pagination
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
