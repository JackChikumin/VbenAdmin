<template>
  <transition name="fade-bottom" mode="out-in">
    <LockPage
      :style="{ backgroundImage: `url(${lock_background()})`, backgroundSize: '100% 100%' }"
      v-if="getIsLock"
    />
  </transition>
</template>
<script lang="ts" setup>
  import { computed } from 'vue';
  import LockPage from './LockPage.vue';
  import { useLockStore } from '/@/store/modules/lock';
  import { LockOptionsEnum } from '/@/enums/LockEnum';
  import { useLockBackgroundSetting } from '/@/hooks/setting/useLockBackgroundSetting';
  import { LockTypeList } from '/@/layouts/default/setting/enum';

  const { getLockImage, getLockType } = useLockBackgroundSetting();

  const lock_background = () => {
    // 如果当前是随机背景
    if (getLockType.value !== LockOptionsEnum.Specify) {
      // 返回一个随机图片
      return LockTypeList[Math.floor(Math.random() * (LockTypeList.length - 1))].path;
    } else {
      // 指定背景
      for (const k of LockTypeList) {
        if (k.type === getLockImage.value) {
          return k.path;
        }
      }
    }
  };

  const lockStore = useLockStore();
  const getIsLock = computed(() => lockStore?.getLockInfo?.isLock ?? false);
</script>
