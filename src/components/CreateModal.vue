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
                <p>{{ fecha }}</p>
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
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CreateModal",
  data() {
    return {
      newCourse: {
        nombre: "",
        img: "",
        cupos: 0,
        inscritos: 0,
        duracion: 0,
        costo: 0,
        descripcion: "",
        estado: false,
      },
      codigo: "",
      fecha: new Date().toLocaleDateString("en-GB"),
    };
  },
  mounted() {
    this.$root.$on("bv::modal::show", () => {
      this.codeGenerator(0);
    });
  },
  computed: {
    ...mapGetters(["getCodes"]),
  },
  methods: {
    codeGenerator(num) {
      const myArr = this.getCodes.map((course) => Number(course.slice(1)));
      return myArr.includes(num)
        ? this.codeGenerator(num + 1)
        : (this.codigo =
            "C" +
            String(num).padStart(
              String(num).length + 4 - String(num).length,
              "0"
            ));
    },
    cleanForm() {
      this.newCourse = {
        nombre: "",
        img: "",
        cupos: 0,
        inscritos: 0,
        duracion: 0,
        costo: 0,
        descripcion: "",
        estado: false,
      };
    },
    ...mapActions(["addCourse"]),
    createCurr() {
      const newCourse = {
        ...this.newCourse,
        fecha: this.fecha,
        codigo: this.codigo,
      };
      this.addCourse(newCourse);
      this.cleanForm();
      this.codeGenerator(0);
    },
  },
};
</script>
