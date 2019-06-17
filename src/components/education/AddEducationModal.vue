<template>
  <div
    class="add-education-modal"
  >
    <Modal
      v-model="show"
      class="add-education-item-modal"
    >
      <template v-slot:title>
        Add Education Item
      </template>

      <!-- Form -->
      <!-- Company -->
      <div class="form-group">
        <label
          class="form-label"
          for="provider"
        >
          Provider:
        </label>

        <input
          id="provider"
          v-model="provider"
          type="text"
          class="form-text"
          autofocus="true"
        >

        <div class="form-description small">
          The provider you studied with.
        </div>
      </div>
      <!-- Title -->
      <div class="form-group">
        <label
          class="form-label"
          for="course"
        >
          Course:
        </label>

        <input
          id="course"
          v-model="course"
          type="text"
          class="form-text"
        >

        <div class="form-description small">
          The course you were completing.
        </div>
      </div>
      <!-- Duration -->
      <div class="form-group">
        <label
          class="form-label"
          for="duration"
        >
          Duration:
        </label>

        <input
          id="duration"
          v-model="duration"
          type="text"
          class="form-text"
        >

        <div class="form-description small">
          The duration you were studying.
        </div>
      </div>
      <!-- Paragraph -->
      <div class="form-group">
        <label
          class="form-label"
          for="paragraph"
        >
          Paragraph:
        </label>

        <textarea
          id="paragraph"
          v-model="paragraph"
          rows="5"
          class="form-textarea"
        />

        <div class="form-description small">
          A short paragraph describing your education, if left empty it will be hidden from the final resume.
        </div>
      </div>
      <!-- Achievement List -->
      <div class="form-group">
        <label
          for="achievement-list"
          class="form-label"
        >
          Achievements:
        </label>

        <FormList
          id="achievement-list"
          v-model="achievementList"
          button-text="Add Achievement"
          description="An achievement whilst studying, if left empty it will be hidden from the final resume."
        />
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
              @click="addEducationItem"
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
      provider: '',
      course: '',
      duration: '',
      paragraph: '',
      achievementList: [],
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
        provider: this.provider,
        course: this.course,
        duration: this.duration,
        paragraph: this.paragraph,
        achievementList: this.achievementList,
      };
    },
  },
  methods: {
    addEducationItem() {
      if (this.provider.length > 0 && this.course.length > 0 && this.duration.length > 0) {
        this.$store.commit('addEducationItem', this.formatted);
        this.show = false;
        this.resetFields();
      }
    },
    resetFields() {
      this.provider = '';
      this.course = '';
      this.duration = '';
      this.paragraph = '';
      this.achievementList = [];
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
