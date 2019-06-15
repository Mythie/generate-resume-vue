<template>
  <div class="form-contact-pretty">
    <FormSwitch
      :value="value.enabled"
      :label="`Show ${contact}?`"
      @input="updateEnabled"
    />

    <b-row v-if="value.enabled">
      <b-col md="6">
        <b-form-group
          label="Display"
        >
          <b-form-input
            :value="value.pretty"
            @input="updatePretty"
          />
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
          <b-form-input
            :value="value.value"
            @input="updateValue"
          />
          <template
            slot="description"
          >
            <span class="text">
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
    value: {
      type: Object,
      required: true,
    },
  },
  methods: {
    updatePretty(p) {
      this.$emit('input', {
        enabled: this.value.enabled,
        pretty: p,
        value: this.value.value,
      });
    },
    updateValue(v) {
      this.$emit('input', {
        enabled: this.value.enabled,
        pretty: this.value.pretty,
        value: v,
      });
    },
    updateEnabled(e) {
      this.$emit('input', {
        enabled: e,
        pretty: this.value.pretty,
        value: this.value.value,
      });
    },
  },
};
</script>

<style>

</style>
