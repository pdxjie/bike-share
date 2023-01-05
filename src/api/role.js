import instance from '@/utils/request'

export const rolesApi = () => {
  return instance({
    url: '/mock/roles/api',
    method: 'get'
  })
}
