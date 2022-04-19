<template>
  <div>
    <div>
      <b-modal id="editModal" hide-header-close>
        <div>
          <b-card bg-variant="light">
            <b-form-group
              label="Agregando curso"
              label-size="lg"
              label-class="fw-bold pt-0"
              class="mb-0"
            >
              <p>{{ fecha }} Hola soy el edit</p>
              <b-form-group>
                <b-form-input
                  v-model="newCourse.nombre"
                  placeholder="Nombre"
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Logo del curso" label-for="imgCourse">
                <b-form-input
                  id="nested-street"
                  v-model="newCourse.img"
                  placeholder="URL"
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Cupos" label-for="cupos">
                <b-form-input
                  v-model="newCourse.cupos"
                  id="cupos"
                  placeholder="0"
                  type="number"
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Inscritos" label-for="inscritos">
                <b-form-input
                  v-model="newCourse.inscritos"
                  id="inscritos"
                  placeholder="0"
                  type="number"
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Duración (meses)" label-for="duracion">
                <b-form-input
                  v-model="newCourse.duracion"
                  id="duracion"
                  placeholder="0"
                  type="number"
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Costo" label-for="costo">
                <b-form-input
                  v-model="newCourse.costo"
                  id="costo"
                  placeholder="0"
                  type="number"
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Código" label-for="codigo">
                <b-form-input
                  id="codigo"
                  readonly
                  type="text"
                  v-model="codigo"
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Descripción" label-for="textarea">
                <b-form-textarea
                  id="textarea"
                  placeholder="Enter something..."
                  rows="3"
                  max-rows="6"
                  v-model="newCourse.descripcion"
                ></b-form-textarea>
              </b-form-group>
              <b-form-group class="py-2">
                <b-button variant="warning" @click="cleanForm"
                  >Limpiar formulario</b-button
                >
              </b-form-group>
            </b-form-group>
          </b-card>
        </div>
        <template #modal-cancel
          ><span @click="cleanForm">Cancelar</span></template
        >
        <template #modal-ok>
          <span @click="createCurr">Crear curso</span></template
        >
      </b-modal>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "CreateModal",
  data() {
    return {
      currentCourse: { ...this.currentCourse },
    };
  },
  computed: {
    ...mapState(["currentCourse"]),
  },
  mounted() {
    this.codeGenerator(0);
  },
  methods: {
    cleanForm() {
      this.newCourse = {};
    },
    ...mapActions(["setCourse"]),
  },
};
</script>
