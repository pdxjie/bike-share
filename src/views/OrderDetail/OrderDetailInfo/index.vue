<template>
  <a-form layout="horizontal">
    <a-form-item label="用车模式"
                 :label-col="formItemLayout.labelCol"
                 :wrapper-col="formItemLayout.wrapperCol"
    >
      {{mode[basicInfo.mode]}}
    </a-form-item>
    <a-form-item label="订单编号"
                 :label-col="formItemLayout.labelCol"
                 :wrapper-col="formItemLayout.wrapperCol"
    >
      {{basicInfo.orderId}}
    </a-form-item>
    <a-form-item label="车辆编号"
                 :label-col="formItemLayout.labelCol"
                 :wrapper-col="formItemLayout.wrapperCol"
    >
      {{basicInfo.carId}}
    </a-form-item>
    <a-form-item label="用户姓名"
                 :label-col="formItemLayout.labelCol"
                 :wrapper-col="formItemLayout.wrapperCol"
    >
      {{basicInfo.userName}}
    </a-form-item>
    <a-form-item label="手机号"
                 :label-col="formItemLayout.labelCol"
                 :wrapper-col="formItemLayout.wrapperCol"
    >
      {{basicInfo.phone}}
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
      },
      mode: {
        1: '服务区',
        2: '停车点'
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
