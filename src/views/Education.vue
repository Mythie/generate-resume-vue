<template>
  <div class="education container">
    <h2>Your Education</h2>
    <hr>

    <b-modal
      v-if="list.length > 0"
      ref="education-modal"
      title="Education"
      ok-only
    >
      <h4>{{ modalItem.provider }}</h4>
      <p>
        <strong>Course:</strong> {{ modalItem.course }} <br>
        <strong>Duration:</strong> {{ modalItem.duration }} <br>
        <strong>Paragraph:</strong> {{ modalItem.paragraph }} <br>
        <strong>Achievements:</strong>
        <ul>
          <li
            v-for="(achievement, index) in modalItem.achievementList"
            :key="index"
          >
            {{ achievement }}
          </li>
        </ul>
      </p>
    </b-modal>

    <FormSwitch
      label="Display education?"
      class="mb-3"
      :value="enabled"
      @input="updateEnabled"
    />

    <div
      v-if="enabled"
      class="mb-3"
    >
      <h4 class="mb-3">
        Current Education Items
      </h4>

      <b-row v-if="list.length > 0">
        <b-col
          v-for="(item, index) in list"
          :key="index"
          md="3"
          sm="4"
          class="mb-3"
        >
          <div
            class="education-item-list"
            @click="showModal(index)"
          >
            <h5>
              {{ item.provider }}
              <small class="d-block">{{ item.course }}</small>
            </h5>
            <span>{{ item.duration }}</span>
          </div>
        </b-col>
      </b-row>
      <div
        v-else
        class="mb-3"
      >
        No education items yet, try adding one..
      </div>

      <!-- Company -->
      <b-form-group
        label="Provider"
      >
        <b-form-input
          v-model="provider"
          placeholder="e.g. RMIT"
        />
      </b-form-group>
      <!-- Title -->
      <b-form-group
        label="Course"
      >
        <b-form-input
          v-model="course"
          placeholder="e.g. Bachelors in Information Technology"
        />
      </b-form-group>
      <!-- Duration -->
      <b-form-group
        label="Duration"
      >
        <b-form-input
          v-model="duration"
          placeholder="e.g. Current"
        />
      </b-form-group>
      <!-- Paragraph -->
      <b-form-group
        label="Paragraph"
      >
        <b-form-textarea
          v-model="paragraph"
          placeholder="Add a paragraph about your education, if left empty it will be hidden in the final resume"
          rows="3"
        />
      </b-form-group>

      <!-- Achievement List -->
      <FormList
        v-model="achievementList"
        label="Achievement List"
        button-text="Add Achievement"
        placeholder="e.g. Graduated with a 4.0 GPA"
        description="Add a list of achievements whilst in the course, if left empty it will be hidden in the final resume."
      />


      <b-button
        variant="outline"
        size="lg"
        class="mb-3"
        @click="addEducationItem"
      >
        Add education item&nbsp;
        <fa-icon
          icon="plus"
          size="sm"
        />
      </b-button>
    </div>

    <b-row>
      <b-col
        xs="6"
        class="d-flex flex-row"
      >
        <b-button
          variant="outline"
          to="/experience"
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
          to="/skills-and-references"
          size="lg"
        >
          Skills & References&nbsp;
          <fa-icon icon="arrow-right" />
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import FormSwitch from '@/components/common/FormSwitch.vue';
import FormList from '@/components/common/FormList.vue';

export default {
  components: {
    FormSwitch,
    FormList,
  },
  data() {
    return {
      modalKey: 0,
      provider: '',
      course: '',
      duration: '',
      paragraph: '',
      achievementList: [],
    };
  },
  computed: {
    ...mapState({
      enabled: state => state.config.education.enabled,
      list: state => state.config.education.list,
    }),
    modalItem() {
      return this.list[this.modalKey];
    },
    formatted() {
      return {
        enabled: this.enabled,
        list: this.list,
      };
    },
  },
  methods: {
    showModal(key) {
      this.modalKey = key;

      this.$refs['education-modal'].show();
    },
    updateEnabled(value) {
      this.$store.commit('updateEducationEnabled', value);
    },
    addEducationItem() {
      // Only add if there's content
      if (this.provider.length > 0 && this.course.length > 0 && this.duration.length > 0) {
        this.$store.commit('addEducationItem', {
          provider: this.provider,
          course: this.course,
          duration: this.duration,
          paragraph: this.provider,
          achievementList: this.achievementList,
        });

        this.provider = '';
        this.course = '';
        this.duration = '';
        this.paragraph = '';
        this.achievementList = [];
      }
    },
    removeEducationItem(index) {
      this.store.commit('removeEducationItem', index);
    },
  },
};
</script>

<style lang="scss" scoped>
.education-item-list {
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
