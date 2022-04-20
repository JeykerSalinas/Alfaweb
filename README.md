# alfa-web

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

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
        <template #modal-ok> <span @click="click">Crear curso</span></template>
      </b-modal>
