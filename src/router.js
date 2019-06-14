import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/colors',
      name: 'colors',
      component: () => import('./views/Colors.vue'),
    },
    {
      path: '/applicant',
      name: 'applicant',
      component: () => import('./views/Applicant.vue'),
    },
    {
      path: '/current-role',
      name: 'current-role',
      component: () => import('./views/CurrentRole.vue'),
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('./views/Experience.vue'),
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('./views/Education.vue'),
    },
    {
      path: '/skills-and-references',
      name: 'skills-and-references',
      component: () => import('./views/SkillsAndReferences.vue'),
    },
    {
      path: '/submit',
      name: 'submit',
      component: () => import('./views/Submit.vue'),
    },
  ],
});
