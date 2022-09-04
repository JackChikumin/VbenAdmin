import type { LoginAccount } from '/#/config';

import { computed } from 'vue';

import { useAppStore } from '/@/store/modules/app';

export function useAccountSetting() {
  const appStore = useAppStore();

  const getLoginAccount = computed(() => appStore.getLoginAccount);

  function setAccountSetting(loginSaveAccount: Partial<LoginAccount>) {
    appStore.setProjectConfig({ loginSaveAccount });
  }
  return {
    setAccountSetting,
    getLoginAccount,
  };
}
