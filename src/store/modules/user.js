import { login, logout } from '@/api/user'
import { getToken, setToken, removeToken, getUserType, setUserType, getRouter, removeUserType } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    userType: getUserType(),
    roles: []
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_USER_TYPE: (state, userType) => {
    state.userType = userType
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { userName, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ userName: userName.trim(), password: password }).then(response => {
        console.log(response)
        const { data } = response
        commit('SET_TOKEN', data.authorization)
        commit('SET_USER_TYPE', data.userType)
        commit('SET_ROLES', [])
        setToken(data.authorization)
        setUserType(data.userType)
        resolve()
      }).catch(error => {
        console.log(error)
        reject(error)
      })
    })
  },
  getInfo({ commit, state }) {
    const roles = [Number(state.userType)]
    commit('SET_ROLES', roles)
    return Promise.resolve({ roles: roles })
  },
  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken()
        removeUserType()
        resetRouter()
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

