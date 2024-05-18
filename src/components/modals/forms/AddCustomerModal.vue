<template>
  <div
    class="modal fade"
    id="kt_modal_add_customer"
    ref="addCustomerModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
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
          <div
            id="kt_modal_add_customer_close"
            data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->
        <!--begin::Form-->
        <el-form
          @submit.prevent="submit()"
          :model="formData"
          :rules="rules"
          ref="formRef"
        >
          <!--begin::Modal body-->
          <div class="modal-body py-10 px-lg-17">
            <!--begin::Scroll-->
            <div
              class="scroll-y me-n7 pe-7"
              id="kt_modal_add_customer_scroll"
              data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}"
              data-kt-scroll-max-height="auto"
              data-kt-scroll-dependencies="#kt_modal_add_customer_header"
              data-kt-scroll-wrappers="#kt_modal_add_customer_scroll"
              data-kt-scroll-offset="300px"
            >



<!--begin::Input group-->
<div class="d-flex flex-column mb-7 fv-row">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semibold mb-2">
                    <span class="required">Pays de naissance</span>

                    <i
                      class="fas fa-exclamation-circle ms-1 fs-7"
                      data-bs-toggle="tooltip"
                      title="pays de naissance"
                    ></i>
                  </label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-select v-model="formData.country">
                    <el-option value="">Choisissez un pays</el-option>
                    <el-option
                      v-for="(item, i) in countries"
                      :key="`countries-select-option-${i}`"
                      :value="item.code"
                    >
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

                    <i
                      class="fas fa-exclamation-circle ms-1 fs-7"
                      data-bs-toggle="tooltip"
                      title="Sexe"
                    ></i>
                  </label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-select v-model="formData.sexe">
                    <el-option value="">Chosissez un sexe</el-option>
                    <el-option value="homme">Homme</el-option>
                    <el-option value="femme">Femme</el-option>
                    
                  </el-select>
                  <!--end::Input-->
                </div>
                <!--end::Input group-->




                 <!--begin::Input group-->
                 <div class="d-flex flex-column mb-7 fv-row">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semibold mb-2">
                    <span>Equipe</span>

                    <i
                      class="fas fa-exclamation-circle ms-1 fs-7"
                      data-bs-toggle="tooltip"
                      title=" Equipe"
                    ></i>
                  </label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-select v-model="formData.equipe">
                  
                    <el-option
                      v-for="(item, i) in countries"
                      :key="`countries-select-option-${i}`"
                      :value="item.code"
                    >
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
                    <span class="required">Poste</span>

                    <i
                      class="fas fa-exclamation-circle ms-1 fs-7"
                      data-bs-toggle="tooltip"
                      title="Poste"
                    ></i>
                  </label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-select v-model="formData.poste">
                    <el-option value="">Choisissez un poste</el-option>
                    <el-option
                      v-for="(item, i) in countries"
                      :key="`countries-select-option-${i}`"
                      :value="item.code"
                    >
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
                    <span class="required">Situation Familiale</span>

                    <i
                      class="fas fa-exclamation-circle ms-1 fs-7"
                      data-bs-toggle="tooltip"
                      title="Situation Familiale"
                    ></i>
                  </label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-select v-model="formData.sf">
                    <el-option value="">Choisissez une situation Familiale</el-option>
                    <el-option value="Marié"> Marié</el-option>
                    <el-option value="Célibataire"> Célibataire </el-option>
                    <el-option value="Divorcé"> Divorcé </el-option>
                    <el-option value="Veuf"> Veuf </el-option>

                  </el-select>
                  <!--end::Input-->
                </div>
                <!--end::Input group-->
               


                  <!--begin::Input group-->
                  <div class="d-flex flex-column mb-7 fv-row">
                    <!--begin::Label-->
                    <label class="fs-6 fw-semibold mb-2">
                      <span class="required">Nombre d'enfants</span>
  
                      <i
                        class="fas fa-exclamation-circle ms-1 fs-7"
                        data-bs-toggle="tooltip"
                        title="Nombre d'enfants"
                      ></i>
                    </label>
                    <!--end::Label-->
  
                    <!--begin::Input-->
                    <el-select v-model="formData.ne">
                      <el-option value="">Choisissez le nombre d'enfants</el-option>
                      <el-option value="0"> 0 </el-option>
                      <el-option value="1"> 1 </el-option>
                      <el-option value="2"> 2 </el-option>
                      <el-option value="3"> 3 </el-option>
                      <el-option value="4"> 4 </el-option>
                      <el-option value="5"> 5 </el-option>
                      <el-option value="6"> 6 </el-option>
                      <el-option value="7"> 7 </el-option>
                      <el-option value="8"> 8 </el-option>
                      <el-option value="9"> 9 </el-option>
                      <el-option value="10"> 10 </el-option>
                      <el-option value="11"> 11 </el-option>
                      <el-option value="12"> 12 </el-option>
                    </el-select>
                    <!--end::Input-->
                  </div>
                <!--end::Input group-->





              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">Nom</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="name">
                  <el-input
                    v-model="formData.name"
                    type="text"
                    placeholder=""
                  />
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
                  <el-input
                    v-model="formData.prenom"
                    type="text"
                    placeholder=""
                  />
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
                <el-form-item prop="nameAr">
                  <el-input
                    v-model="formData.nameAr"
                    type="text"
                    placeholder=""
                  />
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
                  <el-input
                    v-model="formData.prenomAr"
                    type="text"
                    placeholder=""
                  />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->



              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">Nom de jeune fill</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="ndjf">
                  <el-input
                    v-model="formData.ndjf"
                    type="text"
                    placeholder=""
                  />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->



              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semibold mb-2">Nom de jeune fille arabe</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="ndjfAr">
                  <el-input
                    v-model="formData.ndjfAr"
                    type="text"
                    placeholder=""
                  />
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
                  <el-input
                    v-model="formData.ddn"
                    type="date"
                    placeholder=""
                  />
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
                  <el-input
                    v-model="formData.ldn"
                    type="text"
                    placeholder=""
                  />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->


              







              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-semibold mb-2">
                  <span class="required">Telephone</span>

                  <i
                    class="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="Telephone doit etre actif"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="tel">
                  <el-input v-model="formData.tel" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->



                <!--begin::Input group-->
                <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-semibold mb-2">
                  <span class="required">Email</span>

                  <i
                    class="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="Email address must be active"
                  ></i>
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
                  <span class="required">Mot de passe à affecter (pourra etre changé par l'employé)</span>

                  <i
                    class="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="au moins 8 caracteres"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="mdp">
                  <el-input v-model="formData.mdp" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->





                <!--begin::Input group-->
                <div class="d-flex flex-column mb-7 fv-row">
                  <!--begin::Label-->
                  <label class="required fs-6 fw-semibold mb-2"
                    >Addresse</label
                  >
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-form-item prop="addresse">
                    <el-input v-model="formData.addresse" />
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
            <button
              type="reset"
              id="kt_modal_add_customer_cancel"
              class="btn btn-light me-3"
            >
              Discard
            </button>
            <!--end::Button-->

            <!--begin::Button-->
            <button
              :data-kt-indicator="loading ? 'on' : null"
              class="btn btn-lg btn-primary"
              type="submit"
            >
              <span v-if="!loading" class="indicator-label">
                Submit
                <KTIcon icon-name="arrow-right" icon-class="fs-2 me-2 me-0" />
              </span>
              <span v-if="loading" class="indicator-progress">
                Please wait...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
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


interface NewformData {
  name: string;
  prenom: string;
  nameAr: string;
  prenomAr: string;
  ndjf: string;
  ndjfAr: string;
  ddn:Date;
  ldn: string;
  country: string;
  sexe: string;
  equipe: string;
  poste: string;
  sf: string;
  ne: string;
  tel: string;
  email: string;
  mdp: string;
  addresse: string;

  }



export default defineComponent({
  name: "add-customer-modal",
  components: {},
  setup() {
    const formRef = ref<null | HTMLFormElement>(null);
    const addCustomerModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    const formData = ref<NewformData>({
      name: "",
      prenom: "",
      nameAr: "",
      prenomAr: "",
      ndjf: "",
      ndjfAr: "",
      ddn: new Date(),
      ldn: "",
      country: "",
      sexe: "",
      equipe: "",
      poste: "",
      sf: "",
      ne: "",
      tel: "",
      email: "",
      mdp: "",
      addresse: "",

    });

    const rules = ref({
      name: [
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
      nameAr: [
        {
          required: true,
          message: "Nom Arabe obligatoire",
          trigger: "change",
        },
      ],
      prenomAr: [
        {
          required: true,
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
          required: true,
          message: "Date de naissance obligatoire",
          trigger: "change",
        },
      ],
      ldn: [
        {
          required: true,
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
      poste: [
        {
          required: true,
          message: "Poste obligatoire",
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
          required: true,
          message: "Nombre d'enfants obligatoire",
          trigger: "change",
        },
      ],
      tel: [
        {
          required: true,
          message: "Telephone obligatoire",
          trigger: "change",
        },
      ],
      mdp: [
        {
          required: true,
          message: "Mot de passe obligatoire",
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
        if (valid) {
          loading.value = true;

          setTimeout(() => {
            loading.value = false;

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
});
</script>
