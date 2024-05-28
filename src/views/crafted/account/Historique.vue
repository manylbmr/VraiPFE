<template>
  <!--begin::Toolbar-->
  <div class="d-flex flex-wrap flex-stack my-5">
    <!--begin::Heading-->
    <h2 class="fs-2 fw-semibold my-2">
      Historique des demandes
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
          <option value="Active" selected>Active</option>
          <option value="Approved">In Progress</option>
          <option value="Declined">To Do</option>
          <option value="In Progress">Completed</option>
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
      <KTCardAbsCong
        status="Pending"
        status-data-badge-color="badge-light"
        :progress="30"
        :icon="getAssetPath('media/svg/brand-logos/disqus.svg')"
        title="Demande d'absence"
        datedebut="15/05/2024"
        DateFin="17/05/2024"
        description="Maladie"
        budget="$36,400.00"
        :users="users2"
      ></KTCardAbsCong>
    </div>
    <!--end::Col-->

     <!--begin::Col-->
     <div class="col-md-6 col-xl-4">
      <KTCardAbsCong
        :progress="50"
        title="Demande de congé"
        datedebut="12/03/2024"
        DateFin="24/03/2024"
        description="Vacances en famille"
        :icon="getAssetPath('media/svg/brand-logos/plurk.svg')"
        :users="users1"
      ></KTCardAbsCong>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-md-6 col-xl-4">
      <KTCardDoc
        status="Completed"
        status-data-badge-color="badge-light-success"
        :progress="100"
        :icon="getAssetPath('media/svg/brand-logos/figma-1.svg')"
        title="Demande de document"
        description="Besoin d'un certificat de travail pour AADL"
        budget="$605,100.00"
        :users="users3"
      ></KTCardDoc>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-md-6 col-xl-4">
      <KTCardChang
        status="Pending"
        :progress="60"
        status-data-badge-color="badge-light"
        :icon="getAssetPath('media/svg/brand-logos/sentry-3.svg')"
        title="Demande de changement d'information personnelle"
        budget="$36,400.00"
        :users="users4"
      ></KTCardChang>
    </div>
    <!--end::Col-->

     <!--begin::Col-->
     <div class="col-md-6 col-xl-4">
      <KTCardAbsCong
        :progress="50"
        title="Demande d'absence"
        datedebut="12/01/2024"
        DateFin="14/01/2024"
        description="Mariage d'un proche"
        :icon="getAssetPath('media/svg/brand-logos/plurk.svg')"
        :users="users1"
      ></KTCardAbsCong>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-md-6 col-xl-4">
      <KTCardDoc
        status="Completed"
        status-data-badge-color="badge-light-success"
        :progress="100"
        :icon="getAssetPath('media/svg/brand-logos/figma-1.svg')"
        title="Demande de document"
        description="Besoin d'une fiche de paye pour la banque"
      
        budget="$605,100.00"
        :users="users3"
      ></KTCardDoc>
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
import KTCardAbsCong from "@/components/cards/Card1.vue";
import KTCardDoc from "@/components/cards/CardDoc.vue";
import KTCardChang from "@/components/cards/CardChang.vue";

export default defineComponent({
  name: "profile-projects",
  components: {
    KTCardAbsCong,KTCardDoc, KTCardChang
  },
  setup() {
    const users1 = [
      
      { name: "Rudy Stone", src: getAssetPath("media/avatars/300-1.jpg") },

    ];

    const users2 = [
    { name: "Rudy Stone", src: getAssetPath("media/avatars/300-1.jpg") },
    ];

    const users3 = [
    { name: "Rudy Stone", src: getAssetPath("media/avatars/300-1.jpg") },
    ];

    const users4 = [
    { name: "Rudy Stone", src: getAssetPath("media/avatars/300-1.jpg") },
    ];

    const users5 = [
      {
        name: "Rudy Stone", src: getAssetPath("media/avatars/300-1.jpg") 
      },
      {
        name: "Rudy Stone", src: getAssetPath("media/avatars/300-1.jpg") 
      },
      { name: "Rudy Stone", src: getAssetPath("media/avatars/300-1.jpg") },
    ];

   

    const users7 = [
    { name: "Rudy Stone", src: getAssetPath("media/avatars/300-1.jpg") },
    { name: "Rudy Stone", src: getAssetPath("media/avatars/300-1.jpg") },
    ];

    

    const users9 = [
    { name: "Rudy Stone", src: getAssetPath("media/avatars/300-1.jpg") },
    { name: "Rudy Stone", src: getAssetPath("media/avatars/300-1.jpg") },
    ];

    return {
      users1,
      users2,
      users3,
      users4,
      users5,
     
      users7,
     
      users9,
      getAssetPath,
    };
  },
});
</script>
