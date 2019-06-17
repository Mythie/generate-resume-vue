<template>
  <div class="mobile-contact">
    <FormSwitch
      v-model="enabled"
      label="Display Mobile?"
    />

    <transition
      name="custom-classes-transition"
      mode="out-in"
      enter-active-class="animated fadeIn faster"
      leave-active-class="animated fadeOut faster"
    >
      <div v-if="enabled">
        <div
          name="mobile-value"
          class="form-group"
        >
          <label
            class="form-label"
            for="mobile-value"
          >
            Mobile:
          </label>
          <input
            id="mobile-value"
            v-model="value"
            class="form-text"
            type="tel"
          >
          <div class="form-description small">
            The phone number to be called when the displayed number is clicked.
          </div>
        </div>
        <div
          name="mobile-display"
          class="form-group"
        >
          <label
            class="form-label"
            for="mobile-display"
          >
            Display:
          </label>
          <input
            id="mobile-display"
            v-model="pretty"
            class="form-text"
            type="mobile"
          >
          <div class="form-description small">
            The phone number to be displayed, may be formatted to suit needs.
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
        return this.$store.state.config.applicant.mobile.enabled;
      },
      set(value) {
        this.$store.commit('updateApplicantContact', {
          type: 'mobile',
          prop: 'enabled',
          value,
        });
      },
    },
    pretty: {
      get() {
        return this.$store.state.config.applicant.mobile.pretty;
      },
      set(value) {
        this.$store.commit('updateApplicantContact', {
          type: 'mobile',
          prop: 'pretty',
          value,
        });
      },
    },
    value: {
      get() {
        return this.$store.state.config.applicant.mobile.value;
      },
      set(value) {
        this.$store.commit('updateApplicantContact', {
          type: 'mobile',
          prop: 'value',
          value,
        });

        this.$store.commit('updateApplicantContact', {
          type: 'mobile',
          prop: 'pretty',
          value: this.prettyNumber,
        });
      },
    },
    prettyNumber() {
      if (this.value.length === 8) {
        return this.value.replace(/(\d{4})(\d{4})/, '$1 $2');
      }

      if (this.value.length === 9) {
        return this.value.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
      }

      if (this.value.length === 10) {
        return this.value.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3');
      }

      if (this.value.length === 12) {
        return this.value.replace(/(.{3})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4');
      }

      return this.value;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
