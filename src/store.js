/* eslint-disable no-param-reassign */

import Vue from 'vue';
import Vuex from 'vuex';

import state from './store/state';
import mutations from './store/mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters: {
    colors: s => s.colors,
    applicant: s => s.config.applicant,
    currentRole: s => s.config.currentRole,
    experience: s => s.config.experience,
    education: s => s.config.education,
    skills: s => s.config.skills,
    references: s => s.config.references,
  },
  mutations,
  actions: {

  },
});
