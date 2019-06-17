<template>
  <div
    class="add-reference-modal"
  >
    <Modal
      v-model="show"
      class="add-reference-item-modal"
    >
      <template v-slot:title>
        Add Reference Item
      </template>

      <!-- Form -->
      <!-- Company -->
      <div class="form-group">
        <label
          class="form-label"
          for="name"
        >
          Name:
        </label>

        <input
          id="name"
          v-model="name"
          type="text"
          class="form-text"
          autofocus="true"
        >

        <div class="form-description small">
          Your referee's name.
        </div>
      </div>
      <!-- Title -->
      <div class="form-group">
        <label
          class="form-label"
          for="company"
        >
          Company:
        </label>

        <input
          id="company"
          v-model="company"
          type="text"
          class="form-text"
        >

        <div class="form-description small">
          The company your referee works for.
        </div>
      </div>
      <!-- Duration -->
      <div class="form-group">
        <label
          class="form-label"
          for="position"
        >
          Position:
        </label>

        <input
          id="position"
          v-model="position"
          type="text"
          class="form-text"
        >

        <div class="form-description small">
          Your referee's position.
        </div>
      </div>
      <!-- Paragraph -->
      <div class="form-group">
        <label
          class="form-label"
          for="email"
        >
          Email:
        </label>

        <input
          id="email"
          v-model="email"
          type="email"
          class="form-text"
        >

        <div class="form-description small">
          Your referee's email, atleast one of either email or mobile is required.
        </div>
      </div>
      <!-- Achievement List -->
      <div class="form-group">
        <label
          class="form-label"
          for="mobile"
        >
          Mobile:
        </label>

        <input
          id="mobile"
          v-model="mobile"
          type="text"
          class="form-text"
        >

        <div class="form-description small">
          Your referee's mobile, atleast one of either email or mobile is required.
        </div>
      </div>

      <template v-slot:footer>
        <div class="row">
          <div class="col-sm-6 flex-items-center d-flex">
            <a
              href="#"
              @click.prevent="show = false"
            >
              Cancel
            </a>
          </div>
          <div class="col-sm-6 d-flex flex-row-reverse">
            <button
              class="btn btn-primary"
              @click="addReferenceItem"
            >
              <!-- TODO: Avoid this -->
              Add Item&nbsp;
              <fa-icon icon="plus" />
            </button>
          </div>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import FormList from '@/components/common/FormList.vue';
import Modal from '@/components/common/Modal.vue';

export default {
  name: 'AddEducationModal',
  components: {
    FormList,
    Modal,
  },
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      name: '',
      company: '',
      position: '',
      email: '',
      mobile: '',
    };
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
    formatted() {
      return {
        name: this.name,
        company: this.company,
        position: this.position,
        email: this.email,
        mobile: this.mobile,
      };
    },
  },
  methods: {
    addReferenceItem() {
      if (this.name.length > 0 && this.company.length > 0 && this.position.length > 0 && (this.mobile.length > 0 || this.email.length > 0)) {
        this.$store.commit('addReferenceItem', this.formatted);
        this.show = false;
        this.resetFields();
      }
    },
    resetFields() {
      this.name = '';
      this.company = '';
      this.position = '';
      this.email = '';
      this.mobile = '';
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
