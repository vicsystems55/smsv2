import Vue from 'vue'
import Router from "vue-router";

import Body from '../components/body'

import SamplePage from '../pages/sample_page'

import Members from '../pages/admin/Members'

import Member from '../pages/admin/Member'

import Profile from '../pages/common/Profile'

import AdminHome from '../pages/admin/Home'

import AdminClasses from '../pages/admin/Classes'

import AdminCourses from '../pages/admin/Courses'

import AdminTimetable from '../pages/admin/Timetable'

import AdminAccounts from '../pages/admin/Accounts'

import AdminReports from '../pages/admin/Reports'

import AdminFinancials from '../pages/admin/Financials'

import AdminNotifications from '../pages/admin/Notifications'

import AdminSettings from '../pages/admin/Settings'

import Notifications from '../pages/common/Notifications'

import Module from '../pages/common/Module'

import Auth from '../auth/auth';

import login from '../auth/login_one';

import Register from '../auth/register';

// component

Vue.use(Router)

const routes = [
  { 
    path: '', 
    redirect: { 
      name: 'default' 
    }
  },
  {
    path: '',
    component: Auth,
    children:[{
      path:'',
      component: login

    }
    ]
  },
  {
    path: '/auth',
    component: Auth,
    children: [
    {
      path: 'login',
      name: 'Login 1',
      component: login,
      meta: {
        title: ' Login | Metaschools',
      }
    },
    {
      path: 'register',
      name: 'register 1',
      component: Register,
      meta: {
        title: ' Register | Metaschools',
      }
    }
    ]
    
  },
  {
    path: '/admin',
    component: Body,
    children: [
    {
      path: 'dashboard',
      name: 'Dashboard',
      component: AdminHome,
      meta: {
        title: 'Admin | Dashboard',
      }
    },

    {
      path: 'classes',
      name: 'Classes',
      component: AdminClasses,
      meta: {
        title: 'Admin | Classes',
      }
    },

    {
      path: 'courses',
      name: 'Courses',
      component: AdminCourses,
      meta: {
        title: 'Admin | Courses',
      }
    },

    {
      path: 'timetable',
      name: 'Timetable',
      component: AdminTimetable,
      meta: {
        title: 'Admin | Timetable',
      }
    },

    {
      path: 'accounts',
      name: 'Accounts',
      component: AdminAccounts,
      meta: {
        title: 'Admin | Accounts',
      }
    },

    
    {
      path: 'reports',
      name: 'Reports',
      component: AdminReports,
      meta: {
        title: 'Admin | Reports',
      }
    },

    {
      path: 'financials',
      name: 'Financials',
      component: AdminFinancials,
      meta: {
        title: 'Admin | Financials',
      }
    },

    {
      path: 'notifications',
      name: 'Notifications',
      component: Notifications,
      meta: {
        title: 'Admin | Notifications',
      }
    },

    {
      path: 'settings',
      name: 'Settings',
      component: AdminSettings,
      meta: {
        title: 'Admin | Settings',
      }
    },

    {
      path: 'member/:id',
      name: 'member',
      component: Profile,
      meta: {
        title: 'Admin | Member',
      }
    },
    {
      path: 'members',
      name: 'mebmers',
      component: Members,
      meta: {
        title: 'Admin | Members',
      }
    },

    {
      path: 'module/:id',
      name: 'module',
      component: Module,
      meta: {
        title: 'Admin | Module',
      }
    },
    {
      path: 'default',
      name: 'default',
      component: SamplePage,
      meta: {
        title: 'Default Dashboard | Endless - Premium Admin Template',
      }
    },
    {
      path: 'ecommerce',
      name: 'ecommerce',
      component: SamplePage,
      meta: {
        title: 'Ecommerce Dashboard | Endless - Premium Admin Template',
      }
    }
    ]
  },

];

const router = new Router({
  routes,
  base: '/',
  mode: 'history',
  linkActiveClass: "active",
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});

export default router
