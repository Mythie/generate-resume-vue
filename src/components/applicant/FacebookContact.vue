<template>
  <div class="facebook-contact">
    <FormSwitch
      v-model="enabled"
      label="Display Facebook?"
    />

    <transition
      name="custom-classes-transition"
      mode="out-in"
      enter-active-class="animated fadeIn faster"
      leave-active-class="animated fadeOut faster"
    >
      <div v-if="enabled">
        <div
          name="facebook-value"
          class="form-group"
        >
          <label
            class="form-label"
            for="facebook-value"
          >
            Facebook URL:
          </label>
          <input
            id="facebook-value"
            v-model="value"
            class="form-text"
            type="url"
          >
          <div class="form-description small">
            The URL to your Facebook profile.
          </div>
        </div>
        <div
          name="facebook-display"
          class="form-group"
        >
          <label
            class="form-label"
            for="facebook-display"
          >
            Display:
          </label>
          <input
            id="facebook-display"
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
        return this.$store.state.config.applicant.facebook.enabled;
      },
      set(value) {
        this.$store.commit('updateApplicantContact', {
          type: 'facebook',
          prop: 'enabled',
          value,
        });
      },
    },
    pretty: {
      get() {
        return this.$store.state.config.applicant.facebook.pretty;
      },
      set(value) {
        this.$store.commit('updateApplicantContact', {
          type: 'facebook',
          prop: 'pretty',
          value,
        });
      },
    },
    value: {
      get() {
        return this.$store.state.config.applicant.facebook.value;
      },
      set(value) {
        this.$store.commit('updateApplicantContact', {
          type: 'facebook',
          prop: 'value',
          value,
        });

        this.$store.commit('updateApplicantContact', {
          type: 'facebook',
          prop: 'pretty',
          value: this.prettyProfile,
        });
      },
    },
    prettyProfile() {
      const re = new RegExp('https?://(?:www.)?facebook.com/(.*)', 'i');

      if (re.test(this.value)) {
        // Remove the url and trim any slashes from the end.
        const profileSlug = this.value.replace(re, '$1')
          .replace(/-/g, '  ')
          .replace(/\./g, '  ')
          .replace(/\/+$/, '');
        // Some fun function chaining, change all dashes to spaces and Titlecase everything.
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
