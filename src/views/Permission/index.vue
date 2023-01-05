<template>
  <div>
    <a-card class="button-wrap">
      <a-button type="primary">创建角色</a-button>
      <a-button type="primary">设置权限</a-button>
      <a-button type="primary">用户授权</a-button>

      <a-table
        bordered
        :rowKey="record=>record.id"
        class="table-wrap"
        :columns="roleColumn"
        :data-source="data"
      >
        <template slot="roleName" slot-scope="text, record">
          <span>{{roleName[record.roleName]}}</span>
        </template>
        <template slot="status" slot-scope="text, record">
          <span>{{status[record.status]}}</span>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script>
import { roleColumn } from '@/utils/columns'

export default {
  name: 'Permission',
  data () {
    return {
      roleColumn,
      data: [],
      roleName: {
        1: '管理人员',
        2: '部门经理',
        3: '财务专员'
      },
      status: {
        1: '正常',
        2: '禁用'
      }
    }
  },
  mounted () {
    this.getRoles()
  },
  methods: {
    async getRoles () {
      const result = await this.$store.dispatch('role/getRoleData')
      this.data = result
    }
  }
}
</script>

<style lang="less" scoped>
.button-wrap {
  button {
    margin-right: 10px;
  }
  .table-wrap {
    margin-top: 15px;
  }
}
</style>
