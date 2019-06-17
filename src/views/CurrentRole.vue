<template>
  <div class="current-role container">
    <h2
      class="title"
    >
      Enter your Current Role
    </h2>
    <hr>

    <FormSwitch
      v-model="enabled"
      class="mb-3"
      label="Display Current Role?"
      @input="handle"
    />
    <div v-if="enabled">
      <!-- Company -->
      <div class="form-group">
        <label
          class="form-label"
          for="company"
        >
          Company:
        </label>

        <input
          id="company"
          v-model="company"
          type="text"
          class="form-text"
        >

        <div class="form-description small">
          The company your worked for.
        </div>
      </div>
      <!-- Title -->
      <div class="form-group">
        <label
          class="form-label"
          for="title"
        >
          Title:
        </label>

        <input
          id="title"
          v-model="title"
          type="text"
          class="form-text"
        >

        <div class="form-description small">
          Your job title whilst at the company.
        </div>
      </div>
      <!-- Duration -->
      <div class="form-group">
        <label
          class="form-label"
          for="duration"
        >
          Duration:
        </label>

        <input
          id="duration"
          v-model="duration"
          type="text"
          class="form-text"
        >

        <div class="form-description small">
          The duration you were employed.
        </div>
      </div>
      <!-- Paragraph -->
      <div class="form-group">
        <label
          class="form-label"
          for="paragraph"
        >
          Paragraph:
        </label>

        <textarea
          id="paragraph"
          v-model="paragraph"
          rows="5"
          class="form-textarea"
        />

        <div class="form-description small">
          A short paragraph describing your employment, if left empty it will be hidden from the final resume.
        </div>
      </div>
      <!-- Achievement List -->
      <div class="form-group">
        <label
          for="achievement-list"
          class="form-label"
        >
          Achievements:
        </label>

        <FormList
          id="achievement-list"
          v-model="achievementList"
          button-text="Add Achievement"
          description="An achievement whilst in your role, if left empty it will be hidden from the final resume."
        />
      </div>
    </div>

    <div class="row">
      <div class="col-xs-6 d-flex flex-row flex-items-center">
        <router-link to="/applicant">
          Back
        </router-link>
      </div>
      <div class="col-xs-6 d-flex flex-row-reverse">
        <router-link
          class="btn btn-lg btn-outline"
          to="/experience"
        >
          Experience&nbsp;
          <fa-icon icon="arrow-right" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import FormSwitch from '@/components/common/FormSwitch.vue';
import FormList from '@/components/common/FormList.vue';

export default {
  name: 'CurrentRole',
  components: {
    FormSwitch,
    FormList,
  },
  computed: {
    enabled: {
      get() {
        return this.$store.state.config.currentRole.enabled;
      },
      set(value) {
        this.$store.commit('updateCurrentRole', {
          prop: 'enabled',
          value,
        });
      },
    },
    company: {
      get() {
        return this.$store.state.config.currentRole.company;
      },
      set(value) {
        this.$store.commit('updateCurrentRole', {
          prop: 'company',
          value,
        });
      },
    },
    title: {
      get() {
        return this.$store.state.config.currentRole.title;
      },
      set(value) {
        this.$store.commit('updateCurrentRole', {
          prop: 'title',
          value,
        });
      },
    },
    duration: {
      get() {
        return this.$store.state.config.currentRole.duration;
      },
      set(value) {
        this.$store.commit('updateCurrentRole', {
          prop: 'duration',
          value,
        });
      },
    },
    paragraph: {
      get() {
        return this.$store.state.config.currentRole.paragraph;
      },
      set(value) {
        this.$store.commit('updateCurrentRole', {
          prop: 'paragraph',
          value,
        });
      },
    },
    achievementList: {
      get() {
        return this.$store.state.config.currentRole.achievementList;
      },
      set(value) {
        this.$store.commit('updateCurrentRole', {
          prop: 'achievementList',
          value,
        });
      },
    },
  },
  methods: {
    handle() {
      if (this.enabled === false) {
        this.$router.push('/experience');
      }
    },
  },
};
</script>

<style lang="scss" scoped>

.buffer {
  margin-bottom: 10px;
}
</style>
