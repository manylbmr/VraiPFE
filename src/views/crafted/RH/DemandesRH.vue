<template>
  <!--begin::Toolbar-->
  <div class="d-flex flex-wrap flex-stack my-5">
    <!--begin::Heading-->
    <h2 class="fs-2 fw-semibold my-2">
      Demandes à traiter
      <span class="fs-6 text-gray-500 ms-1">by Status</span>
    </h2>
    <!--end::Heading-->

    <!--begin::Controls-->
    <div class="d-flex flex-wrap my-1">
      <!--begin::Select wrapper-->
      <div class="m-0">
        <!--begin::Select-->
        <select name="status" data-control="select2" data-hide-search="true"
          class="form-select form-select-white form-select-sm fw-bold w-125px">
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
    <div  class="col-md-6 col-xl-4" @on-sort="sort" @on-items-select="onItemSelect" :data="DataConge"
      v-for="(demande, index) in DataConge" :key="index">

      <div  @on-sort="sort" @on-items-select="onItemSelect" :data="tableData"
      v-for="(emp, index) in tableData" :key="index">

    <div v-if="emp.id == demande.MatriculeEmp"   >
        

          <KTCardAbsCong 
      :status=demande.Etat 
      title="Demande de congé"
        
      :username="emp.name"
        
        :progress="50" 
        :datedebut=demande.DateDebut
         :DateFin=demande.DateFin
         :description=demande.Motif 
         :initials=emp.name.charAt(0)
         :equipe=emp.equipe

        :icon=emp.image
        :userid=emp.id
         :users="[
           
          
        ]"
        
        ></KTCardAbsCong>



        </div>
    </div>
    </div>
    <!--end::Col-->




<!--begin::Col-->
<div class="col-md-6 col-xl-4" @on-sort="sort" @on-items-select="onItemSelect" :data="DataAbs"
      v-for="(demande, index) in DataAbs" :key="index">
      <div  @on-sort="sort" @on-items-select="onItemSelect" :data="tableData"
      v-for="(emp, index) in tableData" :key="index">

    <div v-if="emp.id == demande.MatriculeEmp"   >
        

          <KTCardAbsCong 
      :status=demande.Etat 
      title="Demande de congé"
        
      :username="emp.name"
        
        :progress="50" 
        :datedebut=demande.DateDebut
         :DateFin=demande.DateFin
         :description=demande.Motif 
         :initials=emp.name.charAt(0)
         :equipe=emp.equipe

        :icon=emp.image
        :userid=emp.id
         :users="[
           
          
        ]"
        
        ></KTCardAbsCong>



        </div>
    </div>
    </div>
    <!--end::Col-->





    <!--begin::Col-->
    <div class="col-md-6 col-xl-4" @on-sort="sort" @on-items-select="onItemSelect" :data="DataDoc"
      v-for="(demande, index) in DataDoc" :key="index">
      <KTCardDoc
      :status=demande.Etat 
      title="Demande de document"
        
       
        
        :progress="50" 
        :typedoc=demande.TypeDoc

         :description=demande.Motif 
        :icon="getAssetPath('media/svg/brand-logos/plurk.svg')" :users="[
          
        ]">
        </KTCardDoc>
    </div>
    <!--end::Col-->


    <!--begin::Col-->
    <div class="col-md-6 col-xl-4" @on-sort="sort" @on-items-select="onItemSelect" :data="DataChang"
      v-for="(demande, index) in DataChang" :key="index">
      <KTCardChang
      :status=demande.Etat 
      title="Demande de changement d'info perso"
        
       
        
        :progress="50" 
       :nouvelleinfo=demande.NouvelleInformationMatricule
        
        :icon="getAssetPath('media/svg/brand-logos/plurk.svg')" :users="[
          
        ]"></KTCardChang>
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

