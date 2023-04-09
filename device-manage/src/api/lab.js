import request from '@/utils/request'

export function getLabNumberApi(data) {
  return request({
    url: '/device/laboratoryNumber/pageList',
    method: 'get',
    params: data
  })
}

export function exportLabApi(data) {
  return request({
    url: '/device/laboratoryNumber/getExcel',
    method: 'get',
    params: data
  })
}

export function labAddApi(data) {
  return request({
    url: '/device/laboratory/add',
    method: 'post',
    data
  })
}
export function labDeleteApi(data) {
  return request({
    url: '/device/laboratory/delete',
    method: 'delete',
    params: data
  })
}

export function getLabPageApi(data) {
  return request({
    url: '/device/laboratory/pageList',
    method: 'get',
    params: data
  })
}
export function queryLabApi(data) {
  return request({
    url: '/device/laboratory/query/one',
    method: 'get',
    params: data
  })
}

export function updateLabApi(data) {
  return request({
    url: '/device/laboratory/update',
    method: 'post',
    data
  })
}

export function subscribeLabAddApi(data) {
  return request({
    url: '/device/subscribe/add',
    method: 'post',
    data
  })
}
export function subscribeLabImportApi(data) {
  return request({
    url: '/device/subscribe/import',
    method: 'post',
    data
  })
}
export function getSubscribeLabPageApi(data) {
  return request({
    url: '/device/subscribe/pageList',
    method: 'get',
    params: data
  })
}

export function querySubscribeLabPageApi(data) {
  return request({
    url: '/device/subscribe/query/one',
    method: 'get',
    params: data
  })
}

export function cancelSubscribeLabPageApi(data) {
  return request({
    url: '/device/subscribe/update',
    method: 'get',
    params: data
  })
}
