import { usersApi } from '@/api/user'

const state = {}

const actions = {
  async UsersData () {
    const { data: { result } } = await usersApi()
    return result
  }
}

const mutations = {}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
