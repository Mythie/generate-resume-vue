<template>
  <div class="home">
    <div />
    <div class="hero">
      <h1>
        Create a Stunning Resume
      </h1>
      <p>
        Stand out from the competition, build your resume now!
      </p>
      <hr class="large-gap">
      <router-link
        to="/colors"
        class="btn btn-outline btn-lg"
        @mouseover.native="addAnimation"
        @mouseleave.native="removeAnimation"
      >
        Get Started
      </router-link>
    </div>
    <div class="footer small ">
      <router-link to="/privacy-policy">
        Privacy Policy
      </router-link> |
      <router-link to="/terms-of-service">
        Terms Of Service
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    addAnimation(e) {
      e.target.classList.add('animated', 'rubberBand');
    },
    removeAnimation(e) {
      e.target.classList.remove('animated', 'rubberBand');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.home {
  // align-self: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;


  .hero {
    text-align: center;

    h1 {
      font-size: 2.4rem;
      font-weight: 700;
      letter-spacing: -2px;
      margin-bottom: 7px;
      // text-shadow: 1px 1px 3px;
      // word-wrap: break-word;

      @media screen and (min-width: 600px) {
        font-size: 4rem;
      }
    }

    p {
      font-weight: 600;
      color: $primaryColorLighten;
      margin: 0 0 0 0;
      padding: 0 0 7px 0;
    }

    a {
      display: inline-block;
      width: auto;
      text-decoration: none;
    }
  }
}

</style>
