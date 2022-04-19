<template>
  <div>
    {{ getInfo }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "InfoComponent",
  computed: {
    ...mapGetters(["getInfo"]),
  },
};
</script>

<style lang="scss" scoped>
.badge {
  color: #05194e;
  background-color: aquamarine;
}
</style>
