<template>
  <div class="references-input">
    <h4>References</h4>
    <b-modal
      v-if="list.length > 0"
      ref="references-modal"
      title="Reference"
      ok-only
    >
      <h4>{{ modalItem.name }}</h4>
      <p>
        <strong>Company:</strong> {{ modalItem.company }} <br>
        <strong>Position:</strong> {{ modalItem.position }} <br>
        <strong>Mobile:</strong> {{ modalItem.mobile }} <br>
        <strong>Email:</strong> {{ modalItem.email }} <br>
      </p>
    </b-modal>

    <FormSwitch
      v-model="enabled"
      label="Enable references section?"
      class="mb-2"
    />
    <div v-if="enabled">
      <h5 class="mb-3">
        Current References
      </h5>

      <b-row v-if="list.length > 0">
        <b-col
          v-for="(item, index) in list"
          :key="index"
          md="3"
          sm="4"
          class="mb-3"
        >
          <div
            class="reference-item-list"
            @click="showModal(index)"
          >
            <h5>
              {{ item.name }}
              <small class="d-block">{{ item.company }}</small>
              <small class="d-block">{{ item.position }}</small>
            </h5>
          </div>
        </b-col>
      </b-row>
      <div
        v-else
        class="mb-3"
      >
        No references items yet, try adding one..
      </div>

      <!-- Name -->
      <b-form-group
        label="Name"
      >
        <b-form-input v-model="name" />
      </b-form-group>
      <!-- Company -->
      <b-form-group
        label="Company"
      >
        <b-form-input v-model="company" />
      </b-form-group>
      <!-- Role -->
      <b-form-group
        label="Position"
      >
        <b-form-input v-model="position" />
      </b-form-group>
      <!-- Role -->
      <b-form-group
        label="Mobile"
      >
        <b-form-input
          v-model="mobile"
          placeholder="If left empty it won't be displayed, at least one contact method must be entered"
        />
      </b-form-group>
      <!-- Role -->
      <b-form-group
        label="Email"
      >
        <b-form-input
          v-model="email"
          placeholder="If left empty it won't be displayed, at least one contact method must be entered"
        />
      </b-form-group>
      <b-button
        class="mb-3"
        size="lg"
        variant="outline"
        @click="addReferenceItem"
      >
        Add reference
      </b-button>
      <!-- TODO: Email and Mobile -->
    </div>
  </div>
</template>

<script>
import FormSwitch from '@/components/common/FormSwitch.vue';

export default {
  components: {
    FormSwitch,
  },
  data() {
    return {
      enabled: false,
      name: '',
      company: '',
      position: '',
      mobile: '',
      email: '',
      list: [],
      modalKey: 0,
    };
  },
  computed: {
    modalItem() {
      return this.list[this.modalKey];
    },
    formattedReference() {
      return {
        name: this.name,
        company: this.company,
        position: this.position,
        mobile: this.mobile,
        email: this.email,
      };
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
    addReferenceItem() {
      if (this.name.length > 0 && this.company.length > 0 && (this.mobile.length > 0 || this.email.length > 0)) {
        this.list.push(this.formattedReference);

        this.name = '';
        this.company = '';
        this.position = '';
        this.mobile = '';
        this.email = '';
      }
    },
    showModal(key) {
      this.modalKey = key;
      this.$refs['references-modal'].show();
    },
  },
};
</script>

<style lang="scss" scoped>
.reference-item-list {
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
