<template>
  <div
    class="add-experience-modal"
  >
    <Modal
      v-model="show"
      class="add-experience-item-modal"
    >
      <template v-slot:title>
        Add Experience Item
      </template>

      <!-- Form -->
      <!-- Company -->
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
          autofocus="true"
        >

        <div class="form-description small">
          The company your worked for.
        </div>
      </div>
      <!-- Title -->
      <div class="form-group">
        <label
          class="form-label"
          for="title"
        >
          Title:
        </label>

        <input
          id="title"
          v-model="title"
          type="text"
          class="form-text"
        >

        <div class="form-description small">
          Your job title whilst at the company.
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
          The duration you were employed.
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
          A short paragraph describing your employment, if left empty it will be hidden from the final resume.
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
          description="An achievement whilst in your role, if left empty it will be hidden from the final resume."
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
              @click="addExperienceItem"
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
  name: 'AddExperienceModal',
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
      company: '',
      title: '',
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
        company: this.company,
        title: this.title,
        duration: this.duration,
        paragraph: this.paragraph,
        achievementList: this.achievementList,
      };
    },
  },
  methods: {
    addExperienceItem() {
      if (this.company.length > 0 && this.title.length > 0 && this.duration.length > 0) {
        this.$store.commit('addExperienceItem', this.formatted);
        this.show = false;
        this.resetFields();
      }
    },
    resetFields() {
      this.company = '';
      this.title = '';
      this.duration = '';
      this.paragraph = '';
      this.achievementList = [];
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
