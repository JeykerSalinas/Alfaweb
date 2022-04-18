<template>
  <b-container class="about">
    <h1>Administración</h1>
    <div class="text-end my-4">
      <b-button variant="info" v-b-modal.createModal
        >Crear un nuevo curso</b-button
      >
    </div>
    <CoursesTable />
    <CreateModal />
  </b-container>
</template>
<script>
import CoursesTable from "@/components/CoursesTable.vue";
import CreateModal from "@/components/CreateModal.vue";

export default {
  name: "AdministrationView",
  components: {
    CoursesTable,
    CreateModal,
  },
};
</script>
