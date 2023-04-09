import request from '@/utils/request'

export function getNoticeListApi(data) {
  return request({
    url: '/device/notice/pageList',
    method: 'get',
    params: data
  })
}

export function addNoticeApi(data) {
  return request({
    url: '/device/notice/add',
    method: 'post',
    data
  })
}
export function deleteNoticeApi(data) {
  return request({
    url: '/device/notice/delete',
    method: 'delete',
    params: data
  })
}
export function queryNoticeApi(data) {
  return request({
    url: '/device/notice/query/one',
    method: 'get',
    params: data
  })
}

export function editNoticeApi(data) {
  return request({
    url: '/device/notice/update',
    method: 'post',
    data
  })
}
