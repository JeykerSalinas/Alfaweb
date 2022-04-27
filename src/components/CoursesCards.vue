<template>
  <b-container>
    <b-row>
      <b-col
        cols="12"
        md="6"
        lg="4"
        v-for="course in courses"
        :key="course.id"
        class="text-start"
      >
        <b-card class="mb-3" :title="course.nombre" img-alt="Image" img-top>
          <div
            :style="'background:url(' + course.img + '), heigth:200px'"
          ></div>
          <b-card-text>
            <b-list-group>
              <b-list-group-item
                :style="`
                  background-image: url('${course.img}');
                  height: 200px;
                 width: 100%; 
                  background-size: cover;
                  background-position: center;
                  background-repeat: no-repeat;
                `"
              ></b-list-group-item>
              <b-list-group-item>Costo: {{ course.costo }}</b-list-group-item>
              <b-list-group-item
                >Duración(meses): {{ course.duracion }}</b-list-group-item
              >
              <b-list-group-item>Cupos: {{ course.cupos }}</b-list-group-item>
              <b-list-group-item
                >Completado:
                {{ course.estado ? "Si" : "No" }}</b-list-group-item
              >
              <b-list-group-item
                >Fecha de registro:
                {{
                  course.fecha ? course.fecha : "--/--/--"
                }}</b-list-group-item
              >
              <b-list-group-item
                >Descripción: {{ course.descripcion }}</b-list-group-item
              >
            </b-list-group>
          </b-card-text>
          <template #footer>
            <small class="text-muted">Last updated 3 mins ago</small>
          </template>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CoursesCards",
  computed: {
    ...mapState(["courses"]),
  },
};
</script>

<style lang="scss" scoped>
img {
  height: 100px;
  width: 100%;
}
</style>
