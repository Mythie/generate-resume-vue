<template>
  <div id="app">
    <transition
      enter-active-class="animated fast fadeIn"
      leave-active-class="animated faster fadeOut"
      name="custom-classes-transition"
      mode="out-in"
    >
      <!-- Keys are just for the transition group -->
      <GeneratorHero
        v-if="!start"
        @action:start="start = !start"
      />
      <b-container v-else>
        <GeneratorForms />
      </b-container>
    </transition>
  </div>
</template>

<script>
import GeneratorHero from './components/GeneratorHero.vue';
import GeneratorForms from './components/GeneratorForms.vue';

export default {
  name: 'App',
  components: {
    GeneratorHero,
    GeneratorForms,
  },
  data() {
    return {
      start: false,
    };
  },
};
</script>

<style lang="scss">
@import '~bootstrap/dist/css/bootstrap.css';
@import '~bootstrap-vue/dist/bootstrap-vue.css';
@import '~animate.css/animate.min.css';


#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  background: #3498db;
  min-height: 100vh;
  padding: 20px 10px;

  @media screen and (min-width: 600px) {
    align-items: center;
  }
}

h1, h2, h3 {
  text-align: center;
  font-weight: 600;
}

h2 {
    font-size: 2.8rem;
}

hr {
  height: 2px;
  max-width: 300px;
  background: #ffffff;
}

.btn-outline {
  background: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
  transition: 300ms;

  &:hover {
    background: #ffffff;
    color: #222222;
  }
}
</style>
