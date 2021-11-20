import axiosInstance from "./axiosInstance";

  // 新增
  export function create(tag) {
    return axiosInstance.post('tag/create',tag)
  }

  // 删除
  export function del(id) {
    return axiosInstance.post('tag/delete?id='+id,{
      id:id
    })
  }

  // 更新
  export function update(tag) {
    return axiosInstance.post('tag/update',tag)
  }

  // 查询
  export function query(tag) {
    return axiosInstance.post('tag/query',tag)
  }

  // 查询 全部
  export function all(tag) {
    return axiosInstance.post('tag/all',tag)
  }


  // 详情
  export function detail(id) {
    return axiosInstance.post('tag/detail',{
      id:id
    })
  }

  // 标签云
  export function TagAll(tag){
    return axiosInstance.post('tag/tagAll',tag)
  }

