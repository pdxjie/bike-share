import { openCityApi, citiesApi } from '@/api/city'
import { message } from 'ant-design-vue'

const state = {}

const actions = {
  // 开通城市接口
  async openCity () {
    const { data: result } = await openCityApi()
    if (result.code === 200) {
      message.success(result.message)
    } else {
      message.error(result.message)
    }
  },
  async getCitiesData () {
    const { data: { result } } = await citiesApi()
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
