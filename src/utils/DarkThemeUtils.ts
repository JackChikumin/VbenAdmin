// 更换夜间模式与默认模式
import { updateHeaderBgColor, updateSidebarBgColor } from '/@/logics/theme/updateBackground';
import { useRootSetting } from '/@/hooks/setting/useRootSetting';
import { getAuthCache, setAuthCache } from '/@/utils/auth';
import { updateDarkTheme } from '/@/logics/theme/dark';
import { useMessage } from '/@/hooks/web/useMessage';
import { DARK_THEME_KEY } from '/@/enums/cacheEnum';
import { useI18n } from '/@/hooks/web/useI18n';
import { ThemeEnum } from '/@/enums/appEnum';
import Dayjs from 'dayjs';

export const MonitoringTheme = (Dark?: boolean): void => {
  const { createInfoModal } = useMessage();

  const { t } = useI18n();

  const { getDarkMode } = useRootSetting();

  // 获取当前小时
  const hour = Dayjs().format('HH');

  const Token = getAuthCache<number>(DARK_THEME_KEY);

  let darkMode = getDarkMode.value === ThemeEnum.DARK ? ThemeEnum.DARK : ThemeEnum.LIGHT;

  if (Dark) {
    // 如果当前客户没有主动切换主题
    if (Token < 1) {
      // 如果时间小于晚上7点 或者小于早上7点
      if (Number(hour) >= 19 || Number(hour) < 7) {
        if (getDarkMode.value === ThemeEnum.LIGHT) {
          // 使用夜间主题
          darkMode = ThemeEnum.DARK;
          createInfoModal({ title: t('sys.api.Message'), content: t('sys.darkMode.dark') });
        }
      } else {
        if (getDarkMode.value === ThemeEnum.DARK) {
          // 使用默认白色主题
          darkMode = ThemeEnum.LIGHT;
          createInfoModal({ title: t('sys.api.Message'), content: t('sys.darkMode.light') });
        }
      }
    }
  } else {
    // 手动切换主题
    darkMode = getDarkMode.value === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK;
    if (Token < 1) {
      setAuthCache(DARK_THEME_KEY, 1);
    }
  }

  UpdateTheme(darkMode);
};

// 改变主题
const UpdateTheme = (darkMode: any): void => {
  const { setDarkMode } = useRootSetting();
  setDarkMode(darkMode);
  updateDarkTheme(darkMode);
  updateHeaderBgColor();
  updateSidebarBgColor();
};

// 监听系统主题改变
export const WatchSystemTheme = (): void => {
  window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
    // 如果当前系统主题模式为dark夜间模式
    const darkMode = e.matches ? ThemeEnum.DARK : ThemeEnum.LIGHT;
    // 改变当前主题为默认模式
    UpdateTheme(darkMode);
  });
};
