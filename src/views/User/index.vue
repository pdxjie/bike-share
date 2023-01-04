<template>
  <div>
    <a-card>
      <SearchCondition ref="seachRef"/>
    </a-card>
    <a-card class="button-wrap">
      <a-button @click="createUser" icon="plus" type="primary">创建员工</a-button>
      <a-table
        class="user-table"
        bordered
        :rowKey="(record)=>record.userId"
        :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
        :data-source="data"
        :columns="userColumn"
      >
        <template slot="sex" slot-scope="text, record">
          <span>{{sex[record.sex]}}</span>
        </template>
        <template slot="status" slot-scope="text, record">
          <span>{{status[record.status]}}</span>
        </template>
        <template slot="isMarry" slot-scope="text, record">
          <span>{{isMarry[record.isMarry]}}</span>
        </template>
        <template slot="hobby" slot-scope="text, record">
          <a-tag color="red" v-for="(h,index) in record.hobby" :key="index">{{hobby[h]}}</a-tag>
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

      <a-modal v-model="createVisible" title="创建员工" on-ok="handleOk">
        <template slot="footer">
          <a-button key="back" @click="()=>createVisible = false">
            取消
          </a-button>
          <a-button key="submit" type="primary" @click="submitCreateRequest">
            确认
          </a-button>
        </template>
        <CreateUserForm ref="createRef"/>
      </a-modal>
    </a-card>
  </div>
</template>

<script>
import { message } from 'ant-design-vue'
import { userColumn } from '@/utils/columns'
import SearchCondition from '@/views/User/SearchCondition'
import CreateUserForm from '@/views/User/CreateUserForm'
export default {
  name: 'User',
  components: { CreateUserForm, SearchCondition },
  data () {
    return {
      userColumn,
      data: [],
      selectedRowKeys: [],
      sex: {
        1: '男',
        2: '女',
        3: '未知'
      },
      status: {
        1: '北大才子',
        2: '井市咸鱼',
        3: '郁闷屌丝',
        4: '深夜吃货'
      },
      hobby: {
        1: '吃饭',
        2: '睡觉',
        3: '编程'
      },
      isMarry: {
        1: '已婚',
        2: '未婚'
      },
      createVisible: false
    }
  },
  mounted () {
    this.getUsers()
  },
  methods: {
    async getUsers () {
      const result = await this.$store.dispatch('user/UsersData')
      console.log(result.hobby)
      result.forEach(item => {
        const hobbies = new Set()
        item.hobby.forEach(h => {
          hobbies.add(h)
        })
        item.hobby = [...hobbies]
      })
      this.data = result
      console.log(result)
    },
    onSelectChange (selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys
    },
    onDelete () {
      message.success('移除成功')
    },
    createUser () {
      this.createVisible = true
    },
    submitCreateRequest () {
      message.success('创建成功')
      this.createVisible = false
    }
  }
}
</script>

<style lang="less" scoped>
.button-wrap {
  .user-table {
    margin-top: 10px;
  }
  button {
    margin-right: 10px;
  }
  .circle {
    border-radius: 50% !important;
  }
}
</style>
