import instance from '@/utils/request'

export const getTableData = () => {
  return instance({
    url: '/mock/table/api',
    method: 'get'
  })
}
