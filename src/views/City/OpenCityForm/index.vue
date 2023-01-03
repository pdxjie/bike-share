<template>
  <div>
    <a-form layout="horizontal">
      <a-form-item label="选择城市"
         :label-col="formItemLayout.labelCol"
         :wrapper-col="formItemLayout.wrapperCol"
      >
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
      <a-form-item label="运营模式"
         :label-col="formItemLayout.labelCol"
         :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-select default-value="请选择" style="width: 120px" @change="handleSaleChange">
          <a-select-option value="1">
            自营
          </a-select-option>
          <a-select-option value="2">
            加盟
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="用车模式"
         :label-col="formItemLayout.labelCol"
         :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-select default-value="请选择" style="width: 140px" @change="handleUseCarChange">
          <a-select-option value="1">
            指定停车点模式
          </a-select-option>
          <a-select-option value="2">
            禁停区模式
          </a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'OpenCityForm',
  data () {
    return {
      formItemLayout: {
        labelCol: { span: 5 },
        wrapperCol: { span: 19 }
      },
      FormObj: {
        cityId: '',
        mode: '',
        opMode: ''
      }
    }
  },
  methods: {
    handleCityChange (val) {
      this.FormObj.cityId = val
    },
    handleUseCarChange (val) {
      this.FormObj.mode = val
    },
    handleSaleChange (val) {
      this.FormObj.opMode = val
    }
  }
}
</script>

<style scoped>

</style>
