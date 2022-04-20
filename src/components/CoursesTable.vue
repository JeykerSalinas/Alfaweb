<template>
  <div>
    <b-container>
      <b-table striped hover :items="courses" :fields="fields" responsive>
        <template #cell(duracion)="data">
          {{
            data.item.duracion === 1 ? "1 mes" : data.item.duracion + " meses"
          }}
        </template>
        <template #cell(costo)="data">
          {{ data.item.costo.toLocaleString("DE-de") }}
        </template>
        <template #cell(estado)="data">
          {{ data.item.estado ? "Culminado" : "Activo" }}
        </template>
        <template #cell(acciones)="data">
          <b-button
            variant="primary"
            size="sm"
            class="ms-1"
            @click="setCourse(data.item)"
            v-b-modal.editModal
          >
            <b-icon-pencil-fill></b-icon-pencil-fill>
          </b-button>
          <b-button
            variant="danger"
            size="sm"
            class="ms-1"
            v-b-modal.deleteModal
            @click="setCourse(data.item)"
          >
            <b-icon-trash-fill></b-icon-trash-fill>
          </b-button>
        </template>
      </b-table>
    </b-container>
    <DeleteModal />
    <EditModal />
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import DeleteModal from "@/components/DeleteModal.vue";
import EditModal from "@/components/EditModal.vue";
export default {
  name: "CoursesTable",
  components: {
    DeleteModal,
    EditModal,
  },
  data() {
    return {
      fields: [
        { key: "nombre", label: "Curso" },
        "cupos",
        "inscritos",
        "duracion",
        "costo",
        "estado",
        "acciones",
      ],
    };
  },
  computed: {
    ...mapState(["courses"]),
  },
  methods: {
    setCourse(course) {
      this.SET_CURRENT_COURSE(course);
    },
    ...mapMutations(["SET_CURRENT_COURSE"]),
  },
};
</script>

<style lang="scss" scoped></style>
