import axios from "axios"
import token from "../token";
import store from "../store";

const axiosInstance = axios.create({
  baseURL:'http://localhost:8086/cms/',
  timeout:10000,
});

// 请求拦截器配置
axiosInstance.interceptors.request.use(config=>{
  if (store.state.token){
    config.headers['token'] = store.state.token
  }
  return config;
},error => {
  return Promise.reject(error);
});
// 添加响应 拦截器
axiosInstance.interceptors.response.use(response=>{

  let token =  response.headers['token'];
  if (token){
    store.commit('setToken',token);
  }
  // 获取 后端返回的对象
  const res = response.data;
  if (response.status == 200){
    // 数据正常响应
    if (res.status == 200){
      // console.log('响应正常');
      return res;
    }else{
      // console.log('响应不正常')
      return Promise.reject(res.msg)
    }
  }
},error => {
  return Promise.reject(error);
});


export default axiosInstance
