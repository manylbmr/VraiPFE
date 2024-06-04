<template>
    <!--begin::Card-->
    <a href="#" class="card border border-2 border-gray-300 border-hover">
      <!--begin::Card header-->
      <div class="card-header border-0 pt-9">
  
        <template v-if="users">
          <!--begin::Users-->
          <div class="symbol-group symbol-hover">
            <template v-for="(user, index) in users" :key="index">
              <!--begin::User-->
              <div
                class="symbol symbol-35px symbol-circle"
                data-bs-toggle="tooltip"
                :title="user.title"
                :description="user.description"
                :username="user.username"
                :userid="user.userid"
                :typedoc="user.typedoc"
                
              >
                <img v-if="user.src" alt="Pic" :src="user.src" />
                <span
                  v-else
                  class="symbol-label fw-bold"
                  :class="`bg-${user.state} text-inverse-${user.state}`"
                  >{{ user.initials }}</span
                >
              </div>
              <!--begin::User-->
            </template>
          </div>
          <!--begin::Username-->
        <a
          class="text-white-500 fw-italic fs-5 mt-1 mb-7"
          :href="`DetailEmp?matricule=${userid}`"
        >
          {{ username }}
         
        </a>
        <!--end::Username-->

          <!--end::Users-->
          
        </template>
  
  <br>
  
        
      </div>
      <!--end:: Card header-->
  
      <!--begin:: Card body-->
      <div class="card-body p-9">
        <!--begin::Name-->
        <div class="fs-3 fw-bold text-gray-900">
          {{ title }}
        </div>
        <!--end::Name-->
  

  <!--begin::Description-->
  <p class="text-gray-500 fw-semibold fs-5 mt-1 mb-7"
  v-if="typedoc=='0'"
  >
          Demande de congé
        </p>
        <p class="text-gray-500 fw-semibold fs-5 mt-1 mb-7"
  v-if="typedoc=='1'"
  >
  TitreDeConge
        </p>
        <p class="text-gray-500 fw-semibold fs-5 mt-1 mb-7"
  v-if="typedoc=='2'"
  >
  AutorisationAbsence
        </p>
        <p class="text-gray-500 fw-semibold fs-5 mt-1 mb-7"
  v-if="typedoc=='3'"
  >
  DemandeFormation
        </p>
        <p class="text-gray-500 fw-semibold fs-5 mt-1 mb-7"
  v-if="typedoc=='4'"
  >
  AttestationTravail
        </p>
        <p class="text-gray-500 fw-semibold fs-5 mt-1 mb-7"
  v-if="typedoc=='5'"
  >
  AttestationTravailEtSalaires
        </p>
        <p class="text-gray-500 fw-semibold fs-5 mt-1 mb-7"
  v-if="typedoc=='6'"
  >
  ReleverEmoluments
        </p>
        <p class="text-gray-500 fw-semibold fs-5 mt-1 mb-7"
  v-if="typedoc=='7'"
  >
  BulletinPaie
        </p>
        <p class="text-gray-500 fw-semibold fs-5 mt-1 mb-7"
  v-if="typedoc=='8'"
  >
  AttestationAffiliationCNAS
        </p>

        <!--end::Description-->

        <!--begin::Description-->
        <p class="text-gray-500 fw-semibold fs-5 mt-1 mb-7">
          {{ description }}
        </p>
        <!--end::Description-->
  
        <!--begin::Info-->
        <div class="d-flex flex-wrap mb-5">
          
        </div>
        <!--end::Info-->
  
 
        <br>
       
  
  <!--begin::Link-->
  <button
            class="btn btn-sm btn-light-primary fw-bold"
            data-kt-drawer-toggle="true"
            data-kt-drawer-target="#kt_drawer_chat"
            @click="openDrawer()"
          >
          
          <label for="file-upload" class="upload-icon">
            
        <i class="fas fa-upload"></i>
    </label>
    <input id="file-upload" type="file" class="file-input" onchange="handleFileUpload(event)" style="color:cornflowerblue">
    
          </button>
          <!--end::Link-->
  
         
  
        <!--begin::Card Title-->
        <div class="card-title m-0">
          
        </div>
        <!--end::Car Title-->
  
        
      </div>
      <!--end:: Card body-->
    </a>
    <!--end::Card-->
  </template>
  
  <script lang="ts">


function handleFileUpload(event) {
            const file = event.target.files[0];
            if (file) {
                alert(`Fichier sélectionné : ${file.name}`);
                // Ajoutez ici le code pour gérer le fichier téléchargé
            }
        }

  
import Swal from "sweetalert2/dist/sweetalert2.js";
  import { computed, defineComponent, ref } from "vue";
import { hideModal } from "@/core/helpers/modal";
  
  export default defineComponent({
    name: "card-1",
    components: {},
    props: {
      progress: Number,
  
      statusDataBadgeColor: String,
  
      statusDataColor: String,
  
      status: String,
  
      icon: String,

      typedoc: String,

      userid: String,
  
      title: String,
  
      description: String,
  
      username: String,  
  
  
      users: Array as () => Array<any>,
    },



    
    setup(props) {


      const formRef = ref<null | HTMLFormElement>(null);



    const addCustomerModalRef = ref<null | HTMLElement>(null);


    const submit = () => {
     

      
        
           

     Swal.fire({
       text: "la demande a été traitée avec succès!",
       icon: "success",
       buttonsStyling: false,
       confirmButtonText: "Ok",
       heightAuto: false,
       customClass: {
         confirmButton: "btn btn-primary",
       },
     }).then(() => {
       
       hideModal( addCustomerModalRef.value);
       location.reload();
     });
  

 

};


      const getDescription = computed(() => {
        return props.description
          ? props.description
          : "Besoin d'un certificat de travail pour AADL";
      });
  
      
  
     
  
      const getStatus = computed(() => {
        return props.status ? props.status : "In Progress";
      });
  
      const getStatusDataBadgeColor = computed(() => {
        return props.statusDataBadgeColor
          ? props.statusDataBadgeColor
          : "badge-light-primary";
      });
  
      const getStatusDataColor = computed(() => {
        return props.statusDataColor ? props.statusDataColor : "bg-primary";
      });
  
      return {
        getDescription,
     
      
        getStatus,
        getStatusDataBadgeColor,
        getStatusDataColor,
        submit,
      addCustomerModalRef,
      };
    },
  });
  </script>
  