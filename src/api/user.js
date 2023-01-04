import instance from '@/utils/request'

export const usersApi = () => {
  return instance({
    url: '/mock/users/api',
    method: 'get'
  })
}
