<template>
  <div>
    <div>
      <b-modal id="createModal" hide-header-close>
        <div>
          <b-card bg-variant="light">
            <b-form-group
              label="Agregando curso"
              label-size="lg"
              label-class="fw-bold pt-0"
              class="mb-0"
            >
              <b-form-group>
                <b-form-input
                  v-model="nombre"
                  placeholder="Nombre"
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Logo del curso" label-for="imgCourse">
                <b-form-input
                  id="nested-street"
                  placeholder="URL"
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Cupos" label-for="cupos">
                <b-form-input
                  id="cupos"
                  placeholder="0"
                  type="number"
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Inscritos" label-for="inscritos">
                <b-form-input
                  id="inscritos"
                  placeholder="0"
                  type="number"
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Duración (meses)" label-for="duracion">
                <b-form-input
                  id="duracion"
                  placeholder="0"
                  type="number"
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Costo" label-for="costo">
                <b-form-input
                  id="costo"
                  placeholder="0"
                  type="number"
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Código" label-for="codigo">
                <b-form-input
                  id="codigo"
                  readonly
                  type="number"
                  value="15"
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Descripción" label-for="textarea">
                <b-form-textarea
                  id="textarea"
                  v-model="text"
                  placeholder="Enter something..."
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>
            </b-form-group>
          </b-card>
        </div>
        <template #modal-cancel><span @click="cancel">Cancelar</span></template>
        <template #modal-ok>
          <span @click="createCurr">Crear curso</span></template
        >
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateModal",
  data() {
    return {
      nombre: "",
      newCourse: {
        nombre: "",
        img: "",
        cupos: 0,
        inscritos: 0,
        duracion: 0,
        costo: 0,
        codigo: 15,
        descripcion: "",
        estado: false,
        fecha: "",
      },
    };
  },
  methods: {
    cancel() {
      console.log("cancel");
    },
    createCurr() {
      console.log("createCurr");
    },
  },
};
</script>

<style lang="scss" scoped></style>
