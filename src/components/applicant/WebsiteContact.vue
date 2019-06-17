<template>
  <div class="website-contact">
    <FormSwitch
      v-model="enabled"
      label="Display Website?"
    />
    <transition
      name="custom-classes-transition"
      mode="out-in"
      enter-active-class="animated fadeIn faster"
      leave-active-class="animated fadeOut faster"
    >
      <div v-if="enabled">
        <div
          name="website-value"
          class="form-group"
        >
          <label
            class="form-label"
            for="website-value"
          >
            Website:
          </label>
          <input
            id="website-value"
            v-model="value"
            class="form-text"
            type="url"
          >
          <div class="form-description small">
            The URL to your website.
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
        return this.$store.state.config.applicant.website.enabled;
      },
      set(value) {
        this.$store.commit('updateApplicantContact', {
          type: 'website',
          prop: 'enabled',
          value,
        });
      },
    },
    value: {
      get() {
        return this.$store.state.config.applicant.website.value;
      },
      set(value) {
        this.$store.commit('updateApplicantContact', {
          type: 'website',
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
