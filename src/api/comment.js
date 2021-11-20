import axiosInstance from "./axiosInstance";

  // 新增
  export function create(comment) {
    return axiosInstance.post('comment/create',comment)
  }

  // 删除
  export function del(id) {
    return axiosInstance.post('comment/delete?id='+id,{
      id:id
    })
  }

  // 查询
  export function query(comment) {
    return axiosInstance.post('comment/query',comment)
  }

  // 详情
  export function detail(id) {
    return axiosInstance.post('comment/detail?id='+id)
  }
