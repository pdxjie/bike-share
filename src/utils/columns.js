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
export const fixedColumns = [
  {
    title: 'id',
    dataIndex: 'id',
    align: 'center',
    width: 100,
    fixed: 'left'
  },
  {
    title: '用户名',
    dataIndex: 'userName',
    align: 'center',
    width: 100,
    fixed: 'left'
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
export const cityColumn = [
  {
    title: '城市ID',
    dataIndex: 'cityId',
    align: 'center'
  },
  {
    title: '城市名称',
    dataIndex: 'cityName',
    align: 'center'
  },
  {
    title: '用车模式',
    dataIndex: 'mode',
    align: 'center',
    scopedSlots: { customRender: 'mode' }
  },
  {
    title: '运营模式',
    dataIndex: 'opMode',
    align: 'center',
    scopedSlots: { customRender: 'opMode' }
  },
  {
    title: '授权加盟商',
    dataIndex: 'authStatusName',
    align: 'center',
    scopedSlots: { customRender: 'authStatusName' }
  },
  {
    title: '城市管理员',
    dataIndex: 'cityAdmin',
    align: 'center'
  },
  {
    title: '城市开通时间',
    dataIndex: 'openTime',
    align: 'center'
  },
  {
    title: '操作时间',
    dataIndex: 'actionTime',
    align: 'center'
  },
  {
    title: '操作人',
    dataIndex: 'operator',
    align: 'center'
  }
]
