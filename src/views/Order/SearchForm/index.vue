<template>
  <a-form layout="inline">
    <a-form-item label="城市">
      <a-select default-value="请选择" style="width: 120px" @change="handleCityChange">
        <a-select-option value="1">
          北京市
        </a-select-option>
        <a-select-option value="2">
          天津市
        </a-select-option>
        <a-select-option value="3">
          深圳市
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="订单时间">
      <a-range-picker @change="onChange" />
    </a-form-item>
    <a-form-item label="订单状态">
      <a-select default-value="请选择" style="width: 120px" @change="handleSaleChange">
        <a-select-option value="1">
          进行中
        </a-select-option>
        <a-select-option value="2">
          进行中（临时锁车）
        </a-select-option>
        <a-select-option value="3">
          行程结束
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="加盟商授权状态">
      <a-select default-value="请选择" style="width: 120px" @change="handleAuthChange">
        <a-select-option value="1">
          已授权
        </a-select-option>
        <a-select-option value="2">
          未授权
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item class="action-button">
      <a-button type="primary">查询</a-button>
      <a-button >重置</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  name: 'SearchForm',
  data () {
    return {
      searchObj: {
        cityId: '',
        mode: '',
        opMode: '',
        authStatus: ''
      }
    }
  },
  methods: {
    handleCityChange (val) {
      this.searchObj.cityId = val
    },
    handleUseCarChange (val) {
      this.searchObj.mode = val
    },
    handleSaleChange (val) {
      this.searchObj.opMode = val
    },
    handleAuthChange (val) {
      this.searchObj.authStatus = val
    },
    onChange (date, dateString) {
      console.log(date, dateString)
    }
  }
}
</script>

<style lang="less" scoped>
.action-button {
  button {
    margin-right: 15px;
  }
}
</style>
