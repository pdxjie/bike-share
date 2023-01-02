<template>
<div>
  <a-card title="动态数据渲染" class="button-wrap">
    <a-table
      :rowKey="(record)=>{ return record.id}"
      :columns="normalColumns"
      :data-source="data"
      bordered>
      <template slot="sex" slot-scope="text, record">
        <span>{{sex[record.sex]}}</span>
      </template>
      <template slot="state" slot-scope="text, record">
        <span>{{state[record.state]}}</span>
      </template>
      <template slot="hobby" slot-scope="text, record">
        <span>{{hobby[record.hobby]}}</span>
      </template>
      <template slot="action" slot-scope="text, record">
        <a-button type="primary" class="circle" shape="circle" icon="edit"/>
        <a-popconfirm
          v-if="data.length"
          title="确定要删除吗?"
          @confirm="() => onDelete(record)"
        >
          <a-button type="danger" ghost class="circle" shape="circle" icon="delete"/>
        </a-popconfirm>
      </template>
    </a-table>
  </a-card>

  <a-card title="复选框Table" class="button-wrap">
    <a-table
      :rowKey="(record)=>{ return record.id}"
      :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      :columns="normalColumns"
      :data-source="data"
    >
      <template slot="sex" slot-scope="text, record">
        <span>{{sex[record.sex]}}</span>
      </template>
      <template slot="state" slot-scope="text, record">
        <span>{{state[record.state]}}</span>
      </template>
      <template slot="hobby" slot-scope="text, record">
        <span>{{hobby[record.hobby]}}</span>
      </template>
      <template slot="action" slot-scope="text, record">
        <a-button type="primary" class="circle" shape="circle" icon="edit"/>
        <a-popconfirm
          v-if="data.length"
          title="确定要删除吗?"
          @confirm="() => onDelete(record)"
        >
          <a-button type="danger" ghost class="circle" shape="circle" icon="delete"/>
        </a-popconfirm>
      </template>
    </a-table>
  </a-card>
</div>
</template>

<script>
import { message } from 'ant-design-vue'
import { normalColumns } from '@/utils/columns'
export default {
  name: 'BasicTable',
  data () {
    return {
      normalColumns,
      selectedRowKeys: [],
      data: [],
      sex: {
        1: '男',
        2: '女'
      },
      hobby: {
        1: '唱歌',
        2: '跳舞',
        3: '篮球',
        4: 'rap',
        5: '代码'
      },
      state: {
        1: '咸鱼',
        2: '才子'
      }
    }
  },
  mounted () {
    this.getTableList()
  },
  methods: {
    async getTableList () {
      const result = await this.$store.dispatch('table/tableDataApi')
      this.data = result
    },
    onSelectChange (selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys
      message.success(`你选择了${this.selectedRowKeys}`)
    },
    onDelete (record) {
      message.success(`删除${record.userName}成功`)
    }
  }
}
</script>

<style lang="less" scoped>
.button-wrap {
  margin-bottom: 10px;
  button {
    margin-right: 10px;
  }
  .circle {
    border-radius: 50% !important;
  }
}
</style>
