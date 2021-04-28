import request from '@/utils/request'

// 查询常见问题的解答列表
export function listInformation(query) {
  return request({
    url: '/system/information/list',
    method: 'get',
    params: query
  })
}

// 查询常见问题的解答详细
export function getInformation(helpInformationId) {
  return request({
    url: '/system/information/' + helpInformationId,
    method: 'get'
  })
}

// 新增常见问题的解答
export function addInformation(data) {
  return request({
    url: '/system/information',
    method: 'post',
    data: data
  })
}

// 修改常见问题的解答
export function updateInformation(data) {
  return request({
    url: '/system/information',
    method: 'put',
    data: data
  })
}

// 删除常见问题的解答
export function delInformation(helpInformationId) {
  return request({
    url: '/system/information/' + helpInformationId,
    method: 'delete'
  })
}

// 导出常见问题的解答
export function exportInformation(query) {
  return request({
    url: '/system/information/export',
    method: 'get',
    params: query
  })
}