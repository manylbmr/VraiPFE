


<template>
  <div  ref="addCustomerModalRef">
  <!--begin::Card-->
  <a href="#" class="card border border-2 border-gray-300 border-hover"   >
    <!--begin::Card header-->
    <el-form @submit.prevent="submit()" >
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
              :datedebut="user.datedebut"
              :DateFin="user.DateFin"
              :description="user.description"
              :username="user.username"
              :userid="user.userid"
              :typeconge="user.typeconge"
              :icon="user.image"
              :equipe="user.equipe"
              :initials="user.initials"
              :lienjust="user.lienjust"
              :status="user.etat"
              :iddemande="user.iddem"

            >
              <img v-if="user.src" alt="Pic" :src="user.src" />
              <span
                v-else
                class="symbol-label fw-bold"
                :class="`bg-${user.state} text-inverse-${user.state}`"
                >{{ initials }}</span
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

        <!--begin::Username-->
        
        <!--end::Username-->

        <!--end::Users-->
      </template>
      <br />
    </div>
    <!--end:: Card header-->

    <!--begin:: Card body-->
    <div class="card-body p-9">
      

      <!--begin::Name-->
      <div class="fs-3 fw-bold text-gray-900">
        {{ title }}
      </div>
      <div class="fs-3 fw-bold text-gray-900"
      v-if="typeconge == '0'">
      
        annuel
      </div>
      <div class="fs-3 fw-bold text-gray-900"
      v-if="typeconge == '1'">
      
        exceptionnel
      </div>
      <div class="fs-3 fw-bold text-gray-900"
      v-if="typeconge == '2'">
      
        maladie
      </div>
      <div class="fs-3 fw-bold text-gray-900"
      v-if="typeconge == '3'">
      
        Sans solde
      </div>
      <div class="fs-3 fw-bold text-gray-900"
      v-if="typeconge == '4'">
      
        reliquat
      </div>
      <div class="fs-3 fw-bold text-gray-900"
      v-if="typeconge == '5'">
      
       maternité
      </div>
      <div class="fs-3 fw-bold text-gray-900"
      v-if="typeconge == '6'">
      
        paternité
      </div>
      <!--end::Name-->

      <!--begin::Description-->
      <p class="text-gray-500 fw-semibold fs-5 mt-1 mb-7">
        {{ description }}
      </p>
      <!--end::Description-->

      <!--begin::Justificatif-->
      <p class="text-gray-500 fw-semibold fs-5 mt-1 mb-7">
        <a href="lienjust" download>
          Justificatif
          <i class="fas fa-download download-icon"></i>
        </a>
      </p>
      <!--end::Justificatif-->

      <!--begin::Info-->
      <div class="d-flex flex-wrap mb-5">
        <!--begin::Due-->
        <div
          class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3"
        >
          <div class="fs-6 text-gray-800 fw-bold">{{ datedebut }}</div>
          <div class="fw-semibold text-gray-500">from</div>
        </div>
        <!--end::Due-->

        <!--begin::DateFin-->
        <div
          class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3"
        >
          <div class="fs-6 text-gray-800 fw-bold">{{ DateFin }}</div>
          <div class="fw-semibold text-gray-500">to</div>
        </div>
        <!--end::DateFin-->
      </div>
      <!--end::Info-->

      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <span
          :class="getStatusDataBadgeColor"
          class="badge fw-bold me-auto px-4 py-3"
          >{{ getStatus }}</span
        >
      </div>
      <!--end::Card toolbar-->
      <br />

      <!--begin::Progress-->
      <div
        class="h-4px w-100 bg-light mb-5"
        data-bs-toggle="tooltip"
        :title="`This project ${progress}% completed`"
      >
        <div
       
          :class="getStatusDataColor"
          class="rounded h-4px"
          role="progressbar"
          :style="{ width: progress + `%` }"
          :aria-valuenow="progress"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        
      </div>
      <!--end::Progress-->

      <br />

      <!--begin::Link-->
      <button
        class="btn btn-sm btn-light-primary fw-bold"
        data-kt-drawer-toggle="true"
        data-kt-drawer-target="#kt_drawer_chat"
        
        @click="console.log('essai'+iddemande)"
      >
        Accepter
      </button>
      <!--end::Link-->

      <!--begin::Link-->
      <button
        class="btn btn-sm btn-light-primary fw-bold"
        data-kt-drawer-toggle="true"
        data-kt-drawer-target="#kt_drawer_chat"
        @click="UpdateDemande(iddemande!,2)"
      >
        Refuser
      </button>
      <!--end::Link-->

      <!--begin::Card Title-->
      <div class="card-title m-0"></div>
      <!--end::Card Title-->
    </div>
    <!--end:: Card body-->
  </el-form>
  </a>
  <!--end::Card-->
</div>
</template>


<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { hideModal } from "@/core/helpers/modal";
import { hide } from "@popperjs/core";
import { UpdateDemande,type IDemandesChang } from "@/core/data/demande";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
  name: "card-1",
  components: {},
  props: {
    iddemande: Number,
    progress: Number,
    statusDataBadgeColor: String,
    statusDataColor: String,
    status: String,
    icon: String,
    title: String,
    description: String,
    initials: String,
    typeconge: String,
    username: String,
    datedebut: String,
    DateFin: String,
    equipe: String,
    userid: String,
    
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
      getStatus,
      getStatusDataBadgeColor,
      getStatusDataColor,
      submit,
      addCustomerModalRef,
      UpdateDemande,	
    };
  },
});
</script>
