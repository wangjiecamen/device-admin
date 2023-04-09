import Layout from '@/layout'

export const userRouter = [
  {
    path: '/',
    component: Layout,
    redirect: '/user-notice',
    meta: { roles: [1] }
  },
  {
    path: '/user-notice',
    redirect: '/user-notice/list',
    component: Layout,
    meta: { roles: [1] },
    children: [
      { path: 'list', name: 'UserNoticeList', component: () => import('@/views/user/notice/list'), meta: { title: '公告列表', icon: 'el-icon-setting', roles: [1] }},
      { path: 'detail', name: 'UserNoticeDetail', component: () => import('@/views/user/notice/detail.vue'), meta: { hidden: true, roles: [1] }}
    ]
  },
  {
    path: '/user-lab',
    redirect: '/user-lab/list',
    component: Layout,
    meta: { roles: [1] },
    children: [
      { path: 'list', name: 'UserLabList', component: () => import('@/views/user/lab/list'), meta: { title: '实验室列表', icon: 'el-icon-setting', roles: [1] }},
      { path: ':id(\\d+)/detail', name: 'UserLabDetail', component: () => import('@/views/user/lab/detail.vue'), meta: { hidden: true, roles: [1] }},
      { path: ':id(\\d+)/labDetail', name: 'User_Lab_Detail', component: () => import('@/views/user/lab/labDetail.vue'), meta: { hidden: true, roles: [1] }}
    ]
  },
  {
    path: '/user-repair',
    redirect: '/user-repair/list',
    component: Layout,
    meta: { roles: [1] },
    children: [
      { path: 'list', name: 'UserLabList', component: () => import('@/views/user/repair/list'), meta: { title: '报修列表', icon: 'el-icon-setting', roles: [1] }}

    ]
  },
  {
    path: '/user-booking',
    redirect: '/user-booking/list',
    component: Layout,
    meta: { roles: [1] },
    children: [
      { path: 'list', name: 'UserBookingList', component: () => import('@/views/user/booking/list'), meta: { title: '我的预约', icon: 'el-icon-setting', roles: [1] }}
    ]
  },
  {
    path: '/user-device',
    redirect: '/user-device/list',
    component: Layout,
    meta: { roles: [1] },
    children: [
      { path: 'list', name: 'UserDeviceList', component: () => import('@/views/user/device/list'), meta: { title: '设备列表', icon: 'el-icon-setting', roles: [1] }},
      { path: ':id(\\d+)/detail', name: 'UserDeviceDetail', component: () => import('@/views/admin/device/edit.vue'), meta: { hidden: true, roles: [1] }},
    ]
  },
  {
    path: '/user-borrow-device',
    redirect: '/user-borrow-device/list',
    component: Layout,
    meta: { roles: [1] },
    children: [
      { path: 'list', name: 'UserBorrowDeviceList', component: () => import('@/views/user/borrowDevice/list'), meta: { title: '借用设备列表', icon: 'el-icon-setting', roles: [1] }}
    ]
  },
  {
    path: '/user-personal',
    redirect: '/user-personal/index',
    component: Layout,
    meta: { roles: [1] },
    children: [
      { path: 'index', name: 'UserPersonal', component: () => import('@/views/user/personalCenter/index'), meta: { title: '个人中心', icon: 'el-icon-setting', roles: [1] }}

    ]
  }

]
