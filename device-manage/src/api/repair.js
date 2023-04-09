import request from '@/utils/request'

export function addRepairApi(data) {
  return request({
    url: '/device/repair/add',
    method: 'post',
    data
  })
}

export function deleteRepairApi(data) {
  return request({
    url: '/device/repair/delete',
    method: 'delete',
    params: data
  })
}
export function getRepairPageApi(data) {
  return request({
    url: '/device/repair/pageList',
    method: 'get',
    params: data
  })
}

export function queryRepairPageApi(data) {
  return request({
    url: '/device/repair/query/one',
    method: 'get',
    params: data
  })
}

export function updateRepairApi(data) {
  return request({
    url: '/device/repair/update',
    method: 'post',
    data
  })
}

export function updateRepairStatusApi(data) {
  return request({
    url: '/device/repair/update/status',
    method: 'get',
    params: data
  })
}
