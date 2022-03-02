import { iotAxios } from 'iot-axios2'

const env = process.env.NODE_ENV
export const baseapi = env === 'development' ? '/apiprod' : ''
/**
 * @description: 封装请求类
 * @param {method} method 请求方式
 * @param {path} path 请求路径
 * @param {params} params 参数
 * @param {headers} headers 请求头
 */
export const iotRequest = (method: string, path: string, params?: any, headers?: any) => {
  if (method.toLowerCase() === 'get') {
    return iotAxios.get(baseapi + path, { params: params }, headers)
  } else {
    return iotAxios.post(baseapi + path, params, headers)
  }
}

