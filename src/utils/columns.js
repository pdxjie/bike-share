export const normalColumns = [
  {
    title: 'id',
    dataIndex: 'id',
    align: 'center'
  },
  {
    title: '用户名',
    dataIndex: 'userName',
    align: 'center'
  },
  {
    title: '性别',
    dataIndex: 'sex',
    align: 'center',
    scopedSlots: { customRender: 'sex' }
  },
  {
    title: '状态',
    dataIndex: 'state',
    align: 'center',
    scopedSlots: { customRender: 'state' }
  },
  {
    title: '爱好',
    dataIndex: 'hobby',
    align: 'center',
    scopedSlots: { customRender: 'hobby' }
  },
  {
    title: '生日',
    dataIndex: 'birthday',
    align: 'center'
  },
  {
    title: '地址',
    dataIndex: 'address',
    align: 'center'
  },
  {
    title: '时间',
    dataIndex: 'time',
    align: 'center'
  },
  {
    title: '操作',
    dataIndex: 'action',
    align: 'center',
    scopedSlots: { customRender: 'action' }
  }
]
