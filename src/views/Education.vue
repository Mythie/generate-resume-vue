<template>
  <div class="education container">
    <h2 class="title">
      Your Education
    </h2>
    <hr>

    <AddEducationModal v-model="showAddModal" />
    <ViewEducationModal
      v-model="showViewModal"
      :item="viewEducationItem"
      :index="viewModalKey"
    />

    <FormSwitch
      v-model="enabled"
      label="Display Education?"
      class="mb-3"
      @input="handle"
    />

    <div
      v-if="enabled"
      class="row"
    >
      <div
        v-for="(item, index) in list"
        :key="index"
        class="col-md-3 test mb-3"
      >
        <div
          class="education-item"
          @click="svm(index)"
        >
          <h4 class="w-100">
            {{ item.provider }}
          </h4>
          <span>{{ item.course }}</span>
        </div>
      </div>
      <div class="col-md-3 test mb-3">
        <div
          class="add-education-item"
          @click="showAddModal = true"
        >
          <fa-icon
            class="d-block"
            icon="plus"
            size="2x"
          />
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="row">
      <div
        class="col-xs-6 d-flex flex-items-center flex-row"
      >
        <router-link to="/experience">
          Back
        </router-link>
      </div>
      <div
        class="col-xs-6 d-flex flex-items-center flex-row-reverse"
      >
        <router-link
          to="/skills-and-references"
          class="btn btn-outline btn-lg"
        >
          Skills & References&nbsp;
          <fa-icon icon="arrow-right" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import FormSwitch from '@/components/common/FormSwitch.vue';
import AddEducationModal from '@/components/education/AddEducationModal.vue';
import ViewEducationModal from '@/components/education/ViewEducationModal.vue';

export default {
  components: {
    FormSwitch,
    AddEducationModal,
    ViewEducationModal,
  },
  data() {
    return {
      showAddModal: false,
      showViewModal: false,
      viewModalKey: 0,
    };
  },
  computed: {
    enabled: {
      get() {
        return this.$store.state.config.education.enabled;
      },
      set(value) {
        this.$store.commit('updateEducation', {
          prop: 'enabled',
          value,
        });
      },
    },
    list: {
      get() {
        return this.$store.state.config.education.list;
      },
      // set(value) {
      //   this.$store.commit('updateExperience', {
      //     prop: 'enabled',
      //     value,
      //   });
      // },
    },
    viewEducationItem() {
      return this.list[this.viewModalKey] || {};
    },
  },
  methods: {
    handle() {
      if (this.enabled === false) {
        this.$router.push('/skills-and-references');
      }
    },
    svm(index) {
      this.viewModalKey = index;
      this.showViewModal = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";


.education-item, .add-education-item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;

  height: 100%;
  padding: 30px 20px;
  border: 2px solid $primaryColor;

  cursor: pointer;
  transition: 400ms linear;

  &:hover {
    background: $primaryColor;
    border-color: 2px solid $primaryColorDarken2;
    color: $primaryColorWhite;
  }

  h4 {
    flex-basis: 100%;
    text-align: center;
  }
}

.add-education-item {
  border: 2px dashed $primaryColor;
}
</style>
