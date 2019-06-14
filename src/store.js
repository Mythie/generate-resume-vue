/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import initialState from './state';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...initialState,
  },
  getters: {
    colors: state => state.colors,
    applicant: state => state.config.applicant,
    currentRole: state => state.config.currentRole,
    experience: state => state.config.experience,
    education: state => state.config.education,
    skills: state => state.config.skills,
    references: state => state.config.references,
  },
  mutations: {
    updateColor(state, payload) {
      state.colors[payload.prop] = payload.value;
    },
    updateApplicant(state, payload) {
      state.config.applicant[payload.prop] = payload.value;
    },
    updateApplicantContact(state, payload) {
      state.config.applicant[payload.prop] = payload.data;
    },
    updateCurrentRole(state, payload) {
      state.config.currentRole = payload;
    },
    updateExperienceEnabled(state, status) {
      state.config.experience.enabled = status;
    },
    addExperienceItem(state, payload) {
      state.config.experience.list.push(payload);
    },
    removeExperienceItem(state, index) {
      state.config.experience.list.splice(index, 1);
    },
    updateEducationEnabled(state, status) {
      state.config.education.enabled = status;
    },
    addEducationItem(state, payload) {
      state.config.education.list.push(payload);
    },
    removeEducationItem(state, index) {
      state.config.education.list.splice(index, 1);
    },
    updateSkillsEnabled(state, status) {
      state.config.skills.enabled = status;
    },
    updateSkillsList(state, payload) {
      state.config.skills.list = payload;
    },
    updateReferencesEnabled(state, status) {
      state.config.references.enabled = status;
    },
    addReferenceItem(state, payload) {
      state.config.references.list.push(payload);
    },
    removeReferenceItem(state, index) {
      state.config.references.list.splice(index, 1);
    },
  },
  actions: {

  },
});
