<template>
  <div class="experience-input">
    <h4>Experience</h4>

    <b-modal
      v-if="list.length > 0"
      ref="experience-modal"
      title="Experience"
      ok-only
    >
      <h4>{{ modalItem.company }}</h4>
      <p>
        <strong>Title:</strong> {{ modalItem.title }} <br>
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
      label="Enable experience section?"
      class="mb-2"
    />
    <div v-if="enabled">
      <h5 class="mb-3">
        Current Experience Items
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
            class="experience-item-list"
            @click="showModal(index)"
          >
            <h5>
              {{ item.company }}
              <small class="d-block">{{ item.title }}</small>
            </h5>
            <span>{{ item.duration }}</span>
          </div>
        </b-col>
      </b-row>
      <div
        v-else
        class="mb-3"
      >
        No experience items yet, try adding one..
      </div>

      <!-- Key is a dodgy way to reset the form -->
      <FormExperience
        :key="key"
        @input="handleUpdate"
      />

      <b-button
        class="mb-3"
        size="lg"
        variant="outline"
        @click="addExperienceItem"
      >
        Add experience item
      </b-button>
    </div>
  </div>
</template>

<script>
import FormSwitch from '@/components/common/FormSwitch.vue';
import FormExperience from '@/components/common/FormExperience.vue';

export default {
  components: {
    FormSwitch,
    FormExperience,
  },
  data() {
    return {
      enabled: false,
      list: [],
      key: 0,
      modalKey: 0,
      experience: {},
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
    handleUpdate(payload) {
      this.experience = payload;
    },
    showModal(key) {
      this.modalKey = key;
      this.$refs['experience-modal'].show();
    },
    addExperienceItem() {
      if (this.experience.company.length > 0 && this.experience.title.length > 0 && this.experience.duration.length > 0) {
        this.list.push(this.experience);

        this.experience = {};
        this.key += 1;
      }
    },
    removeExperienceItem(index) {
      this.list.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.experience-item-list {
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
