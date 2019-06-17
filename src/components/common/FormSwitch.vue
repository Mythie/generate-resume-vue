<template>
  <div class="form-switch">
    <input
      :id="id"
      v-model="checked"
      type="checkbox"
    >
    <label :for="id" />
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
  computed: {
    id() {
      return Math.random().toString(36).substring(2);
    },
    checked: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

// Hide the actual checkbox
input[type=checkbox] {
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  // Make it look clickable
  display: block;
  position: relative;
  width: 50px;
  height: 25px;
  background: $primaryDisabled;
  border-radius: 100px;
  cursor: pointer;
  // I dunno
  text-indent: -9999px;

// Create our lil circle
  &:after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 15px;
    height: 15px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }
}

input:checked + label {
  background: $primaryColor;
}

input:checked + label:after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}

.form-switch {
  display: flex;
  padding: 7px 0;
}

.label {
  font-weight: 600;
  font-size: 0.8rem;
  padding-left: 10px;
  align-self: center;
}
</style>
