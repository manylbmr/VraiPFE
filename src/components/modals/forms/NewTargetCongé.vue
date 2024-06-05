<template>
    <!--begin::Modal - New Target-->
    <div
      class="modal fade"
      id="kt_modal_new_target_congé"
      ref="newTargetModalRef"
      tabindex="-1"
      aria-hidden="true"
    >
      <!--begin::Modal dialog-->
      <div class="modal-dialog modal-dialog-centered mw-650px">
        <!--begin::Modal content-->
        <div class="modal-content rounded">
          <!--begin::Modal header-->
          <div class="modal-header pb-0 border-0 justify-content-end">
            <!--begin::Close-->
            <div
              class="btn btn-sm btn-icon btn-active-color-primary"
              data-bs-dismiss="modal"
            >
              <KTIcon icon-name="cross" icon-class="fs-1" />
            </div>
            <!--end::Close-->
          </div>
          <!--begin::Modal header-->
  
          <!--begin::Modal body-->
          <div class="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">
            <!--begin:Form-->
            <el-form
              id="kt_modal_new_target_form"
              @submit.prevent="submit()"
              :model="targetData"
              :rules="rules"
              ref="formRef"
              class="form"
            >
              <!--begin::Heading-->
              <div class="mb-13 text-center">
                <!--begin::Title-->
                <h1 class="mb-3">Demande de congé</h1>
                <!--end::Title-->
  
               
              </div>
              <!--end::Heading-->
  
              <!--begin::Input group-->
              <div class="d-flex flex-column mb-8 fv-row">
                <!--begin::Label-->
                <label class="d-flex align-items-center fs-6 fw-semibold mb-2">
                  <span class="required">Titre de la demande</span>
                  <i
                    class="fas fa-exclamation-circle ms-2 fs-7"
                    data-bs-toggle="tooltip"
                    title="Specify a target name for future usage and reference"
                  ></i>
                </label>
                <!--end::Label-->
  
                <el-form-item prop="targetTitle">
                  <el-input
                    v-model="targetData.targetTitle"
                    placeholder="Entrer un titre"
                    name="targetTitle"
                  ></el-input>
                </el-form-item>
              </div>
              <!--end::Input group-->
  
              <!--begin::Input group-->
              <div class="row g-9 mb-8">
             
              

                <!--begin::Col-->
                <div class="col-md-6 fv-row">
                  <label class="required fs-6 fw-semibold mb-2">Date Debut</label>
  
                  <!--begin::Input-->
                  <div class="position-relative align-items-center">
                    <!--begin::Datepicker-->
                    <el-form-item prop="DateDebut">
                        <el-date-picker
                          v-model="targetData.DateDebut"
                          type="date"
                          placeholder="Select a date"
                          :teleported="false"
                          popper-class="override-styles"
                          name="DateDebut"
                          :default-value="new Date()"
                          :picker-options="{ minDate: new Date() }"
                        />
                    </el-form-item>
                    <!--end::Datepicker-->
                  </div>
                  <!--end::Input-->
                </div>
                <!--end::Col-->
  
  <!--begin::Col-->
  <div class="col-md-6 fv-row">
                  <label class="required fs-6 fw-semibold mb-2">Date Fin</label>
  
                  <!--begin::Input-->
                  <div class="position-relative align-items-center">
                    <!--begin::Datepicker-->
                    <el-form-item prop="DateFin">
                      <el-date-picker
                        v-model="targetData.DateFin"
                        type="date"
                        placeholder="Select a date"
                        :teleported="false"
                        popper-class="override-styles"
                        name="DateFin"
                        :picker-options="{ minDate: targetData.DateDebut }"
                      />
                    </el-form-item>
                    <!--end::Datepicker-->
                  </div>
                  <!--end::Input-->
                </div>
                <!--end::Col-->


   <!--begin::Col-->
   <div class="col-md-6 fv-row">
                  <label class="required fs-6 fw-semibold mb-2">Type</label>
  
                  <el-form-item prop="assign">
                    <el-select
                      v-model="targetData.assign"
                      placeholder="Selectionner un type"
                      name="assign"
                      as="select"
                    >
                      
                      <el-option label="annuel" value="0"
                        >Annuel</el-option
                      >
  
                      <el-option label="sans solde" value="3"
                        >Sans solde</el-option
                      >

                      <el-option label="maladie" value="2"
                        >Maladie</el-option
                      >
  
                      <el-option label="exceptionnel" value="1"
                        >exceptionnel</el-option
                      >

                      <el-option label="Reliquat" value="4"
                        >Reliquat</el-option
                      >

                     </el-select>
                  </el-form-item>
                </div>
                <!--end::Col-->
  


  
              </div>
              <!--end::Input group-->
  
              <!--begin::Input group-->
              <div class="d-flex flex-column mb-8">
                <label class="fs-6 fw-semibold mb-2">Details</label>
  
                <el-form-item prop="targetDetails">
                  <el-input
                    v-model="targetData.targetDetails"
                    type="textarea"
                    rows="3"
                    name="targetDetails"
                    placeholder="Entrez les details de la demande"
                  />
                </el-form-item>
              </div>
              <!--end::Input group-->
  
              <!--begin::Input group-->
              <div class="d-flex flex-column mb-8">
                <label class="fs-6 fw-semibold mb-2">Introduire Document justificatif</label>
  
                <el-form-item prop="targetDoc">
                  <el-input
                    v-model="targetData.targetDoc"
                    type="file"
                   
                    name="targetDoc"
                   
                  />
                </el-form-item>
              </div>
              <!--end::Input group-->
  
              <!--begin::Actions-->
              <div class="text-center">
                <button
                  type="reset"
                  id="kt_modal_new_target_cancel"
                  class="btn btn-light me-3"
                >
                  Cancel
                </button>
  
                <!--begin::Button-->
                <button
                  :data-kt-indicator="loading ? 'on' : null"
                  class="btn btn-lg btn-primary"
                  type="submit"
                >
                  <span v-if="!loading" class="indicator-label">
                    Submit
                    <KTIcon icon-name="arrow-right" icon-class="fs-3 ms-2 me-0" />
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
              <!--end::Actions-->
            </el-form>
            <!--end:Form-->
          </div>
          <!--end::Modal body-->
        </div>
        <!--end::Modal content-->
      </div>
      <!--end::Modal dialog-->
    </div>
    <!--end::Modal - New Target-->
  </template>
  
  <style lang="scss">
  .el-select {
    width: 100%;
  }
  
  .el-date-editor.el-input,
  .el-date-editor.el-input__inner {
    width: 100%;
  }
  </style>
  
  <script lang="ts">
  import { getAssetPath } from "@/core/helpers/assets";
  import { defineComponent, ref } from "vue";
  import { hideModal } from "@/core/helpers/modal";
  import Swal from "sweetalert2/dist/sweetalert2.js";
