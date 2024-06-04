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
    <div   class="row g-6 mb-6 g-xl-9 mb-xl-9"
    style=" display: grid;
  grid-template-columns: repeat(2, 600px);
  gap: 20px; "
    >


    <span  @on-sort="sort"
        @on-items-select="onItemSelect"
        :data="tableData"
        
        :enable-items-per-page-dropdown="true" 
        :checkbox-enabled="true"
        checkbox-label="id"
        v-for="(emp, index) in tableData" :key="index">

      <Card3

      style="width: 500px;"

        :name=emp.name
        :position=emp.poste
        :Present="true"
        
        :avatar="getAssetPath(emp.image)"
        :present="true"
        ></Card3>
  </span>  

      
    </div>
    <!--end::Row-->
  </template>
  
  <script lang="ts">
  import { getAssetPath } from "@/core/helpers/assets";
  
  import Card3 from "@/components/cards/Card3.vue";
  import { fetchCustomersByEquipe, type ICustomer } from "@/core/data/customers";
// import customers from "@/core/data/customers";
import arraySort from "array-sort";
import { defineComponent, onMounted, ref } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import type { Sort } from "@/components/kt-datatable//table-partials/models";



  export default defineComponent({
    name: "profile-connections",
    components: {
      Card3,
    },
    setup() {

      const selectedIds = ref<Array<number>>([]);
      const tableData =ref<Array<ICustomer>>([]);
    //ref<Array<ICustomer>>(customers);
    const initCustomers = ref<Array<ICustomer>>([]);

    onMounted(async () => {
      const customers = await fetchCustomersByEquipe(7654);
      tableData.value = customers;
      console.log(customers.name);
      // initCustomers.value.splice(0, tableData.value.length, ...tableData.value);
    });

    const sort = (sort: Sort) => {
      const reverse: boolean = sort.order === "asc";
      if (sort.label) {
        arraySort(tableData.value, sort.label, { reverse });
      }
    };
    const onItemSelect = (selectedItems: Array<number>) => {
      selectedIds.value = selectedItems;
    };


   



      return {
        getAssetPath,
        tableData,
        initCustomers,
        sort,
        onItemSelect,
        

      };
    },
  });
  </script>
  