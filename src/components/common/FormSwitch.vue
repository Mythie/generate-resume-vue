<template>
  <div class="form-switch">
    <div
      class="switch-holder"
      @click="$emit('input', !value)"
    >
      <div :class="['switch', 'on', { active: value }]">
        Yes
      </div>
      <div :class="['switch', 'off', { active: !value }]">
        No
      </div>
    </div>
    <div class="label">
      {{ label }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.form-switch {
  display: flex;
  padding: 7px 0;
}
.switch-holder {
  display: flex;
  padding: 4px;
  background: #ffffff;
  width: 100px;
  border-radius: 7px;
  cursor: pointer;
  border: 1px solid darken($backgroundColor, 5%);
}

.switch {
  line-height: 32px;
  text-align: center;
  height: 32px;
  width: 50%;
  transition: 600ms ease-in-out;
  border-radius: 7px;
}

.label {
  padding-left: 10px;
  align-self: center;
}

.on {
  color: #222222;

  &.active {
    background: #2ecc71;
    color: #ffffff;
  }
}

.off {
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  color: #222222;

  &.active {
    background: #e74c3c;
    color: #ffffff;
  }
}
</style>
