<template>
  <div class="current-role container">
    <h2>Enter your Current Role</h2>
    <hr>

    <FormSwitch
      v-model="enabled"
      class="mb-3"
      label="Display current role?"
    />
    <div v-if="enabled">
      <FormExperience @input="updateCurrentRole" />
    </div>

    <b-row>
      <b-col
        xs="6"
        class="d-flex flex-row"
      >
        <b-button
          variant="outline"
          to="/applicant"
          size="lg"
        >
          Back
        </b-button>
      </b-col>
      <b-col
        xs="6"
        class="d-flex flex-row-reverse"
      >
        <b-button
          variant="outline"
          to="/experience"
          size="lg"
        >
          Experience&nbsp;
          <fa-icon icon="arrow-right" />
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import FormSwitch from '@/components/common/FormSwitch.vue';
import FormExperience from '@/components/common/FormExperience.vue';

export default {
  components: {
    FormSwitch,
    FormExperience,
  },
  computed: {

    formatted() {
      return {
        enabled: this.enabled,
        company: this.company,
        title: this.title,
        duration: this.duration,
        paragraph: this.paragraph,
        achievementList: this.achievementList,
      };
    },
  },
  watch: {
    formatted() {
      this.$emit('input', this.formatted);
    },
  },
  mounted() {
    this.$emit('input', this.formatted);
  },
  methods: {
    updateCurrentRole(payload) {
      this.$store.commit('updateCurrentRole', payload);
    },
  },
};
</script>

<style lang="scss" scoped>

.buffer {
  margin-bottom: 10px;
}
</style>
