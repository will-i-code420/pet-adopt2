import Vue from 'vue'
import Form from '~/components/common/Form'
import Pagination from '~/components/common/Pagination'
import SearchBar from '~/components/common/SearchBar'

const components = {
  Form,
  Pagination,
  SearchBar
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
