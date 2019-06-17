<template>
  <div class="skills-and-references container">
    <div class="skills pb-3">
      <h2 class="title">
        Add your Skills
      </h2>
      <hr>

      <FormSwitch
        v-model="skillsEnabled"
        label="Display skills?"
        class="form-switch mb-3"
      />

      <div
        v-if="skillsEnabled"
        class="form-group"
      >
        <label
          for="add-skill"
          class="form-label"
        >
          Add Skill:
        </label>

        <FormList
          id="add-skill"
          v-model="skillsList"
          button-text="Add Skill"
          description="Enter your notable skills."
        />
      </div>
    </div>
    <div class="references mb-3">
      <h2 class="title">
        Enter your References
      </h2>
      <hr>

      <AddReferenceModal v-model="showAddModal" />
      <ViewReferenceModal
        v-model="showViewModal"
        :item="viewModalItem"
        :index="viewModalKey"
      />

      <FormSwitch
        v-model="referencesEnabled"
        label="Display References?"
        class="mb-3"
      />

      <div
        v-if="referencesEnabled"
        class="row"
      >
        <div
          v-for="(item, index) in referencesList"
          :key="index"
          class="col-md-3 test mb-3"
        >
          <div
            class="reference-item"
            @click="svm(index)"
          >
            <h4 class="w-100">
              {{ item.name }}
            </h4>
            <span>{{ item.company }}</span>
          </div>
        </div>
        <div class="col-md-3 test mb-3">
          <div
            class="add-reference-item"
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
    </div>

    <!-- Navigation -->
    <div class="row">
      <div
        class="col-xs-6 d-flex flex-items-center flex-row"
      >
        <router-link to="/education">
          Back
        </router-link>
      </div>
      <div
        class="col-xs-6 d-flex flex-items-center flex-row-reverse"
      >
        <router-link
          to="/submit"
          class="btn btn-outline btn-lg"
        >
          Finish&nbsp;
          <fa-icon icon="arrow-right" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import FormList from '@/components/common/FormList.vue';
import FormSwitch from '@/components/common/FormSwitch.vue';
import AddReferenceModal from '@/components/references/AddReferenceModal.vue';
import ViewReferenceModal from '@/components/references/ViewReferenceModal.vue';

export default {
  components: {
    FormList,
    FormSwitch,
    AddReferenceModal,
    ViewReferenceModal,
  },
  data() {
    return {
      showAddModal: false,
      showViewModal: false,
      viewModalKey: 0,
    };
  },
  computed: {
    skillsEnabled: {
      get() {
        return this.$store.state.config.skills.enabled;
      },
      set(value) {
        this.$store.commit('updateSkills', {
          prop: 'enabled',
          value,
        });
      },
    },
    skillsList: {
      get() {
        return this.$store.state.config.skills.list;
      },
      set(value) {
        this.$store.commit('updateSkills', {
          prop: 'list',
          value,
        });
      },
    },

    referencesEnabled: {
      get() {
        return this.$store.state.config.references.enabled;
      },
      set(value) {
        this.$store.commit('updateReferencesEnabled', value);
      },
    },
    referencesList() {
      return this.$store.state.config.references.list;
    },
    viewModalItem() {
      return this.referencesList[this.viewModalKey] || {};
    },
    shouldNavigateForward() {
      return this.skillsEnabled === false && this.referencesEnabled === false;
    },
  },
  watch: {
    shouldNavigateForward() {
      if (this.shouldNavigateForward === false) {
        this.$router.push('/submit');
      }
    },
  },
  methods: {
    svm(index) {
      this.viewModalKey = index;
      this.showViewModal = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";


.reference-item, .add-reference-item {
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

.add-reference-item {
  border: 2px dashed $primaryColor;
}
</style>
