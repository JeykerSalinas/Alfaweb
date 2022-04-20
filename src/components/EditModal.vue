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
              <p>{{ currentCourse.fecha }} Hola soy el edit</p>
              <b-form-group>
                <b-form-input
                  v-model="currentCourse.nombre"
                  placeholder="Nombre"
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Logo del curso" label-for="imgCourse">
                <b-form-input
                  id="nested-street"
                  v-model="currentCourse.img"
                  placeholder="URL"
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Cupos" label-for="cupos">
                <b-form-input
                  v-model="currentCourse.cupos"
                  id="cupos"
                  placeholder="0"
                  type="number"
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Inscritos" label-for="inscritos">
                <b-form-input
                  v-model="currentCourse.inscritos"
                  id="inscritos"
                  placeholder="0"
                  type="number"
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Duración (meses)" label-for="duracion">
                <b-form-input
                  v-model="currentCourse.duracion"
                  id="duracion"
                  placeholder="0"
                  type="number"
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Costo" label-for="costo">
                <b-form-input
                  v-model="currentCourse.costo"
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
                  v-model="currentCourse.codigo"
                ></b-form-input>
              </b-form-group>
              <b-form-checkbox
                v-model="currentCourse.estado"
                name="check-button"
                switch
              >
                Estado:
                <b>({{ currentCourse.estado ? "Culminado" : "Activo" }})</b>
              </b-form-checkbox>
              <b-form-group label="Descripción" label-for="textarea">
                <b-form-textarea
                  id="textarea"
                  placeholder="Enter something..."
                  rows="3"
                  max-rows="6"
                  v-model="currentCourse.descripcion"
                ></b-form-textarea>
              </b-form-group>
            </b-form-group>
          </b-card>
        </div>
        <template #modal-cancel><span>Cancelar</span></template>
        <template #modal-ok>
          <span v-b-modal.updateModal>Actualizar curso</span></template
        >
      </b-modal>
    </div>
    <b-modal id="updateModal" hide-header-close>
      <p class="fw-bold">Esta acción modificará el curso actual</p>
      <p>¿Seguro@ que desea continuar?</p>
      <template #modal-cancel><span @click="cancel">Cancelar</span></template>
      <template #modal-ok>
        <span @click="updateCourse(currentCourse)"
          >Actualizar curso</span
        ></template
      >
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  name: "EditModal",
  computed: {
    ...mapState(["currentCourse"]),
  },
  methods: {
    ...mapActions(["updateCourse"]),
    ...mapMutations(["SET_CURRENT_COURSE"]),
    cancel() {
      this.SET_CURRENT_COURSE({});
    },
  },
};
</script>
