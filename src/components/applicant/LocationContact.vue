<template>
  <div class="location-contact">
    <FormSwitch
      v-model="enabled"
      label="Display Location?"
    />
    <transition
      name="custom-classes-transition"
      mode="out-in"
      enter-active-class="animated fadeIn faster"
      leave-active-class="animated fadeOut faster"
    >
      <div v-if="enabled">
        <div
          name="location-value"
          class="form-group"
        >
          <label
            class="form-label"
            for="location-value"
          >
            Location:
          </label>
          <input
            id="location-value"
            v-model="value"
            class="form-text"
            type="text"
          >
          <div class="form-description small">
            Your current location.
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
        return this.$store.state.config.applicant.location.enabled;
      },
      set(value) {
        this.$store.commit('updateApplicantContact', {
          type: 'location',
          prop: 'enabled',
          value,
        });
      },
    },
    value: {
      get() {
        return this.$store.state.config.applicant.location.value;
      },
      set(value) {
        this.$store.commit('updateApplicantContact', {
          type: 'location',
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
