<template>
  <div class="applicant container">
    <h2 class="title">
      Fill in your Contact Details
    </h2>
    <hr>

    <div class="mb-3">
      <!-- We won't bother extracting these two to components since they're so small -->
      <div class="form-group">
        <label
          for="name"
          class="form-label"
        >
          Name:
        </label>
        <input
          id="name"
          v-model="name"
          class="form-text"
          type="text"
        >
      </div>
      <div class="form-group">
        <label
          for="name"
          class="form-label"
        >
          Tagline:
        </label>
        <textarea
          id="name"
          v-model="tagline"
          rows="5"
          class="form-textarea"
          type="text"
        />
        <div class="form-description small">
          Try to keep it short, but interesting!
        </div>
      </div>
      <!-- Contact Components -->
      <MobileContact />
      <EmailContact />
      <GithubContact />
      <LinkedinContact />
      <FacebookContact />
      <WebsiteContact />
      <LocationContact />
    </div>
    <div class="row">
      <div
        class="col-xs-6 d-flex flex-items-center flex-row"
      >
        <router-link
          to="/colors"
        >
          Back
        </router-link>
      </div>
      <div
        class="col-xs-6 d-flex flex-items-center flex-row-reverse"
      >
        <router-link
          class="btn btn-lg btn-outline"
          to="/current-role"
        >
          Current Role&nbsp;
          <fa-icon icon="arrow-right" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import MobileContact from '@/components/applicant/MobileContact.vue';
import EmailContact from '@/components/applicant/EmailContact.vue';
import GithubContact from '@/components/applicant/GithubContact.vue';
import LinkedinContact from '@/components/applicant/LinkedinContact.vue';
import FacebookContact from '@/components/applicant/FacebookContact.vue';
import WebsiteContact from '@/components/applicant/WebsiteContact.vue';
import LocationContact from '@/components/applicant/LocationContact.vue';

export default {
  name: 'Applicant',
  components: {
    MobileContact,
    EmailContact,
    GithubContact,
    LinkedinContact,
    FacebookContact,
    WebsiteContact,
    LocationContact,
  },
  computed: {
    name: {
      get() {
        return this.$store.state.config.applicant.name;
      },
      set(value) {
        this.$store.commit('updateApplicant', {
          prop: 'name',
          value,
        });
      },
    },
    tagline: {
      get() {
        return this.$store.state.config.applicant.tagline;
      },
      set(value) {
        this.$store.commit('updateApplicant', {
          prop: 'tagline',
          value,
        });
      },
    },
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
