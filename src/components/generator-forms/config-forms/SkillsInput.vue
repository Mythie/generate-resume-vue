<template>
  <div class="skills-input">
    <h4>Skills</h4>
    <FormSwitch
      v-model="enabled"
      label="Enable skills section?"
      class="form-switch"
    />

    <div v-if="enabled">
      <FormList
        v-model="list"
        label="Skills List"
        button-text="Add Skill"
        placeholder="e.g. C++"
      />
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
      skill: '',
      enabled: false,
      list: [],
    };
  },
  computed: {
    enabledText() {
      return this.enabled ? 'Yes' : 'No';
    },
    skills() {
      return {
        enabled: this.enabled,
        list: this.list,
      };
    },
  },
  watch: {
    skills() {
      this.$emit('input', this.skills);
    },
  },
  mounted() {
    this.$emit('input', this.skills);
  },
  methods: {
    addSkill() {
      this.list.push(this.skill);
      this.skill = '';
    },
    removeSkill(index) {
      this.list.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>

.skills-list {
  color: #222222;
}

.skill-text-input {
  margin-bottom: 7px;

  @media screen and (min-width: 600px) {
    margin-bottom: 0;
    width: 80%;
  }

  @media screen and (min-width: 800px) {
    width: 85%;
  }

  @media screen and (min-width: 1100px) {
    width: 90%;
  }
}

.form-switch {
  margin-bottom: 10px;
}

.remove-item {
  padding: 7px 10px;
  cursor: pointer;
}

.buffer {
  margin-bottom: 15px;
}
</style>
