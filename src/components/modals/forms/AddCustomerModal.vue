<!-- <template> -->
<template>
  <div class="modal fade" id="kt_modal_add_customer" ref="addCustomerModalRef" tabindex="-1" aria-hidden="true">
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_add_customer_header">
          <!--begin::Modal title-->
          <h2 class="fw-bold">Ajouter un employé</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div id="kt_modal_add_customer_close" data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary">
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->
        <!--begin::Form-->
        <el-form @submit.prevent="submit()" :model="formData" :rules="rules" ref="formRef">
          <!--begin::Modal body-->
          <div class="modal-body py-10 px-lg-17">
            <!--begin::Scroll-->
            <div class="scroll-y me-n7 pe-7" id="kt_modal_add_customer_scroll" data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto"
              data-kt-scroll-dependencies="#kt_modal_add_customer_header"
              data-kt-scroll-wrappers="#kt_modal_add_customer_scroll" data-kt-scroll-offset="300px">

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">Matricule</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="mat">
                  <el-input v-model="formData.matricule" type="text" placeholder="" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">Numero de securité social</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="nss">
                  <el-input v-model="formData.nss" type="number" placeholder="" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->
              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">Nom</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="nom">
                  <el-input v-model="formData.nom" type="text" placeholder="" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">Prénom</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="prenom">
                  <el-input v-model="formData.prenom" type="text" placeholder="" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-semibold mb-2">Prénom 2</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="prenom2">
                  <el-input v-model="formData.prenom2" type="text" placeholder="" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">Nom Arabe</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="nomAr">
                  <el-input v-model="formData.nomArabe" type="text" placeholder="" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">Prénom Arabe</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="prenomAr">
                  <el-input v-model="formData.prenomArabe" type="text" placeholder="" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-semibold mb-2">Prénom Arabe 2</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="prenomAr2">
                  <el-input v-model="formData.prenom2Arabe" type="text" placeholder="" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-semibold mb-2">Nom de jeune fille</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="ndjf">
                  <el-input v-model="formData.nomJeuneFille" type="text" placeholder="" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-semibold mb-2">Nom de jeune fille arabe</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="ndjfAr">
                  <el-input v-model="formData.nomJeuneFilleArabe" type="text" placeholder="" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">Date de Naissance</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="ddn">
                  <el-input v-model="formData.dateNaissance" type="date" placeholder="" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">Lieu de Naissance</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="ldn">
                  <el-input v-model="formData.lieuNaissance" type="text" placeholder="" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="d-flex flex-column mb-7 fv-row">
                <!--begin::Label-->
                <label class="fs-6 fw-semibold mb-2">
                  <span class="required">Pays de naissance</span>
                  <!-- <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="pays de naissance"></i> -->
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-select v-model="formData.paysNaissance">
                  <el-option v-for="(item, i) in countries" :key="`countries-select-option-${i}`" :value="item.code">
                    {{ item.name }}
                  </el-option>
                </el-select>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="d-flex flex-column mb-7 fv-row">
                <!--begin::Label-->
                <label class="fs-6 fw-semibold mb-2">
                  <span class="required">Sexe</span>
                  <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Sexe"></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-select v-model="formData.sexe">
                  <el-option value="">Choisissez un sexe</el-option>
                  <el-option value=0>Homme</el-option>
                  <el-option value=1>Femme</el-option>
                </el-select>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="d-flex flex-column mb-7 fv-row">
                <!--begin::Label-->
                <label class="fs-6 fw-semibold mb-2">
                  <span>Equipe</span>
                  <!-- <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title=" Equipe"></i> -->
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-select v-model="formData.idEquipe">
                  <el-option value="">Choisissez une équipe</el-option>
                  <el-option value="Equipe A">Equipe A</el-option>
                  <el-option value="Equipe B">Equipe B</el-option>
                  <el-option value="Equipe C">Equipe C</el-option>
                </el-select>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <!-- <div class="d-flex flex-column mb-7 fv-row"> -->
              <!--begin::Label-->
              <!-- <label class="fs-6 fw-semibold mb-2">
                    <span class="required">Poste</span>
                    <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Poste"></i>
                  </label> -->
              <!--end::Label-->

              <!--begin::Input-->
              <!-- <el-select v-model="formData.poste">
                    <el-option value="">Choisissez un poste</el-option>
                    <el-option value="Poste A">Poste A</el-option>
                    <el-option value="Poste B">Poste B</el-option>
                    <el-option value="Poste C">Poste C</el-option>
                  </el-select> -->
              <!--end::Input-->
              <!-- </div> -->
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="d-flex flex-column mb-7 fv-row">
                <!--begin::Label-->
                <label class="fs-6 fw-semibold mb-2">
                  <span class="required">Situation Familiale</span>
                  <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip"
                    title="Situation Familiale"></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-select v-model="formData.situationFamiliale">
                  <el-option value="">Choisissez une situation familiale</el-option>
                  <el-option value="Marié">Marié</el-option>
                  <el-option value="Célibataire">Célibataire</el-option>
                  <el-option value="Divorcé">Divorcé</el-option>
                  <el-option value="Veuf">Veuf</el-option>
                </el-select>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="d-flex flex-column mb-7 fv-row">
                <!--begin::Label-->
                <label class="fs-6 fw-semibold mb-2">
                  <span>Nombre d'enfants</span>
                  <!-- <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Nombre d'enfants"></i> -->
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-input v-model="formData.nbEnfant" type="number" placeholder="Nombre d'enfants" />
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <!-- <div class="fv-row mb-7"> -->
              <!--begin::Label-->
              <!-- <label class="fs-6 fw-semibold mb-2">
                    <span class="required">Telephone</span>
                    <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Telephone doit etre actif"></i>
                  </label> -->
              <!--end::Label-->

              <!--begin::Input-->
              <!-- <el-form-item prop="tel">
                    <el-input v-model="formData.tel" />
                  </el-form-item> -->
              <!--end::Input-->
              <!-- </div> -->
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-semibold mb-2">
                  <span class="required">Email</span>
                  <!-- <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip"
                    title="Email address must be active"></i> -->
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="email">
                  <el-input v-model="formData.email" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-semibold mb-2">
                  <span class="required">Mot de passe à affecter (pourra être changé par l'employé)</span>
                  <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip"
                    title="au moins 8 caracteres"></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="password">
                  <el-input v-model="formData.password" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="d-flex flex-column mb-7 fv-row">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">Role</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="role">
                  <el-select v-model="formData.role">
                    <el-option value="">Choisissez un rôle</el-option>
                    <el-option value="RH">RH</el-option>
                    <el-option value="Responsable">Responsable</el-option>
                    <el-option value="User">User</el-option>
                  </el-select>
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

            </div>
            <!--end::Scroll-->
          </div>
          <!--end::Modal body-->

          <!--begin::Modal footer-->
          <div class="modal-footer flex-center">
            <!--begin::Button-->
            <button type="reset" id="kt_modal_add_customer_cancel" class="btn btn-light me-3">
              Discard
            </button>
            <!--end::Button-->

            <!--begin::Button-->
            <button :data-kt-indicator="loading ? 'on' : null" class="btn btn-lg btn-primary" type="submit">
              <span v-if="!loading" class="indicator-label">
                Submit
                <KTIcon icon-name="arrow-right" icon-class="fs-2 me-2 me-0" />
              </span>
              <span v-if="loading" class="indicator-progress">
                Please wait...
                <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
              </span>
            </button>
            <!--end::Button-->
          </div>
          <!--end::Modal footer-->
        </el-form>
        <!--end::Form-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref } from "vue";
