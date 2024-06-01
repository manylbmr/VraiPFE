<template>
  <!--begin::details View-->
  <div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
    <!--begin::Card header-->
    <div class="card-header cursor-pointer">
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bold m-0">Profile Details</h3>
      </div>
      <!--end::Card title-->

      <!--begin::Action-->
      <router-link to="settings" class="btn btn-primary align-self-center">Edit Profile</router-link>
      <!--end::Action-->
    </div>
    <!--begin::Card header-->



    <!--begin::Card body-->
    <div class="card-body p-9">

      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semibold text-muted">Code </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-gray-900">MS23DD1</span>
        </div>
        <!--end::Col-->
      </div>

      <!--begin::Row-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semibold text-muted">Full Name </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-gray-900" v-if="!loading">
            {{ accountData.nom != null ? accountData.nom + " " + accountData.prenom : 'Max Smith'}}
          </span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Row-->

      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semibold text-muted">Full Name Arabic </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-gray-900" v-if="!loading">ماكس سميث</span>
        </div>
        <!--end::Col-->
      </div>

      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semibold text-muted"> maiden name</label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-gray-900">/</span>
        </div>
        <!--end::Col-->
      </div>

      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semibold text-muted"> maiden name arabic</label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-gray-900">/</span>
        </div>
        <!--end::Col-->
      </div>

      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semibold text-muted">Birth Date </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-gray-900">24/12/2003</span>
        </div>
        <!--end::Col-->
      </div>

      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semibold text-muted">Birth Place</label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-gray-900">EL Biar</span>
        </div>
        <!--end::Col-->
      </div>

      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semibold text-muted">Birth country </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-gray-900">Algeria</span>
        </div>
        <!--end::Col-->
      </div>

      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semibold text-muted">Gender </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-gray-900">Male</span>
        </div>
        <!--end::Col-->
      </div>

      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semibold text-muted">Team</label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8 fv-row">
          <span class="fw-semibold fs-6">developpement departement</span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->

      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semibold text-muted">Position</label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-gray-900">Team Responsible</span>
        </div>
        <!--end::Col-->
      </div>

      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semibold text-muted">Family situation </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-gray-900">Married</span>
        </div>
        <!--end::Col-->
      </div>

      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semibold text-muted">Children Number</label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-gray-900">2</span>
        </div>
        <!--end::Col-->
      </div>

      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semibold text-muted">Nationalities</label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-gray-900">Algerian, French</span>
        </div>
        <!--end::Col-->
      </div>

      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semibold text-muted">
          Contact Phone
          <i class="fas fa-exclamation-circle ms-1 fs-7" v-tooltip title="Phone number must be active"></i>
        </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8 d-flex align-items-center">
          <span class="fw-bold fs-6 me-2">044 3276 454 935</span>

          <span class="badge badge-success">Verified</span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->

      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semibold text-muted">Reliquat </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-gray-900">25 days</span>
        </div>
        <!--end::Col-->
      </div>

      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semibold text-muted">Entry Date</label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-gray-900">21/05/2023</span>
        </div>
        <!--end::Col-->
      </div>

      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semibold text-muted">Communication</label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-gray-900">Email, Phone</span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->



    </div>
    <!--end::Card body-->
  </div>
  <!--end::details View-->

  <!--begin::Row-->

  <!--end::Row-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted, readonly, ref } from "vue";
import KTChartWidget1 from "@/components/widgets/charts/Widget1.vue";
import KTListWidget5 from "@/components/widgets/lists/Widget5.vue";
import KTTableWidget5 from "@/components/widgets/tables/Widget5.vue";
import KTListWidget1 from "@/components/widgets/lists/Widget1.vue";
import ApiService from "@/core/services/ApiService";
import { fetchMe } from "@/core/data/employee";

export default defineComponent({
  name: "account-overview",
  components: {
    KTChartWidget1,
    KTListWidget5,
    KTTableWidget5,
    KTListWidget1,
  },
  setup() {
    let accountData: any;
    let loading = ref(true);
    // onMounted(async () => {
    //   const response = await fetchMe();
    //   accountData.value = response;
    //   console.log(response);
    // });

    return {
      accountData,
      getAssetPath,
      loading,
    };
  },
  mounted() {
      this.fetchMe();
  },
  methods: {
    async fetchMe() {
      const response = await fetchMe();
      console.log(response);
      this.accountData = response;
      this.loading = false;
    },
  },
});
</script>
