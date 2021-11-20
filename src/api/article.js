import axiosInstance from "./axiosInstance";

  // 新增
  export function create(article) {
    return axiosInstance.post('article/create',article)
  }

  // 删除
  export function del(id) {
    return axiosInstance.post('article/delete?id='+id,{
      id:id
    })
  }

  // 更新
  export function update(article) {
    return axiosInstance.post('article/update',article)
  }

  export function Up(article) {
    return axiosInstance.post('article/update',article)
  }


// 查询
  export function query(article) {
    return axiosInstance.post('article/query',article)
  }


  // 详情
  export function detail(id) {
    return axiosInstance.post('article/detail',{
      id:id
    })
  }


  export function getArticleId(id) {
    return axiosInstance.post('article/detail?id='+id)
  }

  // 文件上传
  export function upload(fromData) {
    return axiosInstance.post('article/uploadFile',fromData)
  }
