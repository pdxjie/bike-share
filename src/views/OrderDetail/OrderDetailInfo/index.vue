<template>
  <a-form layout="horizontal">
    <a-form-item label="用车模式"
                 :label-col="formItemLayout.labelCol"
                 :wrapper-col="formItemLayout.wrapperCol"
    >
      行行行
    </a-form-item>
    <a-form-item label="订单编号"
                 :label-col="formItemLayout.labelCol"
                 :wrapper-col="formItemLayout.wrapperCol"
    >
      行行行
    </a-form-item>
    <a-form-item label="车辆编号"
                 :label-col="formItemLayout.labelCol"
                 :wrapper-col="formItemLayout.wrapperCol"
    >
      行行行
    </a-form-item>
    <a-form-item label="用户姓名"
                 :label-col="formItemLayout.labelCol"
                 :wrapper-col="formItemLayout.wrapperCol"
    >
      行行行
    </a-form-item>
    <a-form-item label="手机号"
                 :label-col="formItemLayout.labelCol"
                 :wrapper-col="formItemLayout.wrapperCol"
    >
      行行行
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  name: 'OrderDetailInfo',
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
