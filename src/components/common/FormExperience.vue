<template>
  <div class="form-experience">
    <!-- Company -->
    <b-form-group
      label="Company"
    >
      <b-form-input
        v-model="company"
        placeholder="e.g. IBM"
      />
    </b-form-group>
    <!-- Title -->
    <b-form-group
      label="Title"
    >
      <b-form-input
        v-model="title"
        placeholder="e.g. Developer"
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
        placeholder="Add a paragraph about your experience, if left empty it will be hidden in the final resume"
        rows="3"
      />
    </b-form-group>
    <!-- Achievement List -->
    <FormList
      v-model="achievementList"
      label="Achievement List"
      button-text="Add Achievement"
      placeholder="e.g. Increased efficiency by 10%"
      description="Add a list of achievements whilst in the role, if left empty it will be hidden in the final resume."
    />
  </div>
</template>

<script>
import FormList from '@/components/common/FormList.vue';

export default {
  components: {
    FormList,
  },
  data() {
    return {
      company: '',
      title: '',
      duration: '',
      paragraph: '',
      achievementList: [],
    };
  },
  computed: {
    formatted() {
      return {
        company: this.company,
        title: this.title,
        duration: this.duration,
        paragraph: this.paragraph,
        achievementList: this.achievementList,
      };
    },
  },
  watch: {
    formatted() {
      this.$emit('input', this.formatted);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
