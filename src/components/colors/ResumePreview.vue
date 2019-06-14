<template>
  <div class="resume-preview">
    <svg
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
          fill="#FFFFFF"
          x="0"
          y="0"
          width="794"
          height="1124"
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
              transform="translate(39.000000, 275.000000)"
              :fill="sideBarTextColor"
              font-family="Helvetica-Bold, Helvetica"
              font-weight="bold"
            >
              <text
                id="Title"
                font-size="77"
              >
                <tspan
                  x="0"
                  y="74"
                >Title</tspan>
              </text>
              <text
                id="Tagline"
                font-size="22"
              >
                <tspan
                  x="1"
                  y="125"
                >Tagline</tspan>
              </text>
              <text
                id="Contact-1"
                font-size="22"
              >
                <tspan
                  x="1"
                  y="256"
                >Contact-1</tspan>
              </text>
              <text
                id="Contact-2"
                font-size="22"
              >
                <tspan
                  x="1"
                  y="287"
                >Contact-2</tspan>
              </text>
              <text
                id="Contact-3"
                font-size="22"
              >
                <tspan
                  x="1"
                  y="318"
                >Contact-3</tspan>
              </text>
            </g>
          </g>
          <g
            id="3rd-Section"
            transform="translate(298.000000, 560.000000)"
          >
            <g
              id="Content"
              transform="translate(4.000000, 110.000000)"
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
              x="4"
              y="85"
              width="450"
              height="5"
            />
            <text
              id="Heading-3"
              font-family="Helvetica-Bold, Helvetica"
              font-size="61"
              font-weight="bold"
              :fill="textColor"
            >
              <tspan
                x="0"
                y="59"
              >Heading-3</tspan>
            </text>
          </g>
          <g
            id="2nd-Section"
            transform="translate(298.000000, 278.000000)"
          >
            <g
              id="Content"
              transform="translate(4.000000, 110.000000)"
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
              x="4"
              y="85"
              width="450"
              height="5"
            />
            <text
              id="Heading-2"
              font-family="Helvetica-Bold, Helvetica"
              font-size="61"
              font-weight="bold"
              :fill="textColor"
            >
              <tspan
                x="0"
                y="59"
              >Heading-2</tspan>
            </text>
          </g>
          <g
            id="1st-Section"
            transform="translate(298.000000, 34.000000)"
          >
            <g
              id="Content"
              transform="translate(4.000000, 110.000000)"
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
              x="4"
              y="85"
              width="450"
              height="5"
            />
            <text
              id="Heading-1"
              font-family="Helvetica-Bold, Helvetica"
              font-size="61"
              font-weight="bold"
              :fill="textColor"
            >
              <tspan
                x="0"
                y="59"
              >Heading-1</tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    sideBarColor: {
      type: String,
      required: true,
    },
    sideBarTextColor: {
      type: String,
      required: true,
    },
    stripeColor: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      required: true,
    },
    horizontalRuleColor: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

  svg {
    width: 100%;
    border: 1px solid darken($backgroundColor, 5%);
  }
</style>
