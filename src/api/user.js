import axiosInstance from "./axiosInstance";

  //  登录
  export function login(userName,password) {
    return axiosInstance.post('login', {
      userName: userName,
      password: password
    })
  }

  // 新增
  export function create(user) {
    return axiosInstance.post('user/create',user)
  }

  // 删除
  export function del(id) {
    return axiosInstance.post('user/delete?id='+id,{
      id:id
    })
  }

  // 更新
  export function update(user) {
    return axiosInstance.post('user/update',user)
  }

  // 查询
  export function query(user) {
    return axiosInstance.post('user/query',user)
  }

  // 详情
  export function detail(id) {
    return axiosInstance.post('user/detail',{
      id:id
    })
  }

  // 文件上传
  export function upload(fromData) {
    return axiosInstance.post('user/uploadFile',fromData)
  }

