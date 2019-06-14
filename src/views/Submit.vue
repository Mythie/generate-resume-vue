<template>
  <div class="resume-submit text-center">
    <div
      v-if="loading"
      class="text-center"
    >
      <b-spinner
        class="big-spinner"
      />
      <p>We're generating your resume...</p>
    </div>
    <div v-else-if="error">
      <p class="font-weight-bold">
        {{ errorString }}
        <b-button
          v-if="showRetry"
          variant="outline"
          @click="sendData"
        >
          Retry
        </b-button>
      </p>

      <b-button
        variant="outline"
        href="/"
      >
        Start again
      </b-button>
    </div>
    <div v-else>
      <p>Resume successfully created!</p>
      <b-button
        :href="response.url"
        variant="outline"
        size="lg"
        class="d-block mb-3"
      >
        Get my resume!
      </b-button>
      <b-button
        to="/skills-and-references"
        variant="outline"
        size="lg"
        class="d-block mb-3"
      >
        Back
      </b-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      loading: true,
      error: false,
      showRetry: false,
      errorData: {},
      response: {},
    };
  },
  mounted() {
    this.sendData();
  },
  methods: {
    sendData() {
      this.loading = true;

      axios.post('/generate', {
        config: this.$store.state.config,
        colors: this.$store.state.colors,
      }).then((res) => {
        this.loading = false;
        this.showRetry = false;
        this.response = res.data;
      })
        .catch((err) => {
          console.log(err);
          this.error = true;
          this.loading = false;

          if (err.status === 400) {
            this.errorString = 'Sorry there was an issue with your resume data, please try again.';
            this.showRetry = true;
          } else {
            this.showRetry = false;
            this.errorString = 'A server error occurred, please try again.';
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.big-spinner {
  margin-bottom: 10px;
  width: 75px;
  height: 75px;
  border-width: 7px;
}
</style>
