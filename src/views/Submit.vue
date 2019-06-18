<template>
  <div class="resume-submit">
    <div
      v-if="loading"
      class="text-center"
    >
      <div class="spinner" />
      <p class="semi-bold">
        We're generating your resume...
      </p>
    </div>
    <div
      v-else-if="error"
      class="d-flex flex-wrap flex-direction-column"
    >
      <p class="lead">
        {{ errorString }}
      </p>
      <button
        v-if="showRetry"
        class="btn btn-lg btn-primary mb-3"
        @click="sendData"
      >
        Retry
      </button>

      <a
        class="btn btn-outline"
        href="/"
      >
        Start again
      </a>
    </div>
    <div v-else>
      <p class="lead">
        Resume successfully created!
      </p>
      <a
        :href="response.url"
        class="d-block mb-3 btn btn-lg btn-primary"
      >
        Get my resume!
      </a>
      <router-link
        to="/skills-and-references"
        class="d-block mb-3"
      >
        Back
      </router-link>
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
      errorString: '',
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
@import "@/assets/styles/variables.scss";

.resume-submit {
  text-align: center;
  align-self: center;
}

.spinner {
  border: 7px solid $primaryColorWhite;
  border-bottom: 7px solid $primaryColor;
  height: 75px;
  width: 75px;
  display: inline-block;
  border-radius: 100px;
  transform: translateZ(0);
  animation: spinner 1.1s infinite linear;

  &::after {
    border-radius: 100px;
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
