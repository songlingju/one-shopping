import { getInfo, setInfo } from '@/utils/storage'

export default {
  namespaced: true,
  state () {
    return {
      // 个人权值信息
      userInfo: getInfo()

    }
  },
  mutations: {
    // 所有mutations的第一个参数都是 state
    setUserInfo (state, obj) {
      state.userInfo = obj
      setInfo(obj)
    }
  },
  actions: {
    logout (context) {
      // 个人信息重置
      context.commit('setUserInfo', {})
      // 购物车 重置  跨模块 调用
      context.commit('cart/setCartList', [], { root: true })
    }
  },
  getters: {

  }
}