import { hideModal } from "@/core/helpers/modal";
import { countries } from "@/core/data/countries";
import Swal from "sweetalert2/dist/sweetalert2.js";
import ApiService from "@/core/services/ApiService";

//data example
//         "matricule": "555",
//         "nss": "123456",
//         "nom": "LEMMOUCHI",
//         "prenom": "Abdou",
//         "prenom2": null,
//         "nomArabe": "لموشي",
//         "prenomArabe": "عبدالرحمن",
//         "prenom2Arabe": null,
//         "dateNaissance": "2002-10-27",
//         "nomJeuneFille": null,
//         "nomJeuneFilleArabe": null,
//         "lieuNaissance": "BEK",
//         "paysNaissance": "DZ",
//         "wilayaNaissance": "Alger",
//         "communeNaissance": "BEK",
//         "sexe": 0,
//         "titre": 0,
//         "situationFamiliale": 0,
//         "nationalites": "DZ",
//         "linkToPhoto": "",
//         "reliquat": 10,
//         "isResponsable": true,
//         "idEquipe": 12,
//         "idResponsable": null,
//         "dateEntre": "0001-01-01",
//         "dateSortie": null,
//         "nbAnneeExperienceInterne": 5,
//         "nbAnneeExperienceExterne": 5,
//         "nbEnfant": null,
//         "email": "abdou@gmail.com",
//         "score": 0

