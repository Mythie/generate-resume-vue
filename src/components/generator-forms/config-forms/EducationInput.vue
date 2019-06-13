<template>
  <div class="education-input">
    <h4>Education</h4>

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
      v-model="enabled"
      label="Enable education section?"
      class="mb-2"
    />
    <div v-if="enabled">
      <h5 class="mb-3">
        Current Education Items
      </h5>

      <b-row v-if="list.length > 0">
        <b-col
          v-for="(item, index) in list"
          :key="index"
          md="4"
          sm="6"
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
          size="lg"
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
        class="mb-3"
        @click="addEducationItem"
      >
        Add education item
      </b-button>
    </div>
  </div>
</template>

<script>
import FormSwitch from '@/components/common/FormSwitch.vue';
import FormList from '@/components/common/FormList.vue';

export default {
  components: {
    FormSwitch,
    FormList,
  },
  data() {
    return {
      enabled: false,
      modalKey: 0,
      list: [],
      provider: '',
      course: '',
      duration: '',
      paragraph: '',
      achievementList: [],
    };
  },
  computed: {
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
  watch: {
    formatted() {
      this.$emit('input', this.formatted);
    },
  },
  mounted() {
    this.$emit('input', this.formatted);
  },
  methods: {
    showModal(key) {
      this.modalKey = key;

      this.$refs['education-modal'].show();
    },
    addEducationItem() {
      // Only add if there's content
      if (this.provider.length > 0 && this.course.length > 0 && this.duration.length > 0) {
        this.list.push({
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
      this.list.splice(index, 1);
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
