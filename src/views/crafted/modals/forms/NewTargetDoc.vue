<template>
    <KTModalCard
      title="New Target Modal Example"
      description="Click on the below buttons to launch <br/>a new target example."
      :image="getIllustrationsPath('17.png')"
      button-text="Add New Target"
      modal-id="kt_modal_new_target_doc"
    ></KTModalCard>
  
    <KTNewTargetModal></KTNewTargetModal>
  </template>
  
  <script lang="ts">
  import { getAssetPath, getIllustrationsPath } from "@/core/helpers/assets";
  import { defineComponent } from "vue";
  import KTModalCard from "@/components/cards/Card.vue";
  
  import KTNewTargetDoc from "@/components/modals/forms/NewTargetDoc.vue";

  
  export default defineComponent({
    name: "new-target_doc",
    components: {
      KTModalCard,
      
      KTNewTargetDoc,
     
    },
    setup() {
      return {
        getIllustrationsPath,
        getAssetPath,
      };
    },
  });
  </script>
  