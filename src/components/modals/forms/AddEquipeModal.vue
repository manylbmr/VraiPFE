<template>
    <div
      class="modal fade"
      id="kt_modal_add_equipe"
      ref="addEquipeModalRef"
      tabindex="-1"
      aria-hidden="true"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-650px">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div class="modal-header" id="kt_modal_add_equipe_header">
            <!--begin::Modal title-->
            <h2 class="fw-bold">Ajouter une équipe</h2>
            <!--end::Modal title-->
  
            <!--begin::Close-->
            <div
              id="kt_modal_add_equipe_close"
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
                id="kt_modal_add_equipe_scroll"
                data-kt-scroll="true"
                data-kt-scroll-activate="{default: false, lg: true}"
                data-kt-scroll-max-height="auto"
                data-kt-scroll-dependencies="#kt_modal_add_equipe_header"
                data-kt-scroll-wrappers="#kt_modal_add_equipe_scroll"
                data-kt-scroll-offset="300px"
              >
  
  
  
  <!--begin::Input group-->
  <div class="d-flex flex-column mb-7 fv-row">
                    <!--begin::Label-->
                    <label class="fs-6 fw-semibold mb-2">
                      <span class="required">chef</span>
  
                      <i
                        class="fas fa-exclamation-circle ms-1 fs-7"
                        data-bs-toggle="tooltip"
                        title="pays de naissance"
                      ></i>
                    </label>
                    <!--end::Label-->
  
                    <!--begin::Input-->
                    <el-select v-model="formData.chef">
                      <el-option value="">Choisissez un chef</el-option>
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
                      <span class="required">affilier à </span>
  
                      <i
                        class="fas fa-exclamation-circle ms-1 fs-7"
                        data-bs-toggle="tooltip"
                        title="Sexe"
                      ></i>
                    </label>
                    <!--end::Label-->
  
                    <!--begin::Input-->
                    <el-select v-model="formData.supequipe">
                      <el-option value="">Chosissez une équipe</el-option>
                      <el-option value="homme">Homme</el-option>
                      <el-option value="femme">Femme</el-option>
                      
                    </el-select>
                    <!--end::Input-->
                  </div>
                  <!--end::Input group-->
  
  
  
  
  <!--begin::Input group-->
  <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="required fs-6 fw-semibold mb-2">nom</label>
                  <!--end::Label-->
  
                  <!--begin::Input-->
                  <el-form-item prop="nom">
                    <el-input
                      v-model="formData.nom"
                      type="text"
                      placeholder=""
                    />
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
                id="kt_modal_add_equipe_cancel"
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
    
    nom: string;
    supequipe: string;
    chef: string;
  
    }
  
  
  
  export default defineComponent({
    name: "add-equipe-modal",
    components: {},
    setup() {
      const formRef = ref<null | HTMLFormElement>(null);
      const addequipeModalRef = ref<null | HTMLElement>(null);
      const loading = ref<boolean>(false);
      const formData = ref<NewformData>({
        nom: "",
        supequipe: "",
        chef: "",
  
      });
  
      const rules = ref({
       
        nom: [
          {
            required: true,
            message: "nom obligatoire",
            trigger: "change",
          },
        ],
        supequipe: [
          {
            required: false,
            message: "affilier à obligatoire",
            trigger: "change",
          },
        ],
        chef: [
          {
            required: false,
            message: "chef obligatoire",
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
                hideModal(addequipeModalRef.value);
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
        addequipeModalRef,
        getAssetPath,
        countries,
      };
    },
  });
  </script>
  