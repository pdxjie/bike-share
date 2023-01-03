import instance from '@/utils/request'

/**
 * 开通城市
 * @returns {Promise<AxiosResponse<any>>}
 */
export const openCityApi = () => {
  return instance({
    url: '/mock/open/city',
    method: 'post'
  })
}

/**
 * 获取开通城市列表
 * @returns {Promise<AxiosResponse<any>>}
 */
export const citiesApi = () => {
  return instance({
    url: '/mock/cities/api',
    method: 'get'
  })
}