interface NewformData {
  matricule: string;
  nss: string;
  nom: string;
  prenom: string;
  prenom2: string | null;
  nomArabe: string;
  prenomArabe: string;
  prenom2Arabe: string | null;
  dateNaissance: string;
  nomJeuneFille: string | null;
  nomJeuneFilleArabe: string | null;
  lieuNaissance: string;
  paysNaissance: string;
  wilayaNaissance: string;
  communeNaissance: string;
  sexe: string;
  titre: number;
  situationFamiliale: number;
  nationalites: string;
  linkToPhoto: string;
  reliquat: number;
  isResponsable: boolean;
  idEquipe: number;
  idResponsable: number | null;
  dateEntre: string;
  dateSortie: string | null;
  nbAnneeExperienceInterne: number;
  nbAnneeExperienceExterne: number;
  nbEnfant: number | null;
  email: string;
  score: number;
  password: string;
  role: string;
}

export default defineComponent({
  name: "add-customer-modal",
  components: {},
  setup() {
    const formRef = ref<null | HTMLFormElement>(null);
    const addCustomerModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    const formData = ref<NewformData>({
      matricule: "",
      nss: "",
      nom: "",
      prenom: "",
      prenom2: null,
      nomArabe: "",
      prenomArabe: "",
      prenom2Arabe: null,
      dateNaissance: "",
      nomJeuneFille: null,
      nomJeuneFilleArabe: null,
      lieuNaissance: "",
      paysNaissance: "",
      wilayaNaissance: "",
      communeNaissance: "",
      sexe: "0",
      titre: 0,
      situationFamiliale: 0,
      nationalites: "",
      linkToPhoto: "",
      reliquat: 0,
      isResponsable: true,
      idEquipe: 0,
      idResponsable: null,
      dateEntre: "",
      dateSortie: null,
      nbAnneeExperienceInterne: 0,
      nbAnneeExperienceExterne: 0,
      nbEnfant: null,
      email: "",
      score: 0,
      password: "",
      role: "",
    });

    const rules = ref({
      matricule: [
        {
          required: true,
          message: "Matricule obligatoire",
          trigger: "change",
        },
      ],
      nss: [
        {
          required: true,
          message: "NSS obligatoire",
          trigger: "change",
        },
      ],
      nom: [
        {
          required: true,
          message: "Nom obligatoire",
          trigger: "change",
        },
      ],
      prenom: [
        {
          required: true,
          message: "Prenom obligatoire",
          trigger: "change",
        },
      ],
      nomAr: [
        {
          // required: true,
          message: "Nom Arabe obligatoire",
          trigger: "change",
        },
      ],
      prenomAr: [
        {
          // required: true,
          message: "Prenom Arabe obligatoire",
          trigger: "change",
        },
      ],
      ndjf: [
        {
          required: false,
          message: "Nom de jeune fille obligatoire",
          trigger: "change",
        },
      ],
      ndjfAr: [
        {
          required: false,
          message: "Nom de jeune fille Arabe obligatoire",
          trigger: "change",
        },
      ],
      ddn: [
        {
          // required: true,
          message: "Date de naissance obligatoire",
          trigger: "change",
        },
      ],
      ldn: [
        {
          // required: true,
          message: "Lieu de naissance obligatoire",
          trigger: "change",
        },
      ],
      country: [
        {
          required: true,
          message: "Pays de naissance obligatoire",
          trigger: "change",
        },
      ],
      sexe: [
        {
          required: true,
          message: "Sexe obligatoire",
          trigger: "change",
        },
      ],
      equipe: [
        {
          required: false,
          message: "Equipe obligatoire",
          trigger: "change",
        },
      ],
      role: [
        {
          required: true,
          message: "Role obligatoire",
          trigger: "change",
        },
      ],
      sf: [
        {
          required: true,
          message: "Situation Familiale obligatoire",
          trigger: "change",
        },
      ],
      ne: [
        {
          required: false,
          message: "Nombre d'enfants obligatoire",
          trigger: "change",
        },
      ],
      // tel: [
      //   {
      //     required: true,
      //     message: "Telephone obligatoire",
      //     trigger: "change",
      //   },
      // ],
      password: [
        {
          required: true,
          message: "Mot de passe obligatoire",
          trigger: "change",
        },
        {
          validator: (rule, value, callback) => {
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordRegex.test(value)) {
              callback(new Error('Password must have at least 8 chars, 1 uppercase, 1 lowercase, 1 number and 1 special char'));
            } else {
              callback();
            }
          },
          trigger: "change",
        },
      ],

      email: [
        {
          required: true,
          message: "Customer email is required",
          trigger: "change",
        },
      ],
      addresse: [
        {
          required: true,
          message: "Addresse obligatoire",
          trigger: "change",
        },
      ],

    });

    const submit = () => {
      if (!formRef.value) {
        return;
      }

      formRef.value.validate((valid: boolean) => {
        console.log(formData.value.nss);
        if (valid) {
          loading.value = true;

          setTimeout(() => {
            loading.value = false;
            const testData = {
              "Matricule": formData.value.matricule,
              "NSS": formData.value.nss,
              "Nom": formData.value.nom,
              "Prenom": formData.value.prenom,
              "Prenom2": formData.value.prenom2,
              "NomArabe": formData.value.nomArabe,
              "PrenomArabe": formData.value.prenomArabe,
              "Prenom2Arabe": formData.value.prenom2Arabe,
              "DateNaissance": formData.value.dateNaissance,
              "NomJeuneFille": formData.value.nomJeuneFille,
              "NomJeuneFilleArabe": formData.value.nomJeuneFilleArabe,
              "LieuNaissance": formData.value.lieuNaissance,
              "PaysNaissance": formData.value.paysNaissance,
              "WilayaNaissance": formData.value.wilayaNaissance,
              "CommuneNaissance": formData.value.communeNaissance,
                "Sexe": parseInt(formData.value.sexe),
              "Titre": 0,
              "SituationFamiliale": formData.value.situationFamiliale,
              "Nationalites": "",
              "LinkToPhoto": "",
              "Reliquat": 1,
              "IsResponsable": false,
              "IDEquipe": 1,
              "IDResponsable": "1",
              "DateEntre": "2024-10-10",
              "DateSortie": "2024-10-11",
              "NbAnneeExperienceerne": 1,
              "NbAnneeExperienceExterne": 1,
              "NbEnfant": 1,
              "Email": formData.value.email,
              "password": formData.value.password,
              "role": formData.value.role
            }
            // { matricule: "1231321",
            //               nss: formData.value.nss,
            //               nom: formData.value.nom,
            //               prenom: formData.value.prenom,
            //               prenom2: formData.value.prenom2,
            //               nomArabe: formData.value.nomArabe,
            //               prenomArabe: formData.value.prenomArabe,
            //               prenom2Arabe: formData.value.prenom2Arabe,
            //               dateNaissance: formData.value.dateNaissance,
            //               nomJeuneFille: formData.value.nomJeuneFille,
            //               nomJeuneFilleArabe: formData.value.nomJeuneFilleArabe,
            //               lieuNaissance: "321321",//formData.value.lieuNaissance,
            //               paysNaissance: formData.value.paysNaissance,
            //               wilayaNaissance: formData.value.wilayaNaissance,
            //               communeNaissance: formData.value.communeNaissance,
            //               sexe: 0,//formData.value.sexe,
            //               titre: 0,//formData.value.titre,
            //               situationFamiliale: 0,// formData.value.situationFamiliale,
            //               nationalites: formData.value.nationalites,
            //               linkToPhoto: formData.value.linkToPhoto,
            //               reliquat: formData.value.reliquat,
            //               isResponsable: formData.value.isResponsable,
            //               idEquipe: formData.value.idEquipe,
            //               idResponsable: formData.value.idResponsable,
            //               dateEntre: formData.value.dateEntre,
            //               dateSortie: "2024-10-10",
            //     "DateSortie": "2024-10-11",//formData.value.dateSortie,
            //               nbAnneeExperienceInterne: formData.value.nbAnneeExperienceInterne,
            //               nbAnneeExperienceExterne: formData.value.nbAnneeExperienceExterne,
            //               nbEnfant: formData.value.nbEnfant,
            //               email: formData.value.email,
            //               score: formData.value.score,
            //               password: formData.value.password,
            //               role: formData.value.role};

            ApiService.setHeader();
            ApiService.post("Employee/InsertJSON",
              testData
            );

            Swal.fire({
              text: "Form has been successfully submitted!",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok, got it!",
              heightAuto: false,
              customClass: {
                confirmButton: "btn btn-primary",
              },
            }).then(() => {
              hideModal(addCustomerModalRef.value);
            });
          }, 2000);
        } else {
          Swal.fire({
            text: "Sorry, looks like there are some errors detected, please try again.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            heightAuto: false,
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
          return false;
        }
      });
    };

    return {
      formData,
      rules,
      submit,
      formRef,
      loading,
      addCustomerModalRef,
      getAssetPath,
      countries,
    };
  },
  // methods: {
  //   validatePassword(rule, value, callback) {
  //     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  //     if (!passwordRegex.test(value)) {
  //       callback(new Error('Password must have at least 8 chars, 1 uppercase, 1 lowercase, 1 number and 1 special char'));
  //     } else {
  //       callback();
  //     }
  //   },
  //   // other methods...
  // },
});
</script>
