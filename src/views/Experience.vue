<template>
  <div class="experience container">
    <h2 class="title">
      Your Experience
    </h2>
    <hr>

    <AddExperienceModal v-model="showAddModal" />
    <ViewExperienceModal
      v-model="showViewModal"
      :item="viewExperienceItem"
      :index="viewModalKey"
    />

    <FormSwitch
      v-model="enabled"
      label="Display Experience?"
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
          class="experience-item"
          @click="svm(index)"
        >
          <h4 class="w-100">
            {{ item.company }}
          </h4>
          <span>{{ item.title }}</span>
        </div>
      </div>
      <div class="col-md-3 test mb-3">
        <div
          class="add-experience-item"
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
        <router-link to="/current-role">
          Back
        </router-link>
      </div>
      <div
        class="col-xs-6 d-flex flex-items-center flex-row-reverse"
      >
        <router-link
          to="/education"
          class="btn btn-outline btn-lg"
        >
          Education&nbsp;
          <fa-icon icon="arrow-right" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import FormSwitch from '@/components/common/FormSwitch.vue';
import AddExperienceModal from '@/components/experience/AddExperienceModal.vue';
import ViewExperienceModal from '@/components/experience/ViewExperienceModal.vue';

export default {
  components: {
    FormSwitch,
    AddExperienceModal,
    ViewExperienceModal,
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
        return this.$store.state.config.experience.enabled;
      },
      set(value) {
        this.$store.commit('updateExperience', {
          prop: 'enabled',
          value,
        });
      },
    },
    list: {
      get() {
        return this.$store.state.config.experience.list;
      },
      // set(value) {
      //   this.$store.commit('updateExperience', {
      //     prop: 'enabled',
      //     value,
      //   });
      // },
    },
    viewExperienceItem() {
      return this.list[this.viewModalKey] || {};
    },
  },
  watch: {
    formatted() {
      this.$emit('input', this.formatted);
    },
  },
  mounted() {
    this.$emit('input', this.formatted);
  },
  methods: {
    handle() {
      if (this.enabled === false) {
        this.$router.push('/education');
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

.experience {
  @media screen and (min-width: 600px) {
    align-self: center;
  }
}

.experience-item, .add-experience-item {
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
    border: 2px solid $primaryColorDarken2;
    color: $primaryColorWhite;
  }

  h4 {
    flex-basis: 100%;
    text-align: center;
  }
}

.add-experience-item {
  border: 2px dashed $primaryColor;
}
</style>
