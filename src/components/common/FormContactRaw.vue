<template>
  <div class="form-contact-raw">
    <FormSwitch
      :value="value.enabled"
      :label="`Show ${contact}?`"
      @input="updateEnabled"
    />

    <b-form-group
      v-if="value.enabled"
      :label="contact"
    >
      <b-form-input
        :value="value.value"
        @input="updateValue"
      />
      <template
        slot="description"
      >
        <span class="text">
          The value which will be displayed on the resume
        </span>
      </template>
    </b-form-group>
  </div>
</template>

<script>
import FormSwitch from '@/components/common/FormSwitch.vue';

export default {
  components: {
    FormSwitch,
  },
  props: {
    contact: {
      type: String,
      required: true,
    },
    value: {
      type: Object,
      required: true,
    },
  },
  methods: {
    updateValue(v) {
      this.$emit('input', {
        enabled: this.value.enabled,
        value: v,
      });
    },
    updateEnabled(e) {
      this.$emit('input', {
        enabled: e,
        value: this.value.value,
      });
    },
  },
};
</script>

<style>

</style>
