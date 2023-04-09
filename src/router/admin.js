import Layout from '@/layout'

export const adminRouter = [
  {
    path: '/',
    component: Layout,
    redirect: '/admin-device',
    meta: { roles: [0] }
  },
  {
    path: '/admin-device',
    redirect: '/admin-device/list',
    component: Layout,
    meta: { roles: [0] },
    children: [
      { path: 'list', name: 'AdminDeviceList', component: () => import('@/views/admin/device/list'), meta: { title: '设备列表', icon: 'el-icon-setting', roles: [0] }},
      { path: ':id(\\d+)/edit', name: 'AdminDeviceEdit', component: () => import('@/views/admin/device/edit.vue'), meta: { hidden: true, roles: [0] }},
      { path: ':id(\\d+)/detail', name: 'AdminDeviceDetail', component: () => import('@/views/admin/device/edit.vue'), meta: { hidden: true, roles: [0] }},
      { path: 'add', name: 'AdminDeviceAdd', component: () => import('@/views/admin/device/edit.vue'), meta: { hidden: true, roles: [0] }}
    ]
  },
  {
    path: '/admin-notice',
    redirect: '/admin-notice/list',
    component: Layout,
    meta: { roles: [0] },
    children: [
      { path: 'list', name: 'AdminNoticeList', component: () => import('@/views/admin/notice/list.vue'), meta: { title: '公告列表', icon: 'el-icon-setting', roles: [0] }},
      { path: ':id(\\d+)/edit', name: 'AdminNoticeEdit', component: () => import('@/views/admin/notice/edit.vue'), meta: { hidden: true, roles: [0] }},
      { path: ':id(\\d+)/detail', name: 'AdminNoticeDetail', component: () => import('@/views/admin/notice/edit.vue'), meta: { hidden: true, roles: [0] }},
      { path: 'add', name: 'AdminNoticeAdd', component: () => import('@/views/admin/notice/edit.vue'), meta: { hidden: true, roles: [0] }}
    ]
  },
  {
    path: '/admin-repair',
    redirect: '/admin-repair/list',
    component: Layout,
    meta: { roles: [0] },
    children: [
      { path: 'list', name: 'AdminRepairList', component: () => import('@/views/admin/repairs/list.vue'), meta: { title: '设备维修列表', icon: 'el-icon-setting', roles: [0] }},
      { path: ':id(\\d+)/edit', name: 'AdminRepairEdit', component: () => import('@/views/admin/repairs/edit.vue'), meta: { hidden: true, roles: [0] }},
      { path: 'add', name: 'AdminRepairAdd', component: () => import('@/views/admin/repairs/edit.vue'), meta: { hidden: true, roles: [0] }}
    ]
  },
  {
    path: '/admin-user',
    redirect: '/admin-user/list',
    component: Layout,
    meta: { roles: [0] },
    children: [
      { path: 'list', name: 'AdminUserList', component: () => import('@/views/admin/user/list.vue'), meta: { title: '用户列表', icon: 'el-icon-setting', roles: [0] }},
      { path: ':id(\\d+)/edit', name: 'AdminUserEdit', component: () => import('@/views/admin/user/edit.vue'), meta: { hidden: true, roles: [0] }},
      { path: 'add', name: 'AdminUserAdd', component: () => import('@/views/admin/user/edit.vue'), meta: { hidden: true, roles: [0] }}
    ]
  },
  {
    path: '/admin-lab',
    redirect: '/admin-lab/list',
    component: Layout,
    meta: { roles: [0] },
    children: [
      { path: 'list', name: 'AdminLabList', component: () => import('@/views/admin/lab/list.vue'), meta: { title: '实验室列表', icon: 'el-icon-setting', roles: [0] }},
      { path: ':id(\\d+)/edit', name: 'AdminLabEdit', component: () => import('@/views/admin/lab/edit.vue'), meta: { hidden: true, roles: [0] }},
      { path: ':id(\\d+)/detail', name: 'AdminLabDetail', component: () => import('@/views/admin/lab/edit.vue'), meta: { hidden: true, roles: [0] }},
      { path: 'add', name: 'AdminLabAdd', component: () => import('@/views/admin/lab/edit.vue'), meta: { hidden: true, roles: [0] }}
    ]
  }
]
