<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated fadeIn faster"
    leave-active-class="animated fadeOut faster"
  >
    <!-- TODO: Solve modal bugs -->
    <div
      v-if="show"
      class="overlay"
    >
      <div
        class="modal-dialog"
      >
        <div
          class="modal"
          @keyup.esc="show = false"
        >
          <header>
            <div class="row">
              <div class="col-xs-10 d-flex flex-items-center flex-row">
                <h3 class="mb-0">
                  <slot name="title">
                    Modal
                  </slot>
                </h3>
              </div>
              <div class="col-xs-2 d-flex flex-items-center flex-row-reverse">
                <fa-icon
                  class="plus-to-cross clickable"
                  icon="plus"
                  @click="show = false"
                />
              </div>
            </div>
          </header>
          <content>
            <slot />
          </content>
          <footer>
            <slot name="footer">
              <div class="row">
                <div class="col-sm-6 d-flex" />
                <div class="col-sm-6 d-flex flex-row-reverse">
                  <button
                    class="btn btn-primary"
                    @click="show = false"
                  >
                    OK
                  </button>
                </div>
              </div>
            </slot>
          </footer>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9997;
  overflow-y: auto;


  display: flex;
  justify-content: center;

  @media screen and (min-width: 600px) {
    align-items: center;
  }

  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}

.modal-dialog {
  z-index: 9998;
  width: 100%;
  max-width: 800px;

  .modal {
    z-index: 9999;
    padding: 20px;
    background: $backgroundColor;
    margin: 10px;

    header {
      padding-bottom: 7px;
      margin-bottom: 7px;
      border-bottom: 2px solid $primaryColor;

      .plus-to-cross {
        transform: rotate(45deg);
      }
    }
  }
}
</style>
