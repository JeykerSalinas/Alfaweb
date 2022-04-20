<template>
  <b-container>
    <b-list-group class="col-6 mx-auto">
      <b-list-group-item
        class="d-flex justify-content-between align-items-center py-1"
      >
        Número de alumnos permitidos:
        <b-badge variant="primary" pill>{{ getInfo.allowed }}</b-badge>
      </b-list-group-item>

      <b-list-group-item
        class="d-flex justify-content-between align-items-center py-1"
      >
        Número de alumnos inscritos:
        <b-badge variant="primary" pill>{{ getInfo.subscribed }}</b-badge>
      </b-list-group-item>

      <b-list-group-item
        class="d-flex justify-content-between align-items-center py-1"
      >
        Cantidad de cupos disponibles
        <b-badge variant="primary" pill>{{ getInfo.avaible }}</b-badge>
      </b-list-group-item>
      <b-list-group-item
        class="d-flex justify-content-between align-items-center py-1"
      >
        Cantidad de cursos culminados
        <b-badge variant="primary" pill>{{ getInfo.finished }}</b-badge>
      </b-list-group-item>
      <b-list-group-item
        class="d-flex justify-content-between align-items-center py-1"
      >
        Cantidad de cursos activos
        <b-badge variant="primary" pill>{{ getInfo.active }}</b-badge>
      </b-list-group-item>
      <b-list-group-item
        class="d-flex justify-content-between align-items-center py-1"
      >
        Cursos totales
        <b-badge variant="primary" pill>{{ getInfo.totalCourses }}</b-badge>
      </b-list-group-item>
    </b-list-group>
  </b-container>
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
  background-color: #0b5ed7;
}
</style>
