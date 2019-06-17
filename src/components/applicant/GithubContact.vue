<template>
  <div class="github-contact">
    <FormSwitch
      v-model="enabled"
      label="Display Github?"
    />

    <transition
      name="custom-classes-transition"
      mode="out-in"
      enter-active-class="animated fadeIn faster"
      leave-active-class="animated fadeOut faster"
    >
      <div v-if="enabled">
        <div
          name="github-value"
          class="form-group"
        >
          <label
            class="form-label"
            for="github-value"
          >
            Github URL:
          </label>
          <input
            id="github-value"
            v-model="value"
            class="form-text"
            type="url"
          >
          <div class="form-description small">
            The URL to your Github profile.
          </div>
        </div>
        <div
          name="github-display"
          class="form-group"
        >
          <label
            class="form-label"
            for="github-display"
          >
            Display:
          </label>
          <input
            id="github-display"
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
        return this.$store.state.config.applicant.github.enabled;
      },
      set(value) {
        this.$store.commit('updateApplicantContact', {
          type: 'github',
          prop: 'enabled',
          value,
        });
      },
    },
    pretty: {
      get() {
        return this.$store.state.config.applicant.github.pretty;
      },
      set(value) {
        this.$store.commit('updateApplicantContact', {
          type: 'github',
          prop: 'pretty',
          value,
        });
      },
    },
    value: {
      get() {
        return this.$store.state.config.applicant.github.value;
      },
      set(value) {
        this.$store.commit('updateApplicantContact', {
          type: 'github',
          prop: 'value',
          value,
        });

        this.$store.commit('updateApplicantContact', {
          type: 'github',
          prop: 'pretty',
          value: this.prettyProfile,
        });
      },
    },
    prettyProfile() {
      const re = new RegExp('https?://(?:www)?github.com/(.*)', 'i');

      if (re.test(this.value)) {
        const profileSlug = this.value.replace(re, '$1')
          .replace(/-/g, '  ')
          .replace(/\./g, '  ')
          .replace(/\/$/, '');

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
