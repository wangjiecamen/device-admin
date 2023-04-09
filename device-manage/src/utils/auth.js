import Cookies from 'js-cookie'
import { adminRouter } from '@/router/admin'
import { userRouter } from '@/router/user'

const TokenKey = 'TOKEN'
const UserTypeKey = 'USER_TYPE'
export function getToken() {
  return Cookies.get(TokenKey)
}
export function getUserType() {
  return Cookies.get(UserTypeKey)
}
export function setUserType(userType) {
  return Cookies.set(UserTypeKey, userType)
}
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function removeUserType() {
  return Cookies.remove(UserTypeKey)
}

export function getRouter() {
  let router = []
  const userType = Number(getUserType())
  if (userType === 0) router = adminRouter
  if (userType === 1) router = userRouter
  return router
}
