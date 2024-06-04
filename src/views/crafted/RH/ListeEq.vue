<template>
    <div class="card">
      <div class="card-header border-0 pt-6">
        <!--begin::Card title-->
        <div class="card-title">
          <!--begin::Search-->
          <div class="d-flex align-items-center position-relative my-1">
            <KTIcon
              icon-name="magnifier"
              icon-class="fs-1 position-absolute ms-6"
            />
            <input
              type="text"
              v-model="search"
              @input="searchItems()"
              class="form-control form-control-solid w-250px ps-15"
              placeholder="chercher équipe"
            />
          </div>
          <!--end::Search-->
        </div>
        <!--begin::Card title-->
        <!--begin::Card toolbar-->
        <div class="card-toolbar">
          <!--begin::Toolbar-->
          <div
            v-if="selectedIds.length === 0"
            class="d-flex justify-content-end"
            data-kt-equipe-table-toolbar="base"
          >
           
            <!--begin::Add customer-->
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_add_equipe"
            >
              <KTIcon icon-name="plus" icon-class="fs-2" />
              Ajouter équipe
            </button>
            <!--end::Add customer-->
          </div>
          <!--end::Toolbar-->
          <!--begin::Group actions-->
          <div
            v-else
            class="d-flex justify-content-end align-items-center"
            data-kt-equipe-table-toolbar="selected"
          >
            <div class="fw-bold me-5">
              <span class="me-2">{{ selectedIds.length }}</span
              >Selected
            </div>
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteFewCustomers()"
            >
              Delete Selected
            </button>
          </div>
          <!--end::Group actions-->
          <!--begin::Group actions-->
          <div
            class="d-flex justify-content-end align-items-center d-none"
            data-kt-equipe-table-toolbar="selected"
          >
            <div class="fw-bold me-5">
              <span
                class="me-2"
                data-kt-equipe-table-select="selected_count"
              ></span
              >Selected
            </div>
            <button
              type="button"
              class="btn btn-danger"
              data-kt-equipe-table-select="delete_selected"
            >
              Delete Selected
            </button>
          </div>
          <!--end::Group actions-->
        </div>
        <!--end::Card toolbar-->
      </div>
      <div class="card-body pt-0">
        <Datatable
          @on-sort="sort"
          @on-items-select="onItemSelect"
          :data="tableData"
          :header="tableHeader"
          :enable-items-per-page-dropdown="true"
          :checkbox-enabled="true"
          checkbox-label="id"
        >
          <template v-slot:name="{ row: customer }">
            {{ customer.name }}
          </template>
          <template v-slot:rattachée="{ row: customer }">
            <a href="#" class="text-gray-600 text-hover-primary mb-1">
              {{ customer.rattachée }}
            </a>
          </template>
          <template v-slot:chef="{ row: customer }">
            {{ customer.responsable }}
          </template>
          <template v-slot:nbEmp="{ row: customer }">
           {{
              customer.poste
            }}
          </template>
         
          <template v-slot:actions="{ row: customer }">
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
                  to="DetailEmp"
                  class="menu-link px-3"
                  >View</router-link
                >
              </div>
              <!--end::Menu item-->
              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <a @click="deleteCustomer(customer.id)" class="menu-link px-3"
                  >Delete</a
                >
              </div>
              <!--end::Menu item-->
            </div>
            <!--end::Menu-->
          </template>
        </Datatable>
      </div>
    </div>
  
    <ExportCustomerModal></ExportCustomerModal>
    <AddEquipeModal></AddEquipeModal>
  </template>
  
  <script lang="ts">
  import { getAssetPath } from "@/core/helpers/assets";
  import { defineComponent, onMounted, ref } from "vue";
  import Datatable from "@/components/kt-datatable/KTDataTable.vue";
  import type { Sort } from "@/components/kt-datatable//table-partials/models";
  import ExportCustomerModal from "@/components/modals/forms/ExportCustomerModal.vue";
  import AddEquipeModal from "@/components/modals/forms/AddEquipeModal.vue";
  
  // import customers from "@/core/data/customers";
  import arraySort from "array-sort";
  import { MenuComponent } from "@/assets/ts/components";
  import { fetchEquipe, type IEquipe } from "@/core/data/equipe";


  
  export default defineComponent({
    name: "customers-listing",
    components: {
      Datatable,
      ExportCustomerModal,
      AddEquipeModal,
    },
  
  
  
   
    
  
  
  
    setup() {
      const tableHeader = ref([
        {
          columnName: "Nom équipe",
          columnLabel: "name",
          sortEnabled: true,
          columnWidth: 175,
        },
        {
          columnName: "Rattachée à",
          columnLabel: "rattachée",
          sortEnabled: true,
          columnWidth: 230,
        },
        {
          columnName: "Chef",
          columnLabel: "chef",
          sortEnabled: true,
          columnWidth: 175,
        },
        {
          columnName: "nombre d'employés",
          columnLabel: "nbEmp",
          sortEnabled: true,
          columnWidth: 175,
        },
       
        {
          columnName: "Actions",
          columnLabel: "actions",
          sortEnabled: false,
          columnWidth: 135,
        },
      ]);
      const selectedIds = ref<Array<number>>([]);
  
      const tableData =ref<Array<IEquipe>>([]);
      //ref<Array<ICustomer>>(customers);
      const initEquipe = ref<Array<IEquipe>>([]);
  
      onMounted(async () => {
        const equipes = await fetchEquipe();
        tableData.value = equipes;
        console.log(equipes);
        // initCustomers.value.splice(0, tableData.value.length, ...tableData.value);
      });
  
  
      
  
  
      const deleteFewCustomers = () => {
        selectedIds.value.forEach((item) => {
          deleteCustomer(item);
        });
        selectedIds.value.length = 0;
      };
  
      const deleteCustomer = (id: string) => {
        for (let i = 0; i < tableData.value.length; i++) {
          if (tableData.value[i].id === id) {
            tableData.value.splice(i, 1);
          }
        }
      };
  
      const search = ref<string>("");
      const searchItems = () => {
        tableData.value.splice(0, tableData.value.length, ...initCustomers.value);
        if (search.value !== "") {
          let results: Array<IEquipe> = [];
          for (let j = 0; j < tableData.value.length; j++) {
            if (searchingFunc(tableData.value[j], search.value)) {
              results.push(tableData.value[j]);
            }
          }
          tableData.value.splice(0, tableData.value.length, ...results);
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
          arraySort(tableData.value, sort.label, { reverse });
        }
      };
      const onItemSelect = (selectedItems: Array<number>) => {
        selectedIds.value = selectedItems;
      };
  
      return {
        tableData,
        tableHeader,
        deleteCustomer,
        search,
        searchItems,
        selectedIds,
        deleteFewCustomers,
        sort,
        onItemSelect,
        getAssetPath,
      };
    },
  });
  </script>
  