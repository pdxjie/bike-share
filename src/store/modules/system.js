import router from '@/router'
const state = {
  collapsed: false,
  menus: []
}
const actions = {}
const mutations = {
  SETCOLLAPSED (state) {
    state.collapsed = !state.collapsed
  },
  SET_MENUS (state) {
    state.menus = router.options.routes[0].children
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
