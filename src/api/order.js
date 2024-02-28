import request from '@/utils/request'

// 订单结算
export const checkOrder = (mode, obj) => {
  return request.get('/checkout/order', {
    params: {
      mode,
      // cart  buyNow
      delivery: 10,
      // 快递 10  自取 20
      couponId: 0,
      // 优惠券id   0 不适用优惠券
      isUsePoints: 0,
      // 使用积分   0 不使用
      ...obj
      // 传入的参数  动态展开
    }
  })
}
// 提交订单
export const submitOrder = (mode, obj) => {
  return request.post('/checkout/submit', {
    mode,
    delivery: 10,
    couponId: 0,
    isUsePoints: 0,
    payType: 10,
    ...obj
  })
}
// 订单列表
export const getMyOrderList = (dataType, page) => {
  return request.get('/order/list', {
    params: {
      dataType,
      page
    }
  })
}
