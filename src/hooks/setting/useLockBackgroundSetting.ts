import type { LockBackgroundSetting } from '/#/config';

import { computed, unref } from 'vue';

import { useAppStore } from '/@/store/modules/app';
import { LockBackgroundEnum } from '/@/enums/LockEnum';

export function useLockBackgroundSetting() {
  const appStore = useAppStore();

  const getLockType = computed(() => appStore.getLockSetting.lockType);

  const getLockImage = computed(() => appStore.getLockSetting.lockImage);

  const getHorizontal = computed(() => {
    return unref(getLockImage.value) === LockBackgroundEnum.LIUHAOCUN;
  });

  function setLockBackgroundSetting(lockBackgroundSetting: Partial<LockBackgroundSetting>) {
    appStore.setProjectConfig({ lockBackgroundSetting });
  }
  return {
    setLockBackgroundSetting,
    getLockType,
    getLockImage,
    getHorizontal,
  };
}
