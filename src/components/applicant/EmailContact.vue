<template>
  <div class="email-contact">
    <FormSwitch
      v-model="enabled"
      label="Display Email?"
    />
    <transition
      name="custom-classes-transition"
      mode="out-in"
      enter-active-class="animated fadeIn faster"
      leave-active-class="animated fadeOut faster"
    >
      <div v-if="enabled">
        <div
          name="email-value"
          class="form-group"
        >
          <label
            class="form-label"
            for="email-value"
          >
            Email:
          </label>
          <input
            id="email-value"
            v-model="value"
            class="form-text"
            type="email"
          >
          <div class="form-description small">
            The email address you can be contacted at.
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import FormSwitch from '@/components/common/FormSwitch.vue';

export default {
  components: {
    FormSwitch,
  },
  computed: {
    enabled: {
      get() {
        return this.$store.state.config.applicant.email.enabled;
      },
      set(value) {
        this.$store.commit('updateApplicantContact', {
          type: 'email',
          prop: 'enabled',
          value,
        });
      },
    },
    value: {
      get() {
        return this.$store.state.config.applicant.email.value;
      },
      set(value) {
        this.$store.commit('updateApplicantContact', {
          type: 'email',
          prop: 'value',
          value,
        });
      },
    },
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>
