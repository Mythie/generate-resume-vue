<template>
  <div
    class="view-experience-modal"
  >
    <Modal
      v-model="show"
      class="view-experience-item-modal"
    >
      <template v-slot:title>
        View Experience Item
      </template>

      <div class="py-3">
        <h2>{{ item.company }}</h2>
        <p>
          <strong>Title:</strong> {{ item.title }}
        </p>
        <p>
          <strong>Duration:</strong> {{ item.duration }}
        </p>
        <p>
          <strong>Paragraph:</strong> {{ item.paragraph }}
        </p>
        <p>
          <strong>Achievement List:</strong>
          <ul>
            <li
              v-for="(achievement, i) in item.achievementList"
              :key="i"
            >
              {{ achievement }}
            </li>
          </ul>
        </p>
      </div>


      <template v-slot:footer>
        <div class="row">
          <div class="col-sm-6 flex-items-center d-flex">
            <button
              class="btn btn-outline"
              @click="removeExperienceItem(i)"
            >
              Delete
            </button>
          </div>
          <div class="col-sm-6 d-flex flex-row-reverse">
            <button
              class="btn btn-primary"
              @click="show = false"
            >
              Ok
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
  name: 'ViewExperienceModal',
  components: {
    FormList,
    Modal,
  },
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
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
  methods: {
    removeExperienceItem(index) {
      this.$store.commit('removeExperienceItem', index);
      this.show = false;
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: left;
}
</style>
