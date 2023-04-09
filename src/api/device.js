import request from '@/utils/request'

export function urgeDeviceAddApi(data) {
  return request({
    url: '/device/urgeDevice/add',
    method: 'post',
    data
  })
}

export function urgeDeviceCountApi(data) {
  return request({
    url: '/device/urgeDevice/count',
    method: 'get',
    params: data
  })
}

export function urgeDevicePageApi(data) {
  return request({
    url: '/device/urgeDevice/pageList',
    method: 'get',
    params: data
  })
}

export function urgeDeviceQueryApi(data) {
  return request({
    url: '/device/urgeDevice/query/one',
    method: 'get',
    params: data
  })
}

export function urgeDeviceUpdateApi(data) {
  return request({
    url: '/device/urgeDevice/update',
    method: 'get',
    params: data
  })
}

export function deviceAddApi(data) {
  return request({
    url: '/device/device/add',
    method: 'post',
    data
  })
}

export function deviceDeleteApi(data) {
  return request({
    url: '/device/device/delete',
    method: 'delete',
    params: data
  })
}

export function getDevicePageApi(data) {
  return request({
    url: '/device/device/pageList',
    method: 'get',
    params: data
  })
}

export function queryDevicePageApi(data) {
  return request({
    url: '/device/device/query/one',
    method: 'get',
    params: data
  })
}

export function updateDevicePageApi(data) {
  return request({
    url: '/device/device/update',
    method: 'post',
    data
  })
}

