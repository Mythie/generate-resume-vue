<template>
  <div class="linkedin-contact">
    <FormSwitch
      v-model="enabled"
      label="Display LinkedIn?"
    />

    <transition
      name="custom-classes-transition"
      mode="out-in"
      enter-active-class="animated fadeIn faster"
      leave-active-class="animated fadeOut faster"
    >
      <div v-if="enabled">
        <div
          name="linkedin-value"
          class="form-group"
        >
          <label
            class="form-label"
            for="linkedin-value"
          >
            LinkedIn URL:
          </label>
          <input
            id="linkedin-value"
            v-model="value"
            class="form-text"
            type="url"
          >
          <div class="form-description small">
            The URL to your LinkedIn profile.
          </div>
        </div>
        <div
          name="linkedin-display"
          class="form-group"
        >
          <label
            class="form-label"
            for="linkedin-display"
          >
            Display:
          </label>
          <input
            id="linkedin-display"
            v-model="pretty"
            class="form-text"
            type="text"
          >
          <div class="form-description small">
            The display on the resume, will link to the profile above.
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
        return this.$store.state.config.applicant.linkedin.enabled;
      },
      set(value) {
        this.$store.commit('updateApplicantContact', {
          type: 'linkedin',
          prop: 'enabled',
          value,
        });
      },
    },
    pretty: {
      get() {
        return this.$store.state.config.applicant.linkedin.pretty;
      },
      set(value) {
        this.$store.commit('updateApplicantContact', {
          type: 'linkedin',
          prop: 'pretty',
          value,
        });
      },
    },
    value: {
      get() {
        return this.$store.state.config.applicant.linkedin.value;
      },
      set(value) {
        this.$store.commit('updateApplicantContact', {
          type: 'linkedin',
          prop: 'value',
          value,
        });

        this.$store.commit('updateApplicantContact', {
          type: 'linkedin',
          prop: 'pretty',
          value: this.prettyProfile,
        });
      },
    },
    prettyProfile() {
      const re = new RegExp('https?://(?:www.)?linkedin.com/in/(.*)', 'i');

      if (re.test(this.value)) {
        // Remove the url and trim any slashes from the end
        const profileSlug = this.value.replace(re, '$1')
          .replace(/-/g, '  ')
          .replace(/\./g, '  ')
          .replace(/\/+$/, '');

        return profileSlug.split(' ')
          .map(x => x.charAt(0).toUpperCase() + x.slice(1))
          .join(' ');
      }

      return '';
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
