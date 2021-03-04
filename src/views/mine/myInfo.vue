<template>
  <h1>{{ myInfo }}123</h1>
</template>

<script lang="ts">
import { ref,defineComponent } from "vue";
export default {
  name: "myInfo",
  setup: () => {
    const myInfo = ref('myInfo');
    return { myInfo };
  },
};
</script>

<style scoped>

</style>
