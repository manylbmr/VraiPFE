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
          <span class="fw-bold fs-6 text-gray-900" v-if="!loading">{{ accountData.matricule }}</span>
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
            {{ accountData.nom + " " + accountData.prenom + " " + (accountData.prenom2 != null ? accountData.prenom2 : "")}}
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
          <span class="fw-bold fs-6 text-gray-900" v-if="!loading">{{ accountData.nomArabe + ' ' +
            accountData.prenomArabe + " " + ((accountData.prenom2Arabe != null)? accountData.prenom2Arabe : "") }}</span>
        </div>
        <!--end::Col-->
      </div>

      <div class="row mb-7" v-if="!loading && accountData.nomJeunefille != null">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semibold text-muted"> maiden name</label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-gray-900">/</span>
        </div>
        <!--end::Col-->
      </div>

      <div class="row mb-7" v-if="!loading && accountData.nomJeunefilleArabe != null">
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
          <span class="fw-bold fs-6 text-gray-900" v-if="!loading">{{ accountData.dateNaissance }}</span>
        </div>
        <!--end::Col-->
      </div>

      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semibold text-muted">Birth Place</label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-gray-900" v-if="!loading">{{ accountData.lieuNaissance + ', ' + accountData.communeNaissance + ", " + accountData.wilayaNaissance }}</span>
        </div>
        <!--end::Col-->
      </div>

      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semibold text-muted">Birth country </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-gray-900" v-if="!loading">{{ accountData.paysNaissance }}</span>
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

      <div class="row mb-7" v-if="!loading && accountData.nbEnfant != null">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semibold text-muted">Children Number</label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-gray-900">{{ accountData.nbEnfant }}</span>
        </div>
        <!--end::Col-->
      </div>

      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semibold text-muted">Nationalities</label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-gray-900" v-if="!loading">{{ accountData.nationalites }}</span>
        </div>
        <!--end::Col-->
      </div>

      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semibold text-muted">Reliquat </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-gray-900" v-if="!loading">{{ accountData.reliquat }} Jours</span>
        </div>
        <!--end::Col-->
      </div>

      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semibold text-muted">Entry Date</label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-gray-900" v-if="!loading">{{ accountData.dateEntre }}</span>
        </div>
        <!--end::Col-->
      </div>
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
// import ApiService from "@/core/services/ApiService";
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

    //the json data structure
    //     {
    //     "matricule": "555",
    //     "nss": "123456",
    //     "nom": "LEMMOUCHI",
    //     "prenom": "Abdou",
    //     "prenom2": null,
    //     "nomArabe": "لموشي",
    //     "prenomArabe": "عبدالرحمن",
    //     "prenom2Arabe": null,
    //     "dateNaissance": "2002-10-27",
    //     "nomJeuneFille": null,
    //     "nomJeuneFilleArabe": null,
    //     "lieuNaissance": "BEK",
    //     "paysNaissance": "DZ",
    //     "wilayaNaissance": "Alger",
    //     "communeNaissance": "BEK",
    //     "sexe": 0,
    //     "titre": 0,
    //     "situationFamiliale": 0,
    //     "nationalites": "DZ",
    //     "linkToPhoto": "",
    //     "reliquat": 10,
    //     "isResponsable": true,
    //     "idEquipe": 12,
    //     "idResponsable": null,
    //     "dateEntre": "0001-01-01",
    //     "dateSortie": null,
    //     "nbAnneeExperienceInterne": 5,
    //     "nbAnneeExperienceExterne": 5,
    //     "nbEnfant": null,
    //     "email": "abdou@gmail.com"
    // }

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
