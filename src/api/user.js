import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/device/login/in',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/device/login/out',
    method: 'get'

  })
}
export function registerApi(data) {
  return request({
    url: '/device/login/add',
    method: 'post',
    data
  })
}
export function addUserApi(data) {
  return request({
    url: '/device/user/add',
    method: 'post',
    data
  })
}

export function deleteUserApi(data) {
  return request({
    url: '/device/user/delete',
    method: 'delete',
    params: data
  })
}

export function importUserApi(data) {
  return request({
    url: '/device/user/import',
    method: 'post',
    data
  })
}
export function getUserPageApi(data) {
  return request({
    url: '/device/user/pageList',
    method: 'get',
    params: data
  })
}

export function queryUserApi(data) {
  return request({
    url: '/device/user/query/one',
    method: 'get',
    params: data
  })
}
export function updateUserApi(data) {
  return request({
    url: '/device/user/update',
    method: 'post',
    data
  })
}

export function updateUserStatusApi(data) {
  return request({
    url: '/device/user/updateStatus',
    method: 'get',
    params: data
  })
}
