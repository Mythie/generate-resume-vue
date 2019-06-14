<template>
  <div
    class="color-input"
    @mouseleave="show = false"
  >
    <h4 class="text-center">
      {{ label }}
    </h4>
    <!-- Not really a form anymore but it stil works -->
    <div class="color-picker-form">
      <div
        class="color-picker-input"
        :style="{ background: value }"
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
            :value="value"
            @input="setColor"
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
    color() {
      return tinycolor(this.value);
    },
    textColor() {
      return this.color.isDark() ? '#FFF' : '#222';
    },
    borderColor() {
      return this.color.darken(15).toString();
    },
  },
  methods: {
    setColor(payload) {
      // eslint-disable-next-line
      const color = `rgba(${payload.rgba.r}, ${payload.rgba.g}, ${payload.rgba.b}, ${payload.rgba.a})`
      this.$emit('input', color);
    },
    isValidColor(color) {
      const re = /^(?:rgba\(\d{1,3},\d{1,3},\d{1,3},\d(?:\.\d)?\)|rgb\(\d{1,3},\d{1,3},\d{1,3}\)|#[0-9A-F]{6})$/gi;
      return re.test(color.replace(' ', ''));
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

  .color-input {
    padding-bottom: 10px;
  }

  h4 {
    padding-bottom: 7px;
  }

  .form-group {
    margin-bottom: 0;
  }

  .color-picker-form {
    border: 1px solid darken($backgroundColor, 5%);
    position: relative;
    background: #ffffff;
    padding: 10px;
    border-radius: 7px;
    cursor: pointer;

    .color-picker-input{
      padding: 20px;
      height: 80px;
      // width: 150px;
      border-radius: 7px;
      display: flex;
      align-items: center;
      justify-content: center;
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
