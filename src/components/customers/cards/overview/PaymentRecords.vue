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
        :data="Data"
        :items-per-page="5"
        :items-per-page-dropdown-enabled="false"
      >
        <template v-slot:Titre="{ row: Data }">
          <div  v-if="Data.typeDemande == 0">
            
            
            Demande congé
          
          
          </div>

          <div  v-if="Data.typeDemande == 1">
            
            
            Demande d'absence
          
          
          </div>

          <div  v-if="Data.typeDemande == 2">
            
            
            Demande changement d'info
          
          
          </div>

          <div  v-if="Data.typeDemande == 3">
            
            
            Demande document
          
          
          </div>
         
        </template>
        <template v-slot:status="{ row: Data }">
          <div  v-if="Data.Etat == 0">
            
            
            en cours de traitement
          
          
          </div>

          <div  v-if="Data.Etat == 1">
            
            
            acceptée
          
          
          </div>

          <div  v-if="Data.Etat == 2">
            
            
            refusée

          </div>

          <div  v-if="Data.Etat == 3">
            
            
            annulée

          </div>

        </template>
        <template v-slot:datedébut="{ row: Data }">
          {{ Data.DateDebut }}
        </template>
        <template v-slot:datefin="{ row: Data }">
          {{ Data.DateFin }}
        </template>
        <template v-slot:description="{ row: Data }">
          {{ Data.Motif }}
        </template>
        <template v-slot:traiteepar="{ row: payment }">
          {{ payment.traiteepar }}
        </template>
        <template v-slot:date="{ row: Data }">
          {{ Data.DateCreation }}
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
import { defineComponent, onMounted, ref } from "vue";
import  { fetchDemandes, type IDemandes } from "@/core/data/demande";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "payment-records",
  props: {
    cardClasses: String,
  },
  components: {
    Datatable,
  },
  setup() {


    const initDemandes = ref<Array<IDemandes>>([]);

      const Data = ref<Array<IDemandes>>([]);


        const route = useRoute();
    
    const matricule = ref<string>("");


      onMounted(async () => {
        matricule.value = route.query.matricule as string;
        
      const demandes = await fetchDemandes(matricule.value);
      Data.value = demandes;
     
      console.log(Data.value);
    });


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

    return { tableHeader, tableData, deleteRecord, getAssetPath, Data };
  },
});
</script>
