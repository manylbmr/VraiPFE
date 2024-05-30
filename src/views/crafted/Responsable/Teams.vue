<template>
    <!--begin::Followers toolbar-->
    <div class="d-flex flex-wrap flex-stack mb-6">
      <!--begin::Title-->
      <h3 class="fw-bold my-2">
        Mon équipe
        <span class="fs-6 text-gray-400 fw-semibold ms-1">(29)</span>
      </h3>
      <!--end::Title-->
  
      <!--begin::Controls-->
      <div class="d-flex my-2">
        <!--begin::Select-->
        <select
          name="status"
          data-control="select2"
          data-hide-search="true"
          class="form-select form-select-white form-select-sm w-125px"
        >
          <option value="Active" selected>Tous</option>
          <option value="Approved">Présent</option>
          <option value="Declined">Absent</option>
          </select>
        <!--end::Select-->
      </div>
      <!--end::Controls-->
    </div>
    <!--end::Followers toolbar-->
  
    <!--begin::Row-->
    <div class="row g-6 mb-6 g-xl-9 mb-xl-9">
      <!--begin::Followers-->
      <Card3
        name="Patric Watson"
        position="Art Director at Novica Co."
        :Present="true"
        :avatar="getAssetPath('media/avatars/300-11.jpg')"
        :present="true"
      ></Card3>
      <Card3
        name="Richard Miller"
        position="Ingenieur en SI"
        :Present="true"
        :avatar="getAssetPath('media/avatars/300-17.jpg')"
        :present="true"
      ></Card3>
      <Card3
        name="Radamel Falcao"
        position="Data Analyst"
        :Present="false"
        :avatar="getAssetPath('media/avatars/300-2.jpg')"
        :present="true"
      ></Card3>
      <Card3
        name="Mustafa Amir"
        position="Web Developer"
        :Present="true"
        :avatar="getAssetPath('media/avatars/300-12.jpg')"
        :present="true"
      ></Card3>
  
      <!--end::Followers-->
    </div>
    <!--end::Row-->
  </template>
  
  <script lang="ts">
  import { getAssetPath } from "@/core/helpers/assets";
  import { defineComponent } from "vue";
  import Card3 from "@/components/cards/Card3.vue";
  
  export default defineComponent({
    name: "profile-connections",
    components: {
      Card3,
    },
    setup() {
      return {
        getAssetPath,
      };
    },
  });
  </script>
  