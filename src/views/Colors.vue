<template>
  <div class="color-forms container">
    <h2 class="title">
      Select your Colors
    </h2>
    <hr>
    <div class="row">
      <div class="col-md-4">
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

export default {
  components: {
    ColorInput,
    ResumePreview,
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
