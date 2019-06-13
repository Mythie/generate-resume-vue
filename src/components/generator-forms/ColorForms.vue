<template>
  <div class="color-forms">
    <h2>Select your Colors</h2>
    <hr>
    <b-row>
      <b-col md="4">
        <ColorInput
          v-model="textColor"
          class="color-input"
          label="Text Color"
        />
        <ColorInput
          v-model="sideBarColor"
          class="color-input"
          label="Sidebar Color"
        />
        <ColorInput
          v-model="sideBarTextColor"
          class="color-input"
          label="Sidebar Text Color"
        />
        <ColorInput
          v-model="stripeColor"
          class="color-input"
          label="Stripe Color"
        />
        <ColorInput
          v-model="horizontalRuleColor"
          class="color-input"
          label="Horizontal Rule Color"
        />
      </b-col>
      <b-col
        md="8"
        class="resume-container"
      >
        <svg
          class="resume-example"
          viewBox="0 0 794 1124"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <rect
              id="Page"
              stroke="#979797"
              fill="#FFFFFF"
              x="0.5"
              y="0.5"
              width="793"
              height="1123"
            />
            <g id="Resume">
              <g id="SideBar">
                <rect
                  id="Stripe"
                  :fill="stripeColor"
                  x="236"
                  y="0"
                  width="25"
                  height="1124"
                />
                <rect
                  id="Sidebar"
                  :fill="sideBarColor"
                  x="0"
                  y="0"
                  width="236"
                  height="1124"
                />
                <g
                  id="Sidebar-Text"
                  transform="translate(40.000000, 287.000000)"
                  :fill="sideBarTextColor"
                >
                  <rect
                    id="Contact-3"
                    x="0"
                    y="287"
                    width="155"
                    height="21"
                  />
                  <rect
                    id="Contact-2"
                    x="0"
                    y="256"
                    width="155"
                    height="21"
                  />
                  <rect
                    id="Contact-1"
                    x="0"
                    y="225"
                    width="155"
                    height="21"
                  />
                  <rect
                    id="Tagline"
                    x="0"
                    y="93"
                    width="155"
                    height="21"
                  />
                  <rect
                    id="Title"
                    x="0"
                    y="0"
                    width="155"
                    height="68"
                  />
                </g>
              </g>
              <g
                id="3rd-Section"
                transform="translate(302.000000, 570.000000)"
              >
                <g
                  id="Content"
                  transform="translate(0.000000, 100.000000)"
                  :fill="textColor"
                >
                  <rect
                    id="Text"
                    x="0"
                    y="0"
                    width="450"
                    height="18"
                  />
                  <rect
                    id="Text"
                    x="0"
                    y="38"
                    width="370"
                    height="18"
                  />
                  <rect
                    id="Text"
                    x="0"
                    y="76"
                    width="450"
                    height="18"
                  />
                </g>
                <rect
                  id="Horizontal-Rule"
                  :fill="horizontalRuleColor"
                  x="0"
                  y="75"
                  width="450"
                  height="5"
                />
                <rect
                  id="Title"
                  :fill="textColor"
                  x="0"
                  y="0"
                  width="450"
                  height="65"
                />
              </g>
              <g
                id="2nd-Section"
                transform="translate(302.000000, 288.000000)"
              >
                <g
                  id="Content"
                  transform="translate(0.000000, 100.000000)"
                  :fill="textColor"
                >
                  <rect
                    id="Text"
                    x="0"
                    y="0"
                    width="450"
                    height="18"
                  />
                  <g
                    id="List"
                    transform="translate(0.000000, 38.000000)"
                  >
                    <rect
                      id="Text"
                      x="0"
                      y="0"
                      width="200"
                      height="18"
                    />
                    <rect
                      id="Text"
                      x="250"
                      y="0"
                      width="200"
                      height="18"
                    />
                  </g>
                  <g
                    id="List"
                    transform="translate(0.000000, 76.000000)"
                  >
                    <rect
                      id="Text"
                      x="0"
                      y="0"
                      width="200"
                      height="18"
                    />
                    <rect
                      id="Text"
                      x="250"
                      y="0"
                      width="200"
                      height="18"
                    />
                  </g>
                  <rect
                    id="Text"
                    x="0"
                    y="114"
                    width="450"
                    height="18"
                  />
                </g>
                <rect
                  id="Horizontal-Rule"
                  :fill="horizontalRuleColor"
                  x="0"
                  y="75"
                  width="450"
                  height="5"
                />
                <rect
                  id="Title"
                  :fill="textColor"
                  x="0"
                  y="0"
                  width="450"
                  height="65"
                />
              </g>
              <g
                id="1st-Section"
                transform="translate(302.000000, 44.000000)"
              >
                <g
                  id="Content"
                  transform="translate(0.000000, 100.000000)"
                  :fill="textColor"
                >
                  <rect
                    id="Text"
                    x="0"
                    y="0"
                    width="450"
                    height="18"
                  />
                  <rect
                    id="Text"
                    x="0"
                    y="38"
                    width="370"
                    height="18"
                  />
                  <rect
                    id="Text"
                    x="0"
                    y="76"
                    width="450"
                    height="18"
                  />
                </g>
                <rect
                  id="Horizontal-Rule"
                  :fill="horizontalRuleColor"
                  x="0"
                  y="75"
                  width="450"
                  height="5"
                />
                <rect
                  id="Title"
                  :fill="textColor"
                  x="0"
                  y="0"
                  width="450"
                  height="65"
                />
              </g>
            </g>
          </g>
        </svg>
      </b-col>
    </b-row>
    <div class="clearfix">
      <b-button
        variant="outline"
        size="lg"
        class="float-right"
        @click="$emit('show:config')"
      >
        Next
      </b-button>
    </div>
  </div>
</template>

<script>
import ColorInput from '@/components/generator-forms/color-forms/ColorInput.vue';

export default {
  components: {
    ColorInput,
  },
  props: {
    colors: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      sideBarColor: 'rgba(65, 184, 131, 1)',
      sideBarTextColor: 'rgba(232, 246, 240, 1)',
      stripeColor: 'rgba(52, 73, 94, 1)',
      horizontalRuleColor: 'rgba(52, 73, 94, 1)',
      textColor: 'rgba(44, 62, 80, 1)',
    };
  },
  computed: {
    compiledColors() {
      return {
        sideBarColor: this.sideBarColor,
        sideBarTextColor: this.sideBarTextColor,
        stripeColor: this.stripeColor,
        horizontalRuleColor: this.horizontalRuleColor,
        textColor: this.textColor,
      };
    },
  },
  watch: {
    compiledColors() {
      this.$emit('update:colors', this.compiledColors);
    },
  },
  created() {
    // There are better ways to do this but I'm being lazy

    if (Object.keys(this.colors).length > 0) {
      this.sideBarColor = this.colors.sideBarColor;
      this.sideBarTextColor = this.colors.sideBarTextColor;
      this.stripeColor = this.colors.stripeColor;
      this.horizontalRuleColor = this.colors.horizontalRuleColor;
      this.textColor = this.colors.textColor;
    }

    this.$emit('update:colors', this.compiledColors);
  },
};
</script>

<style lang="scss" scoped>

  .color-input {
    width: 100%;
    padding: 10px 15px;
  }


  .resume-container {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    .resume-example {
      width: 100%;

      @media screen and (min-width: 1000px) {
        width: 75%;
      }
    }
  }
</style>
