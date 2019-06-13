<template>
  <div class="current-role-input">
    <h4>Current Role</h4>
    <FormSwitch
      v-model="enabled"
      label="Enable current role section?"
    />
    <div v-if="enabled">
      <FormExperience @input="handleUpdate" />
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
      enabled: true,
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
        enabled: this.enabled,
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
  mounted() {
    this.$emit('input', this.formatted);
  },
  methods: {
    handleUpdate(payload) {
      this.company = payload.company;
      this.title = payload.title;
      this.duration = payload.duration;
      this.paragraph = payload.paragraph;
      this.achievementList = payload.achievementList;
    },
  },
};
</script>

<style lang="scss" scoped>

.buffer {
  margin-bottom: 10px;
}
</style>