import ApiService from "@/core/services/ApiService";
  
  interface NewAddressData {
    targetTitle: string;
    assign: string;
    DateDebut: string;
    DateFin: string;
    targetDetails: string;
    targetDoc: File | null;
    tags: Array<string>;
  }
  
  export default defineComponent({
    name: "new-target-modal",
    components: {},
    setup() {
      const formRef = ref<null | HTMLFormElement>(null);
      const newTargetModalRef = ref<null | HTMLElement>(null);
      const loading = ref<boolean>(false);
  
      const targetData = ref<NewAddressData>({
        targetTitle: "",
        assign: "",
        DateDebut: "",
        DateFin: "",
        targetDetails: "",
        targetDoc: null as File | null,
        tags: ["important", "urgent"],
      });
  


      const rules = ref({
        targetTitle: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur",
          },
        ],
        assign: [
          {
            required: true,
            message: "Please select Activity zone",
            trigger: "change",
          },
        ],
        DateDebut: [
            {
            required: true,
            message: "Please select Activity zone",
            trigger: "change",
            validator: (rule, value, callback) => {
              const today = new Date();
              const selectedDate = new Date(value);
              if (selectedDate < today) {
                callback(new Error("La date ne peut pas être antérieure à aujourd'hui"));
              } else {
              callback();
              }
            },
            },
        ],
        DateFin: [
          {
            required: true,
            message: "Please select Activity zone",
            trigger: "change",
            validator: (rule, value, callback) => {
              const today = new Date();
              const selectedDate = new Date(value);
              if (selectedDate < today || selectedDate < new Date(targetData.value.DateDebut)) {
                callback(new Error("La date ne peut pas être antérieure à aujourd'hui ou à la date de début"));
              } else {
                callback();
              }
            },
          },
        ],
        tags: [
          {
            required: true,
            message: "Please select Activity zone",
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

                const dateDebut = targetData.value.DateDebut;
                const formattedDate = new Date(dateDebut).toISOString().split('T')[0];
                targetData.value.DateDebut = formattedDate;
                const dateFin = targetData.value.DateFin;
                const formattedDateFin = new Date(dateFin).toISOString().split('T')[0];
                targetData.value.DateFin = formattedDateFin;
                const url = `Demande/Insert?type=0&dateDebut=${targetData.value.DateDebut}&dateFin=${targetData.value.DateFin}&typeConge=${targetData.value.assign}&commentaire=${targetData.value.targetDetails}`;
              ApiService.post(url, targetData.value).then((response) => {
                console.log(response);
              });
  
                console.log(targetData.value);

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
                hideModal(newTargetModalRef.value);
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
        targetData,
        submit,
        loading,
        formRef,
        rules,
        newTargetModalRef,
        getAssetPath,
      };
    },
  });
  </script>


  
  <style lang="scss">
  .override-styles {
    z-index: 99999 !important;
    pointer-events: initial;
  }
  </style>
  