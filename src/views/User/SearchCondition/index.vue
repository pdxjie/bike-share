<template>
  <a-form layout="inline">
    <a-form-item label="用户名">
      <a-input v-model="searchObj.username" placeholder="输入用户名查询"/>
    </a-form-item>
    <a-form-item label="用户状态">
      <a-select default-value="请选择" style="width: 120px" @change="handleChange">
        <a-select-option value="1">
          北大才子
        </a-select-option>
        <a-select-option value="2">
          井市咸鱼
        </a-select-option>
        <a-select-option value="3">
          郁闷屌丝
        </a-select-option>
        <a-select-option value="4">
          深夜吃货
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="性别">
      <a-select default-value="请选择" style="width: 120px" @change="handleSexChange">
        <a-select-option value="1">
          男
        </a-select-option>
        <a-select-option value="2">
          女
        </a-select-option>
        <a-select-option value="3">
          未知
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
  name: 'SearchCondition',
  data () {
    return {
      searchObj: {
        username: '',
        status: '',
        sex: ''
      }
    }
  },
  methods: {
    handleChange (val) {
      this.searchObj.cityId = val
    },
    handleSexChange (val) {
      this.searchObj.cityId = val
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
::v-deep .ant-input {
  border-radius: 0px;
}
</style>
