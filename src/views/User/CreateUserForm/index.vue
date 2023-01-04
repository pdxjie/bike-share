<template>
  <div>
    <a-form layout="horizontal">
      <a-form-item label="用户名"
                   :label-col="formItemLayout.labelCol"
                   :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-input placeholder="请输入员工姓名" v-model="FormObj.username"/>
      </a-form-item>
      <a-form-item label="爱好"
                   :label-col="formItemLayout.labelCol"
                   :wrapper-col="{span:12}"
      >
        <a-select mode="tags" style="width: 100%" placeholder="请选择爱好" @change="handleHobbyChange">
          <a-select-option v-for="item in hobbies" :key="item.sybom.toString()">
            {{ item.label }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="是否婚配"
                   :label-col="formItemLayout.labelCol"
                   :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-select default-value="请选择" style="width: 120px" @change="handleIsMarryChange">
          <a-select-option value="1">
            已婚
          </a-select-option>
          <a-select-option value="2">
            未婚
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="生日"
                   :label-col="formItemLayout.labelCol"
                   :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-date-picker @change="onChange" />
      </a-form-item>
      <a-form-item label="家庭住址"
                   :label-col="formItemLayout.labelCol"
                   :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-input placeholder="请输入家庭住址" v-model="FormObj.address"/>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'CreateUserForm',
  data () {
    return {
      formItemLayout: {
        labelCol: { span: 5 },
        wrapperCol: { span: 10 }
      },
      FormObj: {
        username: '',
        sex: '',
        hobby: [],
        isMarry: '',
        birthday: '',
        address: ''
      },
      hobbies: [
        { sybom: 1, label: '吃饭' },
        { sybom: 2, label: '睡觉' },
        { sybom: 3, label: '编程' }
      ]
    }
  },
  methods: {
    handleHobbyChange (val) {
      console.log(val)
      this.FormObj.hobby = val
    },
    handleIsMarryChange (val) {
      this.FormObj.isMarry = val
    },
    onChange (_, dateString) {
      this.FormObj.birthday = dateString
    }
  }
}
</script>

<style scoped>

</style>
