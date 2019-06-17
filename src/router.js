import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Colors from './views/Colors.vue';
import Applicant from './views/Applicant.vue';
import CurrentRole from './views/CurrentRole.vue';
import Experience from './views/Experience.vue';
import Education from './views/Education.vue';
import SkillsAndReferences from './views/SkillsAndReferences.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/colors',
      name: 'colors',
      component: Colors,
    },
    {
      path: '/applicant',
      name: 'applicant',
      component: Applicant,
    },
    {
      path: '/current-role',
      name: 'current-role',
      component: CurrentRole,
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience,
    },
    {
      path: '/education',
      name: 'education',
      component: Education,
    },
    {
      path: '/skills-and-references',
      name: 'skills-and-references',
      component: SkillsAndReferences,
    },
    {
      path: '/submit',
      name: 'submit',
      component: () => import('./views/Submit.vue'),
    },
  ],
});
