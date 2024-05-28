<template>
  <!--begin::Toolbar-->
  <div class="d-flex flex-wrap flex-stack my-5">
    <!--begin::Heading-->
    <h2 class="fs-2 fw-semibold my-2">
      Demandes des employés
      <span class="fs-6 text-gray-500 ms-1">by Status</span>
    </h2>
    <!--end::Heading-->

    <!--begin::Controls-->
    <div class="d-flex flex-wrap my-1">
      <!--begin::Select wrapper-->
      <div class="m-0">
        <!--begin::Select-->
        <select
          name="status"
          data-control="select2"
          data-hide-search="true"
          class="form-select form-select-white form-select-sm fw-bold w-125px"
        >
        <option value="Toutes" selected>Toutes</option>
          <option value="Active" selected>Actives</option>
         
          <option value="In Progress">Traitées</option>
        </select>
        <!--end::Select-->
      </div>
      <!--end::Select wrapper-->
    </div>
    <!--end::Controls-->
  </div>
  <!--end::Toolbar-->

  <!--begin::Row-->
  <div class="row g-6 g-xl-9">
    <!--begin::Col-->
    <div class="col-md-6 col-xl-4">
      <KTCard
        
        title="Demande de congé"
        datedebut="15/05/2024"
        DateFin="17/05/2024"
        description="Congé annuel"
        username="Pascal Bleu"
        
        :users="users1"
      ></KTCard>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-md-6 col-xl-4">
      <KTCard
        
        title="Demande absence"
        datedebut="15/05/2024"
        DateFin="29/05/2024"
        description="Maladie"
        username="Max Smith"
        
        :users="users2"
      ></KTCard>
    </div>
    <!--end::Col-->

     <!--begin::Col-->
     <div class="col-md-6 col-xl-4">
      <KTCardDoc
        
        title="Demande de document"
       
        description="Besoin de fiche de paye pour la banque"
        username="Max Smith"
        
        :users="users2"
      ></KTCardDoc>
    </div>
    <!--end::Col-->


     <!--begin::Col-->
     <div class="col-md-6 col-xl-4">
      <KTCard
        
        title="Demande absence"
        datedebut="15/05/2024"
        DateFin="29/05/2024"
        description="Maladie"
        username="Stan Smith"
        
        :users="users4"
      ></KTCard>
    </div>
    <!--end::Col-->

     <!--begin::Col-->
     <div class="col-md-6 col-xl-4">
      <KTCard
        
        title="Demande absence"
        datedebut="15/05/2024"
        DateFin="29/05/2024"
        description="Maladie"
        username="Salim Brabus"
        
        :users="users3"
      ></KTCard>
    </div>
    <!--end::Col-->
    


    <!--begin::Pagination-->
    <div class="d-flex flex-stack flex-wrap pt-10">
      <div class="fs-6 fw-semibold text-gray-700">
        Showing 1 to 10 of 50 entries
      </div>

      <!--begin::Pages-->
      <ul class="pagination">
        <li class="page-item previous">
          <a href="#" class="page-link"><i class="previous"></i></a>
        </li>

        <li class="page-item active">
          <a href="#" class="page-link">1</a>
        </li>

        <li class="page-item">
          <a href="#" class="page-link">2</a>
        </li>

        <li class="page-item">
          <a href="#" class="page-link">3</a>
        </li>

        <li class="page-item">
          <a href="#" class="page-link">4</a>
        </li>

        <li class="page-item">
          <a href="#" class="page-link">5</a>
        </li>

        <li class="page-item">
          <a href="#" class="page-link">6</a>
        </li>

        <li class="page-item next">
          <a href="#" class="page-link"><i class="next"></i></a>
        </li>
      </ul>
      <!--end::Pages-->
    </div>
    <!--end::Pagination-->
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import KTCard from "@/components/cards/Card1RH.vue";
import KTCardDoc from "@/components/cards/CardDocRH.vue";
import KTCardChang from "@/components/cards/CardChangRH.vue";


export default defineComponent({
  name: "profile-projects",
  components: {
    KTCard, KTCardDoc, KTCardChang
  },
  setup() {
    const users1 = [
      
      { name: "Susan Redwood", initials: "S", state: "primary" },
    ];

    const users2 = [
      
      { name: "Brian Cox", src: getAssetPath("media/avatars/300-5.jpg") },
    ];

    const users3 = [
      { name: "Mad Masy", src: getAssetPath("media/avatars/300-6.jpg") },
     
    ];

    const users4 = [
      
      { name: "Rob Otto", initials: "R", state: "success" },
    ];

    const users5 = [
      {
        name: "Francis Mitcham",
        src: getAssetPath("media/avatars/300-20.jpg"),
      },
      {
        name: "Michelle Swanston",
        src: getAssetPath("media/avatars/300-7.jpg"),
      },
      { name: "Susan Redwood", initials: "S", state: "primary" },
    ];

    const users6 = [
      { name: "Emma Smith", src: getAssetPath("media/avatars/300-6.jpg") },
      { name: "Rudy Stone", src: getAssetPath("media/avatars/300-1.jpg") },
      { name: "Susan Redwood", initials: "S", state: "primary" },
    ];

    const users7 = [
      { name: "Meloday Macy", src: getAssetPath("media/avatars/300-2.jpg") },
      { name: "Rabbin Watterman", initials: "S", state: "success" },
    ];

    const users8 = [
      { name: "Emma Smith", src: getAssetPath("media/avatars/300-6.jpg") },
      { name: "Rudy Stone", src: getAssetPath("media/avatars/300-1.jpg") },
      { name: "Susan Redwood", initials: "S", state: "primary" },
    ];

    const users9 = [
      { name: "Meloday Macy", src: getAssetPath("media/avatars/300-2.jpg") },
      { name: "Rabbin Watterman", initials: "S", state: "danger" },
    ];

    return {
      users1,
      users2,
      users3,
      users4,
      users5,
      users6,
      users7,
      users8,
      users9,
      getAssetPath,
    };
  },
});
</script>
