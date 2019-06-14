<template>
  <div class="skills-and-references container">
    <div class="skills mb-5">
      <h2>Add your Skills</h2>
      <hr>

      <FormSwitch
        label="Display skills?"
        class="form-switch mb-3"
        :value="skillsEnabled"
        @input="updateSkillsEnabled"
      />

      <div v-if="skillsEnabled">
        <FormList
          label="Skills List"
          button-text="Add Skill"
          placeholder="e.g. C++"
          :value="skillsList"
          @input="updateSkillsList"
        />
      </div>
    </div>
    <div class="references mb-3">
      <h2>Enter your References</h2>
      <hr>

      <b-modal
        v-if="referenceList.length > 0"
        ref="references-modal"
        title="Reference"
        ok-only
      >
        <h4>{{ modalItem.name }}</h4>
        <p>
          <strong>Company:</strong> {{ modalItem.company }} <br>
          <strong>Position:</strong> {{ modalItem.position }} <br>
          <strong>Mobile:</strong> {{ modalItem.mobile }} <br>
          <strong>Email:</strong> {{ modalItem.email }} <br>
        </p>
      </b-modal>

      <FormSwitch
        label="Display references?"
        class="mb-3"
        :value="referencesEnabled"
        @input="updateReferencesEnabled"
      />

      <div v-if="referencesEnabled">
        <h4 class="mb-3">
          Current References
        </h4>

        <b-row v-if="referenceList.length > 0">
          <b-col
            v-for="(item, index) in referenceList"
            :key="index"
            md="3"
            sm="4"
            class="mb-3"
          >
            <div
              class="reference-item-list"
              @click="showModal(index)"
            >
              <h5>
                {{ item.name }}
                <small class="d-block">{{ item.company }}</small>
                <small class="d-block">{{ item.position }}</small>
              </h5>
            </div>
          </b-col>
        </b-row>
        <div
          v-else
          class="mb-3"
        >
          No references items yet, try adding one..
        </div>

        <!-- Name -->
        <b-form-group
          label="Name"
        >
          <b-form-input v-model="name" />
        </b-form-group>
        <!-- Company -->
        <b-form-group
          label="Company"
        >
          <b-form-input v-model="company" />
        </b-form-group>
        <!-- Role -->
        <b-form-group
          label="Position"
        >
          <b-form-input v-model="position" />
        </b-form-group>
        <!-- Role -->
        <b-form-group
          label="Mobile"
        >
          <b-form-input
            v-model="mobile"
            placeholder="If left empty it won't be displayed, at least one contact method must be entered"
          />
        </b-form-group>
        <!-- Role -->
        <b-form-group
          label="Email"
        >
          <b-form-input
            v-model="email"
            placeholder="If left empty it won't be displayed, at least one contact method must be entered"
          />
        </b-form-group>
        <b-button
          class="mb-3"
          size="lg"
          variant="outline"
          @click="addReferenceItem"
        >
          Add reference&nbsp;
          <fa-icon icon="plus" />
        </b-button>
      <!-- TODO: Email and Mobile -->
      </div>
    </div>
    <!-- Navigation -->
    <b-row>
      <b-col
        xs="6"
        class="d-flex flex-row"
      >
        <b-button
          variant="outline"
          to="/education"
          size="lg"
        >
          Back
        </b-button>
      </b-col>
      <b-col
        xs="6"
        class="d-flex flex-row-reverse"
      >
        <b-button
          variant="outline"
          to="/submit"
          size="lg"
        >
          Finish&nbsp;
          <fa-icon icon="arrow-right" />
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import FormList from '@/components/common/FormList.vue';
import FormSwitch from '@/components/common/FormSwitch.vue';

export default {
  components: {
    FormList,
    FormSwitch,
  },
  data() {
    return {
      name: '',
      company: '',
      position: '',
      mobile: '',
      email: '',
      modalKey: 0,
    };
  },
  computed: {
    ...mapState({
      skillsEnabled: state => state.config.skills.enabled,
      skillsList: state => state.config.skills.list,
      referencesEnabled: state => state.config.references.enabled,
      referenceList: state => state.config.references.list,
    }),
    modalItem() {
      return this.referenceList[this.modalKey];
    },
  },
  methods: {
    updateSkillsEnabled(value) {
      this.$store.commit('updateSkillsEnabled', value);
    },
    updateSkillsList(value) {
      this.$store.commit('updateSkillsList', value);
    },
    updateReferencesEnabled(value) {
      this.$store.commit('updateReferencesEnabled', value);
    },
    addReferenceItem() {
      this.$store.commit('addReferenceItem', {
        name: this.name,
        company: this.company,
        position: this.position,
        mobile: this.mobile,
        email: this.email,
      });
    },
    showModal(key) {
      this.modalKey = key;

      this.$refs['references-modal'].show();
    },
  },
};
</script>

<style lang="scss" scoped>
.reference-item-list {
  border: 2px solid #ffffff;
  border-radius: 7px;
  padding: 7px;
  text-align: center;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
