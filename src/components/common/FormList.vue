<template>
  <div class="form-list">
    <b-form-group
      :label="label"
    >
      <div class="d-flex flex-wrap align-items-center justify-content-between">
        <b-form-input
          v-model="name"
          class="text-input"
          :placeholder="placeholder"
          @keyup.enter="addItem"
        />
        <b-button
          variant="outline"
          @click="addItem"
        >
          {{ buttonText }}
        </b-button>
      </div>
      <template
        v-if="description.length > 0"
        slot="description"
      >
        <span class="text-white">
          {{ description }}
        </span>
      </template>
    </b-form-group>
    <b-list-group class="buffer">
      <transition-group
        name="custom-classes-transition"
        mode="out-in"
        enter-active-class="animated fast slideInDown"
        leave-active-class="animated fast slideOutUp"
      >
        <b-list-group-item
          v-for="(item, index) in value"
          :key="index"
          class="items-list d-flex justify-content-between align-items-center"
        >
          {{ item }}
          <b-badge
            variant="danger"
            class="remove-item"
            pill
            @click="removeItem(index)"
          >
            Remove
          </b-badge>
        </b-list-group-item>
      </transition-group>
    </b-list-group>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      name: '',
    };
  },
  watch: {
    value() {
      this.$emit('input', this.value);
    },
  },
  methods: {
    addItem() {
      if (this.name.length > 0) {
        this.value.push(this.name);
        this.name = '';
      }
    },
    removeItem(index) {
      this.value.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>

.text-input {
  width: 100%;
  margin-bottom: 7px;

  @media screen and (min-width: 600px) {
    width: auto;
    flex-grow: 2;
    margin-right: 10px;
    margin-bottom: 0;
  }
}

.items-list {
  color: #222222;
}

.remove-item {
  padding: 7px 10px;
  cursor: pointer;
}

.buffer {
  margin-bottom: 10px;
}
</style>
