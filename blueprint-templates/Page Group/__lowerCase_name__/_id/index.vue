<template>
  <div class="container">
    <h1>{{pascalCase name}} ID | Props: {/{ test }}</h1>
  </div>
</template>

<script>
export default {
  layout: 'default',
  props: {
    test: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
