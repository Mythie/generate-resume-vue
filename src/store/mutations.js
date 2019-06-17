/* eslint-disable no-param-reassign */

export default {
  updateColor(state, payload) {
    state.colors[payload.prop] = payload.value;
  },
  updateApplicant(state, payload) {
    state.config.applicant[payload.prop] = payload.value;
  },
  updateApplicantContact(state, payload) {
    state.config.applicant[payload.type] = {
      ...state.config.applicant[payload.type],
      [payload.prop]: payload.value,
    };
  },
  updateCurrentRoleEnabled(state, status) {
    state.config.currentRole.enabled = status;
  },
  updateCurrentRole(state, payload) {
    state.config.currentRole[payload.prop] = payload.value;
  },
  updateExperience(state, payload) {
    state.config.experience[payload.prop] = payload.value;
  },
  addExperienceItem(state, payload) {
    state.config.experience.list.push(payload);
  },
  removeExperienceItem(state, index) {
    state.config.experience.list.splice(index, 1);
  },
  updateEducation(state, payload) {
    state.config.education[payload.prop] = payload.value;
  },
  addEducationItem(state, payload) {
    state.config.education.list.push(payload);
  },
  removeEducationItem(state, index) {
    state.config.education.list.splice(index, 1);
  },
  updateSkills(state, payload) {
    state.config.skills[payload.prop] = payload.value;
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
};
