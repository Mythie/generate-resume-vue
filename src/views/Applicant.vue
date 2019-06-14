<template>
  <div class="applicant container">
    <h2>Fill in your Contact Details</h2>
    <hr>
    <!-- Name -->
    <b-form-group
      label="Name"
    >
      <b-form-input
        :value="name"
        @input="updateName"
      />
    </b-form-group>
    <!-- Tagline -->
    <b-form-group
      label="Tagline"
    >
      <b-form-textarea
        rows="3"
        placeholder="Try to keep it short but interesting!"
        :value="tagline"
        @input="updateTagline"
      />
    </b-form-group>
    <div class="mb-3">
      <FormContactPretty
        contact="Mobile"
        :value="mobile"
        @input="updateMobile"
      />
      <FormContactRaw
        contact="Email"
        :value="email"
        @input="updateEmail"
      />
      <FormContactPretty
        contact="LinkedIn"
        :value="linkedin"
        @input="updateLinkedIn"
      />
      <FormContactPretty
        contact="Github"
        :value="github"
        @input="updateGithub"
      />
      <FormContactPretty
        contact="Facebook"
        :value="facebook"
        @input="updateFacebook"
      />
      <!-- <FormContactPretty
        contact="Website"
        :value="website"
        @input="updateWebsite"
      /> -->
      <FormContactRaw
        contact="Location"
        :value="location"
        @input="updateLocation"
      />
    </div>
    <b-row>
      <b-col
        xs="6"
        class="d-flex flex-row"
      >
        <b-button
          variant="outline"
          to="/colors"
          size="lg"
        >
          Back
        </b-button>
      </b-col>
      <b-col
        xs="6"
        class="d-flex flex-row-reverse"
      >
        <b-button
          variant="outline"
          to="/current-role"
          size="lg"
        >
          Current Role&nbsp;
          <fa-icon icon="arrow-right" />
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import FormContactPretty from '@/components/common/FormContactPretty.vue';
import FormContactRaw from '@/components/common/FormContactRaw.vue';

export default {
  name: 'Applicant',
  components: {
    FormContactPretty,
    FormContactRaw,
  },
  computed: {
    ...mapState({
      name: state => state.config.applicant.name,
      tagline: state => state.config.applicant.tagline,
      mobile: state => state.config.applicant.mobile,
      email: state => state.config.applicant.email,
      linkedin: state => state.config.applicant.linkedin,
      github: state => state.config.applicant.github,
      facebook: state => state.config.applicant.facebook,
      website: state => state.config.applicant.website,
      location: state => state.config.applicant.location,
    }),
  },
  methods: {
    updateName(value) {
      this.$store.commit('updateApplicant', {
        prop: 'name',
        value,
      });
    },
    updateTagline(value) {
      this.$store.commit('updateApplicant', {
        prop: 'tagline',
        value,
      });
    },
    updateMobile(data) {
      this.$store.commit('updateApplicantContact', {
        prop: 'mobile',
        data,
      });
    },
    updateEmail(data) {
      this.$store.commit('updateApplicantContact', {
        prop: 'email',
        data,
      });
    },
    updateLinkedIn(data) {
      this.$store.commit('updateApplicantContact', {
        prop: 'linkedin',
        data,
      });
    },
    updateGithub(data) {
      this.$store.commit('updateApplicantContact', {
        prop: 'github',
        data,
      });
    },
    updateFacebook(data) {
      this.$store.commit('updateApplicantContact', {
        prop: 'facebook',
        data,
      });
    },
    updateWebsite(data) {
      this.$store.commit('updateApplicantContact', {
        prop: 'website',
        data,
      });
    },
    updateLocation(data) {
      this.$store.commit('updateApplicantContact', {
        prop: 'location',
        data,
      });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
