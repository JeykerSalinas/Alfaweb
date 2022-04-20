<template>
  <b-container class="about" id="administration">
    <h3>Administración</h3>
    <div class="text-end mb-2">
      <b-button variant="info" v-b-modal.createModal class="p-1"
        >Crear un nuevo curso</b-button
      >
    </div>
    <CoursesTable />
    <CreateModal />
    <InfoComponent />
  </b-container>
</template>
<script>
import CoursesTable from "@/components/CoursesTable.vue";
import CreateModal from "@/components/CreateModal.vue";
import InfoComponent from "@/components/InfoComponent.vue";
export default {
  name: "AdministrationView",
  components: {
    CoursesTable,
    CreateModal,
    InfoComponent,
  },
};
</script>
<style>
#administration {
  margin-top: 5rem;
}
</style>
