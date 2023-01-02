<template>
  <div>
    <a-card title="固定表头" class="button-wrap">
      <a-table
        :columns="normalColumns"
        :data-source="data"
        :pagination="{ pageSize: 10 }"
        :scroll="{ y: 240 }"
        bordered
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
    <a-card title="固定列" class="button-wrap">
      <a-table :columns="fixedColumns" :data-source="data" :scroll="{ x: 2000,y: 240 }">
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
import { normalColumns, fixedColumns } from '@/utils/columns'
import { message } from 'ant-design-vue'
export default {
  name: 'HighTable',
  data () {
    return {
      normalColumns,
      fixedColumns,
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
      this.$store.dispatch('system/setloadding', true)
      const result = await this.$store.dispatch('table/tableDataApi')
      this.data = result
      this.$store.dispatch('system/setloadding', false)
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
