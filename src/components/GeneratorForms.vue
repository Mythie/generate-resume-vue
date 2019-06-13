<template>
  <div class="generator-forms">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeInRight fast"
      leave-active-class="animated fadeOutLeft faster"
      mode="out-in"
    >
      <ColorForms
        v-if="!showConfig"
        :colors="colors"
        @update:colors="updateColors"
        @show:config="showConfig = true"
      />
      <ConfigForms
        v-else-if="!submitResume"
        @update:config="updateConfig"
        @action:goback="showConfig = false"
        @submit:resume="handleSubmit"
      />
      <ResumeSubmit
        v-else
        :resume="resume"
      />
    </transition>
  </div>
</template>

<script>
import ColorForms from '@/components/generator-forms/ColorForms.vue';
import ConfigForms from '@/components/generator-forms/ConfigForms.vue';
import ResumeSubmit from '@/components/ResumeSubmit.vue';

export default {
  components: {
    ColorForms,
    ConfigForms,
    ResumeSubmit,
  },
  data() {
    return {
      submitResume: false,
      showConfig: false,
      colors: {},
      config: {
        resume: {
          stripe: {
            enabled: true,
          },
        },
      },
    };
  },
  computed: {
    resume() {
      return {
        colors: this.colors,
        config: this.config,
      };
    },
  },
  methods: {
    updateColors(payload) {
      this.colors = {
        ...payload,
      };
    },
    updateConfig(payload) {
      this.config = {
        ...this.config,
        ...payload,
      };
    },
    handleSubmit() {
      this.submitResume = true;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
