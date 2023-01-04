import Vue from 'vue'
import Vuex from 'vuex'
import system from '@/store/modules/system'
import table from '@/store/modules/table'
import city from '@/store/modules/city'
import order from '@/store/modules/order'
import user from '@/store/modules/user'
import getters from '@/store/getters'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    system,
    table,
    city,
    order,
    user
  }
})
