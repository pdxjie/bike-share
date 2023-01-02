import { getTableData } from '@/api/table'
const state = {
  tableData: []
}

const actions = {
  async tableDataApi ({ commit }) {
    const { data: result } = await getTableData()
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
