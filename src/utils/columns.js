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

export const orderColumn = [
  {
    title: '订单编号',
    dataIndex: 'orderId',
    align: 'center',
    scopedSlots: { customRender: 'orderId' }
  },
  {
    title: '车辆编号',
    dataIndex: 'carId',
    align: 'center',
    scopedSlots: { customRender: 'carId' }
  },
  {
    title: '用户名',
    dataIndex: 'userName',
    align: 'center'
  },
  {
    title: '手机号',
    dataIndex: 'phone',
    align: 'center'
  },
  {
    title: '里程',
    dataIndex: 'mileage',
    align: 'center'
  },
  {
    title: '行程时长',
    dataIndex: 'time',
    align: 'center'
  },
  {
    title: '状态',
    dataIndex: 'status',
    align: 'center',
    scopedSlots: { customRender: 'status' }
  },
  {
    title: '开始时间',
    dataIndex: 'beginTime',
    align: 'center'
  },
  {
    title: '结束时间',
    dataIndex: 'endTime',
    align: 'center'
  },
  {
    title: '订单金额',
    dataIndex: 'orderMoney',
    align: 'center',
    scopedSlots: { customRender: 'orderMoney' }
  },
  {
    title: '实付金额',
    dataIndex: 'orderedMoney',
    align: 'center',
    scopedSlots: { customRender: 'orderedMoney' }
  }
]
