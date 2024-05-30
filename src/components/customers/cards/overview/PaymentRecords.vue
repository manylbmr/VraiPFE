<template>
  <!--begin::Card-->
  <div :class="`card pt-4 ${cardClasses}`">
    <!--begin::Card header-->
    <div class="card-header border-0">
      <!--begin::Card title-->
      <div class="card-title">
        <h2></h2>
      </div>
      <!--end::Card title-->

      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Filter-->
        <button
          type="button"
          class="btn btn-sm btn-flex btn-light-primary"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_add_payment"
        >
          <KTIcon icon-name="plus-square" icon-class="fs-3" />
          Rate
        </button>
        <!--end::Filter-->
      </div>
      <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body pt-0 pb-5">
      <Datatable
        :header="tableHeader"
        :data="tableData"
        :items-per-page="5"
        :items-per-page-dropdown-enabled="false"
      >
        <template v-slot:Titre="{ row: payment }">
          {{ payment.Titre }}
        </template>
        <template v-slot:status="{ row: payment }">
          <span :class="`badge badge-light-${payment.status.state}`">{{
            payment.status.label
          }}</span>
        </template>
        <template v-slot:datedébut="{ row: payment }">
          {{ payment.datedébut }}
        </template>
        <template v-slot:datefin="{ row: payment }">
          {{ payment.datefin }}
        </template>
        <template v-slot:description="{ row: payment }">
          {{ payment.description }}
        </template>
        <template v-slot:traiteepar="{ row: payment }">
          {{ payment.traiteepar }}
        </template>
        <template v-slot:date="{ row: payment }">
          {{ payment.date }}
        </template>
        <template v-slot:actions="{ row: payment }">
          <a
            href="#"
            class="btn btn-sm btn-light btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
            >Actions
            <KTIcon icon-name="down" icon-class="fs-5 m-0" />
          </a>
          <!--begin::Menu-->
          <div
            class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
            data-kt-menu="true"
          >
            <!--begin::Menu item-->
            <div class="menu-item px-3">
              <router-link
                to="/apps/customers/customer-details"
                class="menu-link px-3"
                >View</router-link
              >
            </div>
            <!--end::Menu item-->
            <!--begin::Menu item-->
            <div class="menu-item px-3">
              <a @click="deleteRecord(payment.invoice)" class="menu-link px-3"
                >Delete</a
              >
            </div>
            <!--end::Menu item-->
          </div>
          <!--end::Menu-->
        </template>
      </Datatable>
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";

export default defineComponent({
  name: "payment-records",
  props: {
    cardClasses: String,
  },
  components: {
    Datatable,
  },
  setup() {
    const tableHeader = ref([
      {
        columnName: "Titre",
        columnLabel: "Titre",
        sortEnabled: false,
      },
      {
        columnName: "Status",
        columnLabel: "status",
        sortingField: "status.label",
        sortEnabled: false,
      },
     
      {
        columnName: "Date d'envoi",
        columnLabel: "date",
        sortEnabled: false,
      },
      {
        columnName: "Date début",
        columnLabel: "datedébut",
        sortEnabled: false,
      },
      {
        columnName: "Date fin",
        columnLabel: "datefin",
        sortEnabled: false,
      },
      {
        columnName: "Description",
        columnLabel: "description",
        sortEnabled: false,
      },
      {
        columnName: "Traitée par",
        columnLabel: "traiteepar",
        sortEnabled: false,
      },
    
    ]);
    const tableData = ref([
      {
        Titre: "Demande de congé",
         
        description: "Besoin d'un jour de congé pour des raisons personnelles",
        date: "26/05/2024",
        status: {
          label: "Pending",
          state: "warning",
        },
        datedébut: "27/05/2024",
        datefin: "28/05/2024",
        traiteepar: "Mme. Aicha",
      },
     
    ]);

    const deleteRecord = (Titre: string) => {
      for (let i = 0; i < tableData.value.length; i++) {
        if (tableData.value[i].Titre === Titre) {
          tableData.value.splice(i, 1);
        }
      }
    };

    return { tableHeader, tableData, deleteRecord, getAssetPath };
  },
});
</script>
