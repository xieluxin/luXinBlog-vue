import axiosInstance from "./axiosInstance";

  // 新增
  export function create(channel) {
    return axiosInstance.post('channel/create',channel)
  }

  // 删除
  export function del(id) {
    return axiosInstance.post('channel/delete?id='+id,{
      id:id
    })
  }

  // 更新
  export function update(channel) {
    return axiosInstance.post('channel/update',channel)
  }

  // 查询
  export function query(channel) {
    return axiosInstance.post('channel/query',channel)
  }

  // 查询 所有
  export function tree() {
    return axiosInstance.post('channel/tree')
  }

  // 详情
  export function detail(id) {
    return axiosInstance.post('channel/detail?id='+id)
  }

  // 文件上传
  export function upload(fromData) {
    return axiosInstance.post('channel/uploadFile',fromData)
  }
