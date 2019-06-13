<template>
  <div class="config-forms">
    <h2>Customize your Resume</h2>
    <hr>
    <ApplicantInput @input="handleApplicant" />
    <CurrentRoleInput @input="handleCurrentRole" />
    <ExperienceInput @input="handleExperience" />
    <EducationInput @input="handleEducation" />
    <SkillsInput @input="handleSkills" />
    <ReferencesInput @input="handleReferences" />
    <b-row class="mt-3">
      <b-col
        class="d-flex flex-row"
        xs="6"
      >
        <a
          href="#"
          class="cancel"
          variant="outline"
          @click="$emit('action:goback')"
        >
          Cancel
        </a>
      </b-col>
      <b-col
        class="d-flex flex-row-reverse"
        xs="6"
      >
        <b-button
          variant="outline"
          size="lg"
          @click="$emit('submit:resume')"
        >
          Finish
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ApplicantInput from '@/components/generator-forms/config-forms/ApplicantInput.vue';
import SkillsInput from '@/components/generator-forms/config-forms/SkillsInput.vue';
import CurrentRoleInput from '@/components/generator-forms/config-forms/CurrentRoleInput.vue';
import ExperienceInput from '@/components/generator-forms/config-forms/ExperienceInput.vue';
import EducationInput from '@/components/generator-forms/config-forms/EducationInput.vue';
import ReferencesInput from '@/components/generator-forms/config-forms/ReferencesInput.vue';

export default {
  components: {
    ApplicantInput,
    SkillsInput,
    CurrentRoleInput,
    ExperienceInput,
    EducationInput,
    ReferencesInput,
  },
  data() {
    return {
      applicant: {},
      currentRole: {},
      experience: {},
      education: {},
      skills: {},
      references: {},
    };
  },
  computed: {
    formatted() {
      return {
        applicant: this.applicant,
        currentRole: this.currentRole,
        experience: this.experience,
        education: this.education,
        skills: this.skills,
        references: this.references,
      };
    },
  },
  watch: {
    formatted() {
      this.$emit('update:config', this.formatted);
    },
  },
  mounted() {
    this.$emit('update:config', this.formatted);
  },
  methods: {
    handleApplicant(payload) {
      this.applicant = payload;
    },
    handleCurrentRole(payload) {
      this.currentRole = payload;
    },
    handleExperience(payload) {
      this.experience = payload;
    },
    handleEducation(payload) {
      this.education = payload;
    },
    handleSkills(payload) {
      this.skills = payload;
    },
    handleReferences(payload) {
      this.references = payload;
    },
  },
};
</script>

<style lang="scss" scoped>
a.cancel {
  color: #ffffff;
  text-decoration: underline;
}
</style>
