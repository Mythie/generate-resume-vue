<template>
  <div class="generator-hero">
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
      </a>
    </router-link>
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

.generator-hero {
  align-self: center;
  text-align: center;
  color: $primaryColor;

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

</style>
