import Vue from 'vue'
import Vuex from 'vuex'
import token from './token'
import {login} from "./api/user";

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    token:token.get()
  },
  mutations:{
    setToken(state,paramToken){
      state.token = paramToken;
      token.set(paramToken)
    },
    // 退出登录
    logout(){
      token.clear();
    },
  },
  actions:{
    login({commit},user){
      return new Promise((resolve,reject)=>{
        login(user.userName,user.password).then(data=>{
          commit('setToken',data.date.token);
           token.setUser(data.date.user);
          resolve()
        }).catch(error=>{
          reject(error)
        })
      })
    }
  }
});
export default store
