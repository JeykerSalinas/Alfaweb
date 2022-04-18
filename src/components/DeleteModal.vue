<template>
  <div>
    <b-modal id="deleteModal" hide-header-close>
      <p class="fw-bold">
        Esta acción borrara por completo el curso registrado
      </p>
      <p>¿Seguro@ que desea continuar?</p>
      <template #modal-cancel><span @click="cancel">Cancelar</span></template>
      <template #modal-ok>
        <span @click="deleteCurr">Eliminar curso</span></template
      >
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "DeleteModal",
  computed: {
    ...mapState(["currentCourse"]),
  },
  methods: {
    cancel() {
      this.SET_CURRENT_COURSE({});
    },
    deleteCurr() {
      this.deleteCourse(this.currentCourse.id);
      this.SET_CURRENT_COURSE({});
    },
    ...mapMutations(["SET_CURRENT_COURSE"]),
    ...mapActions(["deleteCourse"]),
  },
};
</script>

<style lang="scss" scoped></style>
