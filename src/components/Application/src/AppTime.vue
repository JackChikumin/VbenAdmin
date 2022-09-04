<template>
  <Space>
    <!-- <Button type="primary" danger>{{ t('layout.header.serverTime', [ServerTime]) }}</Button> -->
    <Button type="primary">{{ t('layout.header.appTime', [BeiJingTime]) }}</Button>
  </Space>
</template>

<script lang="ts" setup>
  import Dayjs from 'dayjs';
  import { onUnmounted, ref } from 'vue';
  import { Button, Space } from 'ant-design-vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  // import { useAppStoreWithOut } from '/@/store/modules/app';

  const { t } = useI18n();

  // const useAppStore = useAppStoreWithOut();

  const BeiJingTime = ref<string>('');
  // const ServerTime = ref<any>('');

  const AppBeiJingTime = setInterval(() => {
    BeiJingTime.value = Dayjs().format('YYYY-MM-DD HH:mm:ss');
  }, 1000);

  // 时间
  // const Timer = ref<number>(new Date(String(useAppStore.getServerTime)).getTime());

  // // 处理服务器时间
  // const ServerTimes = setInterval(() => {
  //   Timer.value = Timer.value + 1000;
  //   ServerTime.value = Dayjs(Timer.value).format('YYYY-MM-DD HH:mm:ss');
  // }, 1000);

  onUnmounted((): void => {
    clearInterval(AppBeiJingTime);
    // clearInterval(ServerTimes);
  });
</script>

<style scoped></style>
