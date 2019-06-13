<template>
  <div class="form-contact-pretty">
    <FormSwitch
      v-model="enabled"
      :label="`Show ${contact}?`"
    />

    <b-row v-if="enabled">
      <b-col md="6">
        <b-form-group
          label="Pretty"
        >
          <b-form-input v-model="pretty" />
          <template
            slot="description"
          >
            <span class="text-white">
              The pretty format for the value to be displayed on the resume
            </span>
          </template>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group
          label="Value"
        >
          <b-form-input v-model="value" />
          <template
            slot="description"
          >
            <span class="text-white">
              The raw value which will be linked to
            </span>
          </template>
        </b-form-group>
      </b-col>
    </b-row>
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
      pretty: '',
    };
  },
  computed: {
    formatted() {
      return {
        enabled: this.enabled,
        value: this.value,
        pretty: this.pretty,
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
