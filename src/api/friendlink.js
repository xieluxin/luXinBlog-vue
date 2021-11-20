import axiosInstance from "./axiosInstance";

// 新增
export function create(friendLink) {
  return axiosInstance.post('friendLink/create',friendLink)
}

// 删除
export function del(id) {
  return axiosInstance.post('friendLink/delete?id='+id,{
    id:id
  })
}

// 更新
export function update(friendLink) {
  return axiosInstance.post('friendLink/update',friendLink)
}

// 查询
export function query(friendLink) {
  return axiosInstance.post('friendLink/query',friendLink)
}

// 详情
export function detail(id) {
  return axiosInstance.post('friendLink/detail?id='+id)
}

// 文件上传
export function upload(fromData) {
  return axiosInstance.post('friendLink/uploadFile',fromData)
}

// 友情链接
export function getListLink(){
  return axiosInstance('friendLink/getListLink')
}
