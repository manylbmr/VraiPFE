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
        {{ getDescription }}
      </p>
      <!--end::Description-->

      <!--begin::Info-->
      <div class="d-flex flex-wrap mb-5">
        <!--begin::Due-->
        <div
          class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3"
        >
          <div class="fs-6 text-gray-800 fw-bold">{{ getDate }}</div>
          <div class="fw-semibold text-gray-500">from</div>
        </div>
        <!--end::Due-->

        <!--begin::DateFin-->
        <div
          class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3"
        >
          <div class="fs-6 text-gray-800 fw-bold">{{ getDateFin }}</div>
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
      <br>
      

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


      <br>
     

<!--begin::Link-->
<button
          class="btn btn-sm btn-light-primary fw-bold"
          data-kt-drawer-toggle="true"
          data-kt-drawer-target="#kt_drawer_chat"
          @click="openDrawer()"
        >
         Accept
        </button>
        <!--end::Link-->

        <!--begin::Link-->
        <button
          class="btn btn-sm btn-light-primary fw-bold"
          data-kt-drawer-toggle="true"
          data-kt-drawer-target="#kt_drawer_chat"
          @click="openDrawer()"
        >
          Deny
        </button>
        <!--end::Link-->

        <!--begin::Link-->
        <button
          class="btn btn-sm btn-light-primary fw-bold"
          data-kt-drawer-toggle="true"
          data-kt-drawer-target="#kt_drawer_chat"
          @click="openDrawer()"
        >
         Annuler
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

    datedebut: String,

    DateFin: String,

    users: Array as () => Array<any>,
  },
  setup(props) {
    const getDescription = computed(() => {
      return props.description
        ? props.description
        : "Pour mariage d'un proche";
    });

    const getUsername = computed(() => {
      return props.Username
        ? props.Username
        : "Lebron James";
    });

    const getDate = computed(() => {
      return props.date ? props.date : "Feb 21, 2021";
    });

    const getDateFin = computed(() => {
      return props.DateFin ? props.DateFin : "Feb 25, 2021";
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
      getDate,
      getDateFin,
      getStatus,
      getStatusDataBadgeColor,
      getStatusDataColor,
    };
  },
});
</script>
