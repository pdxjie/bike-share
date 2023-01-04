<template>
  <a-form layout="horizontal">
    <a-form-item label="行程起点"
                 :label-col="formItemLayout.labelCol"
                 :wrapper-col="formItemLayout.wrapperCol"
    >
      {{basicInfo.drivBegin}}
    </a-form-item>
    <a-form-item label="行程终点"
                 :label-col="formItemLayout.labelCol"
                 :wrapper-col="formItemLayout.wrapperCol"
    >
      {{basicInfo.drivEnd}}
    </a-form-item>
    <a-form-item label="行驶里程"
                 :label-col="formItemLayout.labelCol"
                 :wrapper-col="formItemLayout.wrapperCol"
    >
      {{basicInfo.mileage}}公里
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  name: 'OrderDetailInfo',
  props: ['basicInfo'],
  data () {
    return {
      formItemLayout: {
        labelCol: { span: 5 },
        wrapperCol: { span: 19 }
      }
    }
  }
}
</script>

<style lang="less" scoped>
::v-deep .ant-form-item {
  margin-bottom: 1px;
}
</style>
