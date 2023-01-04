import { getCarDetail, ordersApi, OrderInfoApi } from '@/api/order'

const state = {
  orders: []
}

const actions = {
  async getOrderData ({ commit }) {
    const { data: { result } } = await ordersApi()
    return result
  },
  async getCarDetail () {
    const { data: { result } } = await getCarDetail()
    return result
  },
  async OrderInfo () {
    const { data: { result } } = await OrderInfoApi()
    return result
  }
}

const mutations = {
}

export default {
  state,
  actions,
  mutations,
  namespaced: true
}
