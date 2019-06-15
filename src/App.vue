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
@import '~bootstrap/dist/css/bootstrap.css';
@import '~bootstrap-vue/dist/bootstrap-vue.css';
@import '~animate.css/animate.min.css';
@import '@/assets/variables.scss';


#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $textColor;
  background: $backgroundColor;
  min-height: 100vh;
  padding: 20px 10px;

  @media screen and (min-width: 1000px) {
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
  background: $textColor;
}

.text {
  color: $textColor;
}

.btn-outline {
  background: transparent;
  border: 2px solid #ffffff;
  color: $textColor;
  transition: 300ms;

  &:hover {
    background: #ffffff;
    color: #222222;
  }
}
</style>
