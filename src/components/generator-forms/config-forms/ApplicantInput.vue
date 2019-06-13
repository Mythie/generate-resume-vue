<template>
  <div class="applicant">
    <h4>Applicant</h4>
    <!-- Name -->
    <b-form-group
      label="Name"
    >
      <b-form-input v-model="name" />
    </b-form-group>
    <!-- Tagline -->
    <b-form-group
      label="Tagline"
    >
      <b-form-textarea
        v-model="tagline"
        rows="3"
        placeholder="Try to keep it short but interesting!"
      />
    </b-form-group>
    <div class="mb-3">
      <FormContactPretty
        contact="Mobile"
        @input="handleMobile"
      />
      <FormContactRaw
        contact="Email"
        @input="handleEmail"
      />
      <FormContactPretty
        contact="LinkedIn"
        @input="handleLinkedIn"
      />
      <FormContactPretty
        contact="Github"
        @input="handleGithub"
      />
      <FormContactPretty
        contact="Facebook"
        @input="handleFacebook"
      />
      <FormContactRaw
        contact="Website"
        @input="handleWebsite"
      />
      <FormContactRaw
        contact="Location"
        @input="handleLocation"
      />
    </div>
  </div>
</template>

<script>
import FormContactPretty from '@/components/common/FormContactPretty.vue';
import FormContactRaw from '@/components/common/FormContactRaw.vue';

export default {
  components: {
    FormContactPretty,
    FormContactRaw,
  },
  data() {
    return {
      name: '',
      tagline: '',
      mobile: {},
      email: {},
      linkedin: {},
      github: {},
      facebook: {},
      location: {},
      website: {},
    };
  },
  computed: {
    formatted() {
      return {
        name: this.name,
        tagline: this.tagline,
        mobile: this.mobile,
        email: this.email,
        linkedin: this.linkedin,
        github: this.github,
        facebook: this.facebook,
        location: this.location,
        website: this.website,
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
  methods: {
    handleMobile(payload) {
      this.mobile = payload;
    },
    handleEmail(payload) {
      this.email = payload;
    },
    handleLinkedIn(payload) {
      this.linkedin = payload;
    },
    handleGithub(payload) {
      this.github = payload;
    },
    handleFacebook(payload) {
      this.facebook = payload;
    },
    handleWebsite(payload) {
      this.website = payload;
    },
    handleLocation(payload) {
      this.location = payload;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
