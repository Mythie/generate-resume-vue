<template>
  <div class="form-contact-raw">
    <FormSwitch
      v-model="enabled"
      :label="`Show ${contact}?`"
    />

    <b-form-group
      v-if="enabled"
      label="Value"
    >
      <b-form-input v-model="value" />
      <template
        slot="description"
      >
        <span class="text-white">
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
  },
  data() {
    return {
      enabled: false,
      value: '',
    };
  },
  computed: {
    formatted() {
      return {
        enabled: this.enabled,
        value: this.value,
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
};
</script>

<style>

</style>
