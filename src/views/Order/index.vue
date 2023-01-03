<template>
  <div>
    <a-card>
      <SearchForm/>
    </a-card>
    <a-card class="card-wrap">
      <a-button type="primary" @click="openOrderDetail">订单详情</a-button>
      <a-button type="primary" @click="handleFinishOrder">结束订单</a-button>
      <a-table
        bordered
        :rowKey="(record)=>record.orderId"
        class="table-wrap"
        :columns="orderColumn"
        :data-source="data"
        :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      >
        <template slot="orderId" slot-scope="text, record">
          <span>T{{(record.orderId).slice(1,8)}}</span>
        </template>
        <template slot="carId" slot-scope="text, record">
          <span>{{(record.carId).slice(1,8)}}</span>
        </template>
        <template slot="status" slot-scope="text, record">
            <span>{{status[record.status]}}</span>
        </template>
        <template slot="orderedMoney" slot-scope="text, record">
          <span>{{record.orderMoney}}</span>
        </template>
      </a-table>
      <a-modal v-model="orderConfirmVisible" title="结束订单" on-ok="handleOk">
        <template slot="footer">
          <a-button key="back" @click="()=>orderConfirmVisible = false">
            取消
          </a-button>
          <a-button key="submit" type="primary" @click="()=>orderConfirmVisible = false">
            确认
          </a-button>
        </template>
        <a-form layout="horizontal">
          <a-form-item label="车辆编号"
                       :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol"
          >
            {{detailInfo.carId}}
          </a-form-item>
          <a-form-item label="剩余电量"
                       :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol"
          >
            {{detailInfo.power}}
          </a-form-item>
          <a-form-item label="行程开始时间"
                       :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol"
          >
            {{detailInfo.beginTime}}
          </a-form-item>
          <a-form-item label="当前位置"
                       :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol"
          >
            {{detailInfo.region}}
          </a-form-item>
        </a-form>
      </a-modal>
    </a-card>
  </div>
</template>

<script>
import { orderColumn } from '@/utils/columns'
import SearchForm from '@/views/Order/SearchForm'
import { message } from 'ant-design-vue'
export default {
  name: 'Order',
  components: { SearchForm },
  data () {
    return {
      orderColumn,
      data: [],
      status: {
        1: '进行中',
        2: '行程结束'
      },
      selectedRowKeys: [],
      orderConfirmVisible: false,
      detailInfo: {},
      formItemLayout: {
        labelCol: { span: 5 },
        wrapperCol: { span: 19 }
      }
    }
  },
  mounted () {
    this.getOrders()
  },
  methods: {
    async getOrders () {
      const result = await this.$store.dispatch('order/getOrderData')
      this.data = result
    },
    onSelectChange (selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys
    },
    async handleFinishOrder () {
      if (this.selectedRowKeys.length === 0) {
        message.error('请选择具体的订单项')
        return
      }
      const result = await this.$store.dispatch('order/getCarDetail')
      const data = this.data.filter(item => {
        return item.orderId === this.selectedRowKeys[0]
      })
      result.carId = data[0].carId.slice(1, 8)
      result.beginTime = data[0].beginTime
      this.detailInfo = result
      this.orderConfirmVisible = true
    },
    openOrderDetail () {
      if (this.selectedRowKeys.length === 0) {
        message.error('请选择具体的订单项')
        return
      }
      window.open(`/#/other/order/detail/${this.selectedRowKeys[0]}`, '_blank')
    }
  }
}
</script>

<style lang="less" scoped>
.card-wrap {
  button{
    margin-right: 15px;
  }
  .table-wrap {
    margin-top: 15px;
  }
}

</style>