import { defineComponent, onMounted, ref } from "vue";
import { getAssetPath } from "@/core/helpers/assets";
import KTCardAbsCong from "@/components/cards/Card1RH.vue";
import KTCardDoc from "@/components/cards/CardDocRH.vue";
import KTCardChang from "@/components/cards/CardChangRH.vue";
import { fetchDemandesAbsence , type IDemandesAbsence } from "@/core/data/demande";
import { fetchDemandesChangement , type IDemandesChang} from "@/core/data/demande";
import { fetchDemandesConge , type IDemandesConge } from "@/core/data/demande";
import { fetchDemandesDocument , type IDemandesDoc} from "@/core/data/demande";
import  { fetchDemandes, type IDemandes } from "@/core/data/demande";
import { MenuComponent } from "@/assets/ts/components";

import type { Sort } from "@/components/kt-datatable//table-partials/models";
import arraySort from "array-sort";
import { fetchCustomers, type ICustomer } from "@/core/data/customers";


export default defineComponent({
  name: "profile-projects",
  components: {
    KTCardAbsCong, KTCardDoc, KTCardChang
  },
  setup() {
    const selectedIds = ref<Array<number>>([]);

    const Data = ref<Array<IDemandes>>([]);
        const DataAbs = ref<Array<IDemandesAbsence>>([]);
        const DataChang = ref<Array<IDemandesChang>>([]);
        const DataConge = ref<Array<IDemandesConge>>([]);
        const DataDoc = ref<Array<IDemandesDoc>>([]);
            

    const initDemandes = ref<Array<IDemandes>>([]);
       

        const tableData =ref<Array<ICustomer>>([]);
    //ref<Array<ICustomer>>(customers);
    const initCustomers = ref<Array<ICustomer>>([]);

    onMounted(async () => {
      const customers = await fetchCustomers();
      tableData.value = customers;
      console.log(customers);
      // initCustomers.value.splice(0, tableData.value.length, ...tableData.value);
    });



    onMounted(async () => {
      const demandesAbs = await fetchDemandesAbsence();
      DataAbs.value = demandesAbs;
      console.log(demandesAbs);
    });


    onMounted(async () => {
      const demandesConge = await fetchDemandesConge();
      DataConge.value = demandesConge;
      console.log(demandesConge);
    });


    onMounted(async () => {
      const demandesDoc = await fetchDemandesDocument();
      DataDoc.value = demandesDoc;
      console.log(demandesDoc);
    });


    onMounted(async () => {
      const demandesChang = await fetchDemandesChangement();
      DataChang.value = demandesChang;
      console.log(demandesChang);
    });


    onMounted(async () => {
      const demandes = await fetchDemandes();
      Data.value = demandes;
      initDemandes.value = demandes;
      console.log(demandes);
    });

    onMounted(async () => {
        
       
     

    });



    const deleteFewDemandes = () => {
      selectedIds.value.forEach((item) => {
        deleteDemandes(item);
      });
      selectedIds.value.length = 0;
    };

    const deleteDemandes = (id: number) => {
      for (let i = 0; i < Data.value.length; i++) {
        if (Data.value[i].id === id) {
          Data.value.splice(i, 1);
        }
      }
    };

    const search = ref<string>("");
    const searchItems = () => {
      Data.value.splice(0, Data.value.length, ...initDemandes.value);
      if (search.value !== "") {
        let results: Array<IDemandes> = [];
        for (let j = 0; j < Data.value.length; j++) {
          if (searchingFunc(Data.value[j], search.value)) {
            results.push(Data.value[j]);
          }
        }
        Data.value.splice(0, Data.value.length, ...results);
      }
      MenuComponent.reinitialization();
    };

    const searchingFunc = (obj: any, value: string): boolean => {
      for (let key in obj) {
        if (!Number.isInteger(obj[key]) && !(typeof obj[key] === "object")) {
          if (obj[key].indexOf(value) != -1) {
            return true;
          }
        }
      }
      return false;
    };

    const sort = (sort: Sort) => {
      const reverse: boolean = sort.order === "asc";
      if (sort.label) {
        arraySort(Data.value, sort.label, { reverse });
      }
    };

    const onItemSelect = (selectedItems: Array<number>) => {
      selectedIds.value = selectedItems;
    };








    return {

      getAssetPath,
      Data,
        DataAbs,
        DataChang,
        DataConge,
        DataDoc,
        deleteDemandes,

      search,
      searchItems,
      onItemSelect,
      deleteFewDemandes,
      sort,
      tableData,
       
    };
  },
});
</script>