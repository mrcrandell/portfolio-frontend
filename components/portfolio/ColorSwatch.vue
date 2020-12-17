<template>
  <div class="color-swatch" :style="style">
    {{ colorSwatch.name }}<br />
    {{ colorSwatch.hex }}
  </div>
</template>
<script>
export default {
  props: {
    colorSwatch: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    style() {
      const style = `
        color: ${this.getContrast(this.colorSwatch.hex)};
        background-color: ${this.colorSwatch.hex};
      `
      return style
    },
  },
}
</script>
