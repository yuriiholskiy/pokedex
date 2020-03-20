<template>
  <select
    class="custom-select mb-2"
    :value="value"
    @change="$emit('input', $event.target.value)"
  >
    <option v-for="type of options" :key="type" :value="type" :selected="type">
      {{ type }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'app-select',
  props: {
    value: {
      type: String,
      default: 'all'
    },
    options: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style>
.custom-select {
  width: 50%;
  margin: 0 auto;
}
</style>
