<template>
  <KTUpgradePlanModal />
  <KTCreateAppModal />
  <KTNewTargetModal />
  <KTNewTargetDoc />
  <KTNewTargetCongé />
  <KTViewUsersModal />
  <KTInviteFriendsModal />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KTUpgradePlanModal from "@/components/modals/general/UpgradePlanModal.vue";
import KTCreateAppModal from "@/components/modals/wizards/CreateAppModal.vue";
import KTNewTargetModal from "@/components/modals/forms/NewTargetModal.vue";
import KTNewTargetDoc from "@/components/modals/forms/NewTargetDoc.vue";
import KTNewTargetCongé from "@/components/modals/forms/NewTargetCongé.vue";
import KTViewUsersModal from "@/components/modals/general/ViewUsersModal.vue";
import KTInviteFriendsModal from "@/components/modals/general/InviteFriendsModal.vue";

export default defineComponent({
  name: "global-modals",
  components: {
    KTUpgradePlanModal,
    KTCreateAppModal,
    KTNewTargetModal,
    KTNewTargetDoc,
    KTNewTargetCongé,
    KTViewUsersModal,
    KTInviteFriendsModal,
  },
});
</script>
