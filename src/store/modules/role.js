import { rolesApi } from '@/api/role'

const state = {}

const actions = {
  async getRoleData () {
    const { data: { result } } = await rolesApi()
    return result
  }
}

const mutations = {}

export default {
  namespaced: true,
  actions,
  state,
  mutations
}
