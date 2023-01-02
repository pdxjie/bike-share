import Vue from 'vue'
import Vuex from 'vuex'
import system from '@/store/modules/system'
import table from '@/store/modules/table'
import getters from '@/store/getters'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    system,
    table
  }
})
