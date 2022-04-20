<template>
  <div class="home">
    <CoursesCards />
  </div>
</template>

<script>
// @ is an alias to /src
import CoursesCards from "@/components/CoursesCards.vue";

export default {
  name: "HomeView",
  components: {
    CoursesCards,
  },
  methods: {},
};
</script>
<style scoped>
.home {
  margin-top: 5rem;
}
</style>
