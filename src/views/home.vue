<template>
  <h1>{{ home }}</h1>
</template>

<script lang="ts">
import { ref,defineComponent } from "vue";
export default {
  name: "home",
  setup: () => {
    const home = ref('home');
    return { home };
  },
};
</script>

<style scoped>

</style>
