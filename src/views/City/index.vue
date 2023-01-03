<template>
  <div>
    <a-card>
      <SearchForm/>
    </a-card>
    <a-card class="card-wrap">
      <a-button type="primary" @click="handleOpenCity">开通城市</a-button>
      <a-table
        :rowKey="(record)=>record.cityId"
        bordered
        :columns="cityColumn"
        :data-source="cities"
      >
        <template slot="mode" slot-scope="text, record">
          <span>{{mode[record.mode]}}</span>
        </template>
        <template slot="opMode" slot-scope="text, record">
          <span>{{opMode[record.opMode]}}</span>
        </template>
        <template slot="authStatusName" slot-scope="text, record">
          <span>{{authStatusName[record.authStatusName]}}</span>
        </template>
      </a-table>
      <a-modal v-model="isShowOpenCityModal" title="开通城市" on-ok="handleOk">
        <template slot="footer">
          <a-button key="back" @click="()=>isShowOpenCityModal = false">
            取消开通
          </a-button>
          <a-button key="submit" type="primary" @click="submitOpenCityRequest">
            确认开通
          </a-button>
        </template>
        <OpenCityForm ref="cityInfo"/>
      </a-modal>
    </a-card>
  </div>
</template>

<script>
import { cityColumn } from '@/utils/columns'
import SearchForm from '@/views/City/SearchForm'
import OpenCityForm from '@/views/City/OpenCityForm'
export default {
  name: 'City',
  components: { OpenCityForm, SearchForm },
  mounted () {
    this.getCityData()
  },
  data () {
    return {
      cityColumn,
      isShowOpenCityModal: false,
      cityInfo: {},
      cities: [],
      mode: {
        1: '指定停车点模式',
        2: '禁停区模式'
      },
      opMode: {
        1: '自营',
        2: '加盟'
      },
      authStatusName: {
        1: '已授权',
        2: '未授权'
      }

    }
  },
  methods: {
    async getCityData () {
      const result = await this.$store.dispatch('city/getCitiesData')
      this.cities = result
    },
    // 开通城市
    handleOpenCity () {
      this.isShowOpenCityModal = true
    },
    // 开通城市
    submitOpenCityRequest () {
      this.cityInfo = this.$refs.cityInfo.FormObj
      this.$store.dispatch('city/openCity', this.cityInfo)
      this.isShowOpenCityModal = false
    }
  }
}
</script>

<style lang="less" scoped>
.card-wrap {
  button:nth-child(1) {
    margin-bottom: 15px;
  }
}
</style>
