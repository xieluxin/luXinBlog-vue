import axiosInstance from "./axiosInstance";

export function queryByPos(pos) {
  return axiosInstance.get('f/channel/queryByPos?pos='+pos)
}

export function get(id) {
  return axiosInstance.get('f/channel/get?id='+id)
}

export function getNew() {
  return axiosInstance.get('f/article/getList')
}

export function getTop(channelId,top) {
  return axiosInstance.get('f/article/getList?channelId='+channelId+"&limit"+top)
}

export function getArticle(id) {
  return axiosInstance.get('f/article/get?id='+id);
}
