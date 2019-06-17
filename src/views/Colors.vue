<template>
  <div class="color-forms container">
    <h2 class="title">
      Select your Colors
    </h2>
    <hr>
    <div class="row">
      <div class="col-md-4">
        <div class="form-group">
          <label
            for=""
            class="form-label"
          >
            Style:
          </label>

          <select
            v-model="presetSelected"
            class="form-select"
          >
            <option
              v-for="(preset, index) in presetColors"
              :key="index"
              :value="index"
            >
              {{ preset.name }}
            </option>
          </select>

          <div class="form-description small">
            Select a preset color.
          </div>
        </div>

        <FormSwitch
          v-model="enabled"
          label="Advanced?"
          class="mb-3"
        />

        <transition
          name="custom-classes-transition"
          enter-active-class="animated fadeInLeft fast"
          leave-active-class="animated fadeOutLeft fast"
        >
          <div v-if="enabled">
            <ColorInput
              :value="textColor"
              class="color-input mb-2"
              label="Text Color"
              @input="updateTextColor"
            />
            <ColorInput
              :value="sideBarColor"
              class="color-input mb-2"
              label="Sidebar Color"
              @input="updateSidebarColor"
            />
            <ColorInput
              :value="sideBarTextColor"
              class="color-input mb-2"
              label="Sidebar Text Color"
              @input="updateSidebarTextColor"
            />
            <ColorInput
              :value="stripeColor"
              class="color-input mb-2"
              label="Stripe Color"
              @input="updateStripeColor"
            />
            <ColorInput
              :value="horizontalRuleColor"
              class="color-input mb-2"
              label="Horizontal Rule Color"
              @input="updateHorizontalRuleColor"
            />
          </div>
        </transition>
      </div>
      <div class="col-md-8 resume-container">
        <ResumePreview
          class="resume-preview"
          :text-color="textColor"
          :side-bar-color="sideBarColor"
          :side-bar-text-color="sideBarTextColor"
          :stripe-color="stripeColor"
          :horizontal-rule-color="horizontalRuleColor"
        />
      </div>
    </div>
    <div class="row reverse">
      <div class="col-md-6" />
      <div class="col-md-6 d-flex flex-row-reverse">
        <router-link
          to="/applicant"
          class="btn btn-lg btn-outline"
        >
          Applicant&nbsp;
          <fa-icon icon="arrow-right" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ColorInput from '@/components/colors/ColorInput.vue';
import ResumePreview from '@/components/colors/ResumePreview.vue';
import FormSwitch from '@/components/common/FormSwitch.vue';

import presetColors from '@/store/presetColors';

export default {
  components: {
    ColorInput,
    ResumePreview,
    FormSwitch,
  },
  data() {
    return {
      enabled: false,
      presetColors,
      presetSelected: 0,
    };
  },
  computed: {
    ...mapState({
      sideBarColor: state => state.colors.sideBarColor,
      sideBarTextColor: state => state.colors.sideBarTextColor,
      stripeColor: state => state.colors.stripeColor,
      horizontalRuleColor: state => state.colors.horizontalRuleColor,
      textColor: state => state.colors.textColor,
    }),
  },
  watch: {
    presetSelected() {
      this.updateColorsPreset(this.presetSelected);
    },
  },
  methods: {
    updateSidebarColor(value) {
      this.$store.commit('updateColor', {
        prop: 'sideBarColor',
        value,
      });
    },
    updateSidebarTextColor(value) {
      this.$store.commit('updateColor', {
        prop: 'sideBarTextColor',
        value,
      });
    },
    updateStripeColor(value) {
      this.$store.commit('updateColor', {
        prop: 'stripeColor',
        value,
      });
    },
    updateTextColor(value) {
      this.$store.commit('updateColor', {
        prop: 'textColor',
        value,
      });
    },
    updateHorizontalRuleColor(value) {
      this.$store.commit('updateColor', {
        prop: 'horizontalRuleColor',
        value,
      });
    },
    updateColorsPreset(index) {
      console.log(index);
      this.updateSidebarColor(this.presetColors[index].sideBarColor);
      this.updateSidebarTextColor(this.presetColors[index].sideBarTextColor);
      this.updateStripeColor(this.presetColors[index].stripeColor);
      this.updateTextColor(this.presetColors[index].textColor);
      this.updateHorizontalRuleColor(this.presetColors[index].horizontalRuleColor);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
  .resume-container {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    .resume-preview {
      width: 100%;

      @media screen and (min-width: 1000px) {
        width: 75%;
      }
    }
  }
</style>
