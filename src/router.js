import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import PrivacyPolicy from './views/PrivacyPolicy.vue';
import TermsOfService from './views/TermsOfService.vue';
import Colors from './views/Colors.vue';
import Applicant from './views/Applicant.vue';
import CurrentRole from './views/CurrentRole.vue';
import Experience from './views/Experience.vue';
import Education from './views/Education.vue';
import SkillsAndReferences from './views/SkillsAndReferences.vue';
import Submit from './views/Submit.vue';

const DEFAULT_TITLE = 'Generate Resume';

Vue.use(Router);

const vrouter = new Router({
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
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicy,
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: TermsOfService,
    },
    {
      path: '/colors',
      name: 'colors',
      component: Colors,
      meta: {
        title: `${DEFAULT_TITLE} - Colors`,
      },
    },
    {
      path: '/applicant',
      name: 'applicant',
      component: Applicant,
      meta: {
        title: `${DEFAULT_TITLE} - Applicant`,
      },
    },
    {
      path: '/current-role',
      name: 'current-role',
      component: CurrentRole,
      meta: {
        title: `${DEFAULT_TITLE} - Current Role`,
      },
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience,
      meta: {
        title: `${DEFAULT_TITLE} - Experience`,
      },
    },
    {
      path: '/education',
      name: 'education',
      component: Education,
      meta: {
        title: `${DEFAULT_TITLE} - Education`,
      },
    },
    {
      path: '/skills-and-references',
      name: 'skills-and-references',
      component: SkillsAndReferences,
      meta: {
        title: `${DEFAULT_TITLE} - Skills & References`,
      },
    },
    {
      path: '/submit',
      name: 'submit',
      component: Submit,
      meta: {
        title: `${DEFAULT_TITLE} - Submit`,
      },
    },
  ],
});

vrouter.beforeEach((to, from, next) => {
  document.title = to.meta.title || DEFAULT_TITLE;
  next();
});

export default vrouter;
