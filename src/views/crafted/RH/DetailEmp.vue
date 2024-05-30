<template>
  <!--begin::Layout-->
  <div class="d-flex flex-column flex-xl-row">
    <!--begin::Sidebar-->
    <div class="flex-column flex-lg-row-auto w-100 w-xl-350px mb-10">
      <!--begin::Card-->
      <div class="card mb-5 mb-xl-8">
        <!--begin::Card body-->
        <div class="card-body pt-15">
          <!--begin::Summary-->
          <div class="d-flex flex-center flex-column mb-5">
            <!--begin::Avatar-->
            <div class="symbol symbol-100px symbol-circle mb-7">
              <img :src="getAssetPath('media/avatars/300-1.jpg')" alt="image" />
            </div>
            <!--end::Avatar-->

            <!--begin::Name-->
            <a
              href="#"
              class="fs-3 text-gray-800 text-hover-primary fw-bold mb-1"
            >
              Max Smith
            </a>
            <!--end::Name-->

            <!--begin::Position-->
            <div class="fs-5 fw-semibold text-muted mb-6">Développeur Web</div>
            <!--end::Position-->

             <!--begin::Position-->
             <div class="fs-5 fw-semibold text-muted mb-6">Département développement</div>
            <!--end::Position-->

            <!--begin::Info-->
            <div class="d-flex flex-wrap flex-center">
              <!--begin::Stats-->
              <div
                class="border border-gray-300 border-dashed rounded py-3 px-3 mb-3"
              >
                <div class="fs-4 fw-bold text-gray-700">
                  <span class="w-75px">17</span>
                  <KTIcon icon-name="arrow-up" icon-class="fs-3 text-success" />
                </div>
                <div class="fw-semibold text-muted">Demandes acceptées</div>
              </div>
              <!--end::Stats-->

              <!--begin::Stats-->
              <div
                class="border border-gray-300 border-dashed rounded py-3 px-3 mx-4 mb-3"
              >
                <div class="fs-4 fw-bold text-gray-700">
                  <span class="w-50px">5</span>
                  <KTIcon
                    icon-name="arrow-down"
                    icon-class="fs-3 text-danger"
                  />
                </div>
                <div class="fw-semibold text-muted">Demandes refusées</div>
              </div>
              <!--end::Stats-->

              <!--begin::Stats-->
              <div
                class="border border-gray-300 border-dashed rounded py-3 px-3 mb-3"
              >
                <div class="fs-4 fw-bold text-gray-700">
                  <span class="w-50px">7.2/10</span>
                  <KTIcon icon-name="arrow-up" icon-class="fs-3 text-success" />
                </div>
                <div class="fw-semibold text-muted">Score</div>
              </div>
              <!--end::Stats-->
            </div>
            <!--end::Info-->
          </div>
          <!--end::Summary-->

          <!--begin::Details toggle-->
          <div class="d-flex flex-stack fs-4 py-3">
            <div
              class="fw-bold rotate collapsible"
              data-bs-toggle="collapse"
              href="#kt_customer_view_details"
              role="button"
              aria-expanded="false"
              aria-controls="kt_customer_view_details"
            >
              Details
              <span class="ms-2 rotate-180">
                <KTIcon icon-name="down" icon-class="fs-3" />
              </span>
            </div>

          </div>
          <!--end::Details toggle-->

          <div class="separator separator-dashed my-3"></div>

          <!--begin::Details content-->
          <div id="kt_customer_view_details" class="collapse show">
            <div class="py-5 fs-6">
             
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Matricule</div>
              <div class="text-gray-600">MS2535543</div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Email</div>
              <div class="text-gray-600">
                <a href="#" class="text-gray-600 text-hover-primary"
                  >mas23@keenthemes.com</a
                >
              </div>
               <!--begin::Details item-->
               <div class="fw-bold mt-5">Téléphone</div>
              <div class="text-gray-600">0343356443</div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Adresse</div>
              <div class="text-gray-600">
                101 Collin Street, <br />Melbourne 3000 VIC <br />Australia
              </div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Date d'entrée dans l'entreprise</div>
              <div class="text-gray-600">26/11/2020</div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Situation familiale</div>
              <div class="text-gray-600">Célibataire (mskn)</div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Nombre de personnes à charge</div>
              <div class="text-gray-600">0</div>
              <!--begin::Details item-->
               <!--begin::Details item-->
               <div class="fw-bold mt-5">Reliquat</div>
              <div class="text-gray-600">4 jours</div>
              <!--begin::Details item-->
          
            </div>
          </div>
          <!--end::Details content-->
        </div>
        <!--end::Card body-->
      </div>
      <!--end::Card-->

      <!--begin::Connected Accounts-->
      <div class="card mb-5 mb-xl-8">
        <!--begin::Card header-->
        <div class="card-header border-0">
          <div class="card-title">
            <h3 class="fw-bold m-0">Contact</h3>
          </div>
        </div>
        <!--end::Card header-->

        <!--begin::Card body-->
        <div class="card-body pt-2">
         

          <!--begin::Items-->
          <div class="py-2">
            <!--begin::Item-->
            <div class="d-flex flex-stack">
              <div class="d-flex">
                <img
                  :src="getAssetPath('media/svg/social-logos/google.svg')"
                  class="w-30px me-6"
                  alt=""
                />

                <div class="d-flex flex-column">
                  <a href="#" class="fs-5 text-gray-900 text-hover-primary fw-bold"
                    >Gmail</a
                  >
                  
                </div>
              </div>

              <div class="d-flex justify-content-end">
               
                <div class="card-footer border-0 d-flex justify-content-center pt-0">
          <button class="btn btn-sm btn-light-primary">Contacter</button>
        </div>


              </div>
            </div>
            <!--end::Item-->

            <div class="separator separator-dashed my-5"></div>

            <!--begin::Item-->
            <div class="d-flex flex-stack">
              <div class="d-flex">
                <img
                  :src="getAssetPath('media/svg/social-logos/facebook.svg')"
                  class="w-30px me-6"
                  alt=""
                />

                <div class="d-flex flex-column">
                  <a href="#" class="fs-5 text-gray-900 text-hover-primary fw-bold"
                    >Facebook</a
                  >
                  
                </div>
              </div>

              <div class="d-flex justify-content-end">
                
                
                <div class="card-footer border-0 d-flex justify-content-center pt-0">
          <button class="btn btn-sm btn-light-primary">Contacter</button>
        </div>


              </div>
            </div>
            <!--end::Item-->

            <div class="separator separator-dashed my-5"></div>

            <!--begin::Item-->
            <div class="d-flex flex-stack">
              <div class="d-flex">
                <img
                  :src="getAssetPath('media/svg/social-logos/linkedin.svg')"
                  class="w-30px me-6"
                  alt=""
                />

                <div class="d-flex flex-column">
                  <a href="#" class="fs-5 text-gray-900 text-hover-primary fw-bold"
                    >LinkedIn</a
                  >
                 
                </div>
              </div>
              <div class="d-flex justify-content-end">
                
                <div class="card-footer border-0 d-flex justify-content-center pt-0">
          <button class="btn btn-sm btn-light-primary">Contacter</button>
        </div>

              </div>
            </div>
            <!--end::Item-->
          </div>
          <!--end::Items-->
        </div>
        <!--end::Card body-->

        <!--begin::Card footer-->
       
        <!--end::Card footer-->
      </div>
      <!--end::Connected Accounts-->
    </div>
    <!--end::Sidebar-->

    <!--begin::Content-->
    <div class="flex-lg-row-fluid ms-lg-15">
      <!--begin:::Tabs-->
      <ul
        class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-8"
      >
        <!--begin:::Tab item-->
       
        <!--end:::Tab item-->

        <!--begin:::Tab item-->
        <li class="nav-item">
          <a
            class="nav-link text-active-primary pb-4"
            data-kt-countup-tabs="true"
            data-bs-toggle="tab"
            href="#kt_customer_view_overview_statements"
            >Historique</a
          >
        </li>
        <!--end:::Tab item-->

        <!--begin:::Tab item-->
        <li class="nav-item ms-auto">
          <!--begin::Action menu-->
          <a
            href="#"
            class="btn btn-primary ps-7"
            data-kt-menu-trigger="click"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
          >
            Actions
            <KTIcon icon-name="down" icon-class="fs-2 me-0" />
          </a>
          <Dropdown3></Dropdown3>
          <!--end::Menu-->
        </li>
        <!--end:::Tab item-->
      </ul>
      <!--end:::Tabs-->

      <!--begin:::Tab content-->
      <div class="tab-content" id="myTabContent">

 <!--begin:::Tab pane-->
 <div
          class="tab-pane fade"
          id="kt_customer_view_overview_statements"
          role="tabpanel"
        >
          <Earnings card-classes="mb-6 mb-xl-9"></Earnings>
          <Statement card-classes="mb-6 mb-xl-9"></Statement>
        </div>
        <!--end:::Tab pane-->



        <!--begin:::Tab pane-->
        <div
          class="tab-pane fade show active"
          id="kt_customer_view_overview_tab"
          role="tabpanel"
        >
          <PaymentRecords card-classes="mb-6 mb-xl-9"></PaymentRecords>

         
          
        </div>
        <!--end:::Tab pane-->

        <!--begin:::Tab pane-->
        <div
          class="tab-pane fade"
          id="kt_customer_view_overview_events_and_logs_tab"
          role="tabpanel"
        >
          <Logs card-classes="mb-6 mb-xl-9"></Logs>
          <Events card-classes="mb-6 mb-xl-9"></Events>
        </div>
        <!--end:::Tab pane-->

       
      </div>
      <!--end:::Tab content-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Layout-->

  <NewCardModal></NewCardModal>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";
import NewCardModal from "@/components/modals/forms/NewCardModal.vue";
import PaymentRecords from "@/components/customers/cards/overview/PaymentRecords.vue";
import PaymentMethods from "@/components/customers/cards/overview/PaymentMethods.vue";
import CreditBalance from "@/components/customers/cards/overview/CreditBalance.vue";
import Invoices from "@/components/customers/cards/overview/Invoices.vue";

import Events from "@/components/customers/cards/events-and-logs/Events.vue";
import Logs from "@/components/customers/cards/events-and-logs/Logs.vue";

import Earnings from "@/components/customers/cards/statments/Earnings.vue";
import Statement from "@/components/customers/cards/statments/Statement.vue";

export default defineComponent({
  name: "customer-details",
  components: {
    PaymentRecords,
    PaymentMethods,
    CreditBalance,
    Invoices,
    Events,
    Logs,
    Earnings,
    Statement,
    Dropdown3,
    NewCardModal,
  },
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
