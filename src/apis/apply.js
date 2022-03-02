import { iotRequest } from '@/apis/api'

export const getApplyList = (params) => {
  return iotRequest('get', '/developercenter-api/common/environment', params)
}
