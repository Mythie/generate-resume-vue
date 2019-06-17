<template>
  <div>
    <div class="form-list">
      <div class="add-item-form">
        <input
          :id="id"
          v-model="name"
          type="text"
          class="form-text"
          @keyup.enter="addItem"
        >
        <button
          class="btn btn-primary"
          @click="addItem"
        >
          {{ buttonText }}
        </button>
      </div>
    </div>
    <div
      v-if="description.length > 0"
      class="form-description small"
    >
      {{ description }}
    </div>
    <div class="my-3">
      <div
        v-if="value.length > 0"
        class="list-items"
      >
        <div
          v-for="(item, index) in value"
          :key="item + index"
          class="list-item"
        >
          <div class="list-item-content">
            {{ item }}
          </div>
          <div
            class="badge small clickable"
            @click="removeItem(index)"
          >
            Remove
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      required: true,
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
.add-item-form {
  @media screen and (min-width:600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.form-text {
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
