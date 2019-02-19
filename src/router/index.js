import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/index'
import Brief from '@/pages/Brief/brief'
import Login from '@/components/Login'
import Framework from '@/pages/Framework/framework'
import News from '@/pages/News/news'
import Release from '@/pages/News/Release'
import Mail from '@/pages/Mail/mail'
import Notice from '@/pages/Notice/notice'
import Accession from '@/pages/Accession/accession'
import Membership from '@/pages/Membership/membership'
import Personal from '@/pages/Personal/personal'
import Authen from '@/pages/Personal/children/authen'
import Examine from '@/pages/Mail/children/examine'
import Activity from '@/pages/Activity/activity'
import Releasenews from '@/pages/Activity/children/Releasenews'
import Privilege from '@/pages/Privilege/privilege'
import Data from '@/pages/Data/data'
import Message from '@/pages/Message/message'

import { Uploader } from 'vant'

Vue.use(Router)
Vue.use(Uploader)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    }, {
      // 登录页
      path: '/Login',
      component: Login
    }, {
      // 简介
      path: '/Brief',
      component: Brief
    }, {
      // 组织架构
      path: '/Framework',
      component: Framework
    }, {
      // 新闻
      path: '/News',
      component: News
    }, {
      path: '/Release',
      component: Release
    }, {
      // 通讯录
      path: '/Mail',
      component: Mail
    }, {
      // 通讯录
      path: '/Examine',
      component: Examine
    }, {
      // 通知
      path: '/Notice',
      component: Notice
    }, {
      // 申请加入设置
      path: '/Accession',
      component: Accession
    }, {
      // 会费
      path: '/Membership',
      component: Membership
    }, {
      // 账号详情
      path: '/Personal',
      component: Personal
    }, {
      // 账号详情 => 开通官方认证
      path: '/Authen',
      component: Authen
    }, {
      // 活动
      path: '/Activity',
      component: Activity
    }, {
      // 发布活动
      path: '/Releasenews',
      component: Releasenews
    }, {
      // 权限管理
      path: '/Privilege',
      component: Privilege
    }, {
      // 数据
      path: '/Data',
      component: Data
    }, {
      // 消息通知
      path: '/Message',
      component: Message
    }
  ]
})
