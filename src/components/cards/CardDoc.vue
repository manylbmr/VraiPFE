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
        <p class="text-white-500 fw-italic fs-5 mt-1 mb-7">
          {{ getUsername }}
        </p>
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
          <a href="path/to/your/file.zip" > télécharger
        <i class="fas fa-download download-icon"></i>
    </a>
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
  import { computed, defineComponent } from "vue";
  
  export default defineComponent({
    name: "card-1",
    components: {},
    props: {
      progress: Number,
  
      statusDataBadgeColor: String,
  
      statusDataColor: String,
  
      status: String,
  
      icon: String,
  
      title: String,
  
      description: String,
  
      Username: String,  
  
  
      users: Array as () => Array<any>,
    },
    setup(props) {
      const getDescription = computed(() => {
        return props.description
          ? props.description
          : "Besoin d'un certificat de travail pour AADL";
      });
  
      const getUsername = computed(() => {
        return props.Username
          ? props.Username
          : "Max smith";
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
        getUsername,
      
        getStatus,
        getStatusDataBadgeColor,
        getStatusDataColor,
      };
    },
  });
  </script>
  