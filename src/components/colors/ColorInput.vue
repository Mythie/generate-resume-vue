<template>
  <div
    class="color-input"
    tabIndex="0"
    @mouseleave="show = false"
    @keyup.escape="show = false"
    @keyup.enter="show = true"
  >
    <h3 class="text-center">
      {{ label }}
    </h3>
    <!-- Not really a form anymore but it stil works -->
    <div class="color-picker-form">
      <div
        class="color-picker-input"
        :style="{ background: value, 'border': `1px solid ${borderColor}` }"
        @click="show = !show"
      >
        <span :style="{ color: textColor }">{{ value }}</span>
      </div>

      <transition
        name="custom-classes-transition"
        enter-active-class="animated fadeIn faster"
        leave-active-class="animated fadeOut faster"
      >
        <div
          v-if="show"
          class="color-picker-selector"
        >
          <ColorPicker
            v-model="color"
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { Sketch } from 'vue-color';
import tinycolor from 'tinycolor2';

export default {
  components: {
    ColorPicker: Sketch,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    color: {
      get() {
        return this.value;
      },
      set(value) {
        const color = `rgba(${value.rgba.r}, ${value.rgba.g}, ${value.rgba.b}, ${value.rgba.a})`;
        this.$emit('input', color);
      },
    },
    parsedColor() {
      return tinycolor(this.color);
    },
    textColor() {
      return this.parsedColor.isDark() ? '#FFF' : '#222';
    },
    borderColor() {
      return this.parsedColor.darken(5).toString();
    },
  },
  methods: {
    isValidColor(color) {
      const re = /^(?:rgba\(\d{1,3},\d{1,3},\d{1,3},\d(?:\.\d)?\)|rgb\(\d{1,3},\d{1,3},\d{1,3}\)|#[0-9A-F]{6})$/gi;
      return re.test(color.replace(' ', ''));
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

  .color-input {
    padding-bottom: 20px;
    outline: none;
  }

  h3 {
    padding-bottom: 15px;
    margin: 0;
    // text-decoration: underline;
    text-transform: uppercase;
  }

  .form-group {
    margin-bottom: 0;
    display: flex;
  }

  .color-picker-form {
    border: 1px solid darken($backgroundColor, 15%);
    position: relative;
    background: #ffffff;
    padding: 10px;
    cursor: pointer;

    .color-picker-input{
      display: flex;
      height: 80px;
      padding: 20px;
      font-weight: 600;

      align-items: center;
      justify-content: center;

      // border-radius: 7px;
    }

    .color-picker-selector {
      display: block;
      position: absolute;
      top: 105px;
      width: 100%;
      z-index: 999;
    }
  }
</style>
