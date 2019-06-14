<template>
  <div class="generator-hero">
    <h1>
      Resume Generator
    </h1>
    <p>
      Build a stunning resume in minutes, stand out from the competition!
    </p>
    <hr>
    <b-button
      class="mx-auto"
      variant="outline"
      size="lg"
      to="/colors"
      @mouseover.native="addAnimation"
      @mouseout.native="removeAnimation"
    >
      Get started
    </b-button>
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
.generator-hero {
  align-self: center;
  text-align: center;
  color: #ffffff;

  h1 {
    @media screen and (max-width: 600px) {
      font-size: 2.5rem;
    }
    font-size: 4rem;
    font-weight: 600;
  }

  p {
    margin: 0;
    padding: 0;
  }
}

</style>
