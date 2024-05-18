<template>
  <!--begin::Col-->
  <div class="col-md-6 col-xxl-4">
    <!--begin::Card-->
    <div class="card" :class="cardClasses">
      <!--begin::Card body-->
      <div class="card-body d-flex flex-center flex-column p-9">
        <!--begin::Avatar-->
        <div v-if="avatar" class="symbol symbol-65px symbol-circle mb-5">
          <img :src="avatar" alt="image" />
          <div
            v-if="Present"
            class="bg-success position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-white h-15px w-15px ms-n3 mt-n3"
          ></div>
        </div>
        <div v-else class="symbol symbol-65px symbol-circle mb-5">
          <span
            :class="`text-${color} bg-light-${color}`"
            class="symbol-label fs-2x fw-semibold"
            >{{ initials }}</span
          >
          <div
            v-if="Present"
            class="bg-success position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-white h-15px w-15px ms-n3 mt-n3"
          ></div>
        </div>
        <!--end::Avatar-->

        <!--begin::Name-->
        <a
          href="#"
          class="fs-4 text-gray-800 text-hover-primary fw-bold mb-0"
          >{{ name }}</a
        >
        <!--end::Name-->

        <!--begin::Position-->
        <div class="fw-semibold text-gray-400 mb-6">{{ position }}</div>
        <!--end::Position-->

        <!--begin::Info-->
        <div class="d-flex flex-center flex-wrap mb-5">
          
        </div>
        <!--end::Info-->

        <!--begin::Follow-->
       
        <!--end::Follow-->
         <!--begin::Link-->
         <button
          class="btn btn-sm btn-light-primary fw-bold"
          data-kt-drawer-toggle="true"
          data-kt-drawer-target="#kt_drawer_chat"
          @click="openDrawer()"
        >
          Send Message
        </button>
        <!--end::Link-->
       
        <!--end::Follow-->
      </div>
      <!--begin::Card body-->
    </div>
    <!--begin::Card-->
  </div>
  <!--end::Col-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import { boolean } from "yup";
import { DrawerComponent } from "@/assets/ts/components/_DrawerComponent";


export default defineComponent({
  name: "card-3",
  components: {},
  props: {
    cardClasses: String,

    avatar: String,

    initials: String,

    Present: Boolean,

    color: String,

    name: String,

    position: String,

    present: Boolean,
  },
  setup() {
    const openDrawer = () => {
      DrawerComponent?.getInstance("kt_drawer_chat")?.toggle();
    };
    return {
      getAssetPath, openDrawer,
    };
    
  },

  


});
</script>
