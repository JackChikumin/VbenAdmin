<template>
  <ConfigProvider :locale="getAntdLocale">
    <AppProvider>
      <RouterView />
    </AppProvider>
  </ConfigProvider>
</template>

<script lang="ts" setup>
  import { MonitoringTheme, WatchSystemTheme } from '/@/utils/DarkThemeUtils';
  import { ConfigProvider } from 'ant-design-vue';
  import { AppProvider } from '/@/components/Application';
  import { useTitle } from '/@/hooks/web/useTitle';
  import { useLocale } from '/@/locales/useLocale';
  import { useRoute } from 'vue-router';
  import { watch } from 'vue';
  import 'dayjs/locale/zh-cn';

  // support Multi-language
  const { getAntdLocale } = useLocale();

  const router = useRoute();

  // 监听路由改变
  watch(
    () => router.path,
    (): void => {
      MonitoringTheme(true);
    },
  );

  useTitle();

  MonitoringTheme(true);
  WatchSystemTheme();
</script>
