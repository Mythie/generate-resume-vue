<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link>
    </div> -->
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fast fadeIn"
      leave-active-class="animated fast fadeOut"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap');

@import '~normalize.css';
@import '~animate.css/animate.min.css';

@import '@/assets/styles/variables.scss';
@import '@/assets/styles/main.scss';
</style>
