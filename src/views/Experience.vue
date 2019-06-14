<template>
  <div class="experience container">
    <h2>Your Experience</h2>
    <hr>

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
      label="Display experience?"
      class="mb-3"
      :value="enabled"
      @input="updateEnabled"
    />

    <div
      v-if="enabled"
      class="mb-3"
    >
      <!-- Experience items list -->
      <h4 class="mb-3">
        Current Experience Items
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
        Add experience item&nbsp;
        <fa-icon
          icon="plus"
          size="sm"
        />
      </b-button>
    </div>

    <!-- Navigation -->
    <b-row>
      <b-col
        xs="6"
        class="d-flex flex-row"
      >
        <b-button
          variant="outline"
          to="/current-role"
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
          to="/education"
          size="lg"
        >
          Education&nbsp;
          <fa-icon icon="arrow-right" />
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import FormSwitch from '@/components/common/FormSwitch.vue';
import FormExperience from '@/components/common/FormExperience.vue';
import { mapState } from 'vuex';

export default {
  components: {
    FormSwitch,
    FormExperience,
  },
  data() {
    return {
      key: 0,
      modalKey: 0,
      experience: {},
    };
  },
  computed: {
    ...mapState({
      enabled: state => state.config.experience.enabled,
      list: state => state.config.experience.list,
    }),
    modalItem() {
      return this.list[this.modalKey];
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
    updateEnabled(value) {
      this.$store.commit('updateExperienceEnabled', value);
    },
    handleUpdate(payload) {
      this.experience = payload;
    },
    showModal(key) {
      this.modalKey = key;
      this.$refs['experience-modal'].show();
    },
    addExperienceItem() {
      if (this.experience.company.length > 0 && this.experience.title.length > 0 && this.experience.duration.length > 0) {
        this.$store.commit('addExperienceItem', this.experience);
        // Still keeping the dodgy
        this.key += 1;
        this.experience = {};
      }
    },
    removeExperienceItem(index) {
      this.$store.commit('removeExperienceItem', index);
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
