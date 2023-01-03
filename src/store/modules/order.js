import { getCarDetail, ordersApi } from '@/api/order'

const state = {}

const actions = {
  async getOrderData () {
    const { data: { result } } = await ordersApi()
    return result
  },
  async getCarDetail () {
    const { data: { result } } = await getCarDetail()
    return result
  }
}

const mutations = {}

export default {
  state,
  actions,
  mutations,
  namespaced: true
}
