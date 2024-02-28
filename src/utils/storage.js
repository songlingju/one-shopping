// 通用的名字
const INFO_KEY = 'one_shopping_info'
const HISTORY_KEY = 'one_history_list'

// 获取个人信息
export const getInfo = () => {
  const defaultObj = { token: '', userId: '' }
  const result = localStorage.getItem(INFO_KEY)
  return result ? JSON.parse(result) : defaultObj
}
// 设置个人信息
export const setInfo = (obj) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}

// 移除个人信息
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}

// 获取搜索历史
export const getHistoryLlist = () => {
  const res = localStorage.getItem(HISTORY_KEY)
  return res ? JSON.parse(res) : []
}
// 设置搜索历史
export const setHistoryLlist = (arr) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(arr))
}
