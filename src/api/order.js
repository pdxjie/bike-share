import instance from '@/utils/request'

export const ordersApi = () => {
  return instance({
    url: '/mock/orders/api',
    method: 'get'
  })
}

export const getCarDetail = () => {
  return instance({
    url: '/mock/car/detail/api',
    method: 'get'
  })
}

export const OrderInfoApi = () => {
  return instance({
    url: '/mock/orderInfo/api',
    method: 'get'
  })
}
