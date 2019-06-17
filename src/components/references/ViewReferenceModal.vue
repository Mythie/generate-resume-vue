<template>
  <div
    class="view-reference-modal"
  >
    <Modal
      v-model="show"
      class="view-reference-item-modal"
    >
      <template v-slot:title>
        View Reference Item
      </template>

      <div class="py-3">
        <h2>{{ item.name }}</h2>
        <p>
          <strong>Company:</strong> {{ item.company }}
        </p>
        <p>
          <strong>Position:</strong> {{ item.position }}
        </p>
        <p>
          <strong>Email:</strong> {{ item.email }}
        </p>
        <p>
          <strong>Mobile:</strong> {{ item.mobile }}
        </p>
      </div>


      <template v-slot:footer>
        <div class="row">
          <div class="col-sm-6 flex-items-center d-flex">
            <button
              class="btn btn-outline"
              @click="removeReferenceItem(index)"
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
  name: 'ViewEducationModal',
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
    removeReferenceItem(index) {
      this.$store.commit('removeReferenceItem', index);
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
