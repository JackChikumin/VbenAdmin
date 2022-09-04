import { MenuTypeEnum, MenuModeEnum, TriggerEnum, MixSidebarTriggerEnum } from '/@/enums/menuEnum';
import {
  ContentEnum,
  PermissionModeEnum,
  ThemeEnum,
  RouterTransitionEnum,
  SettingButtonPositionEnum,
  SessionTimeoutProcessingEnum,
} from '/@/enums/appEnum';

import { LockOptionsEnum } from '/@/enums/LockEnum';

import { CacheTypeEnum } from '/@/enums/cacheEnum';

// 多语言类型
export type LocaleType = 'zh_CN' | 'en' | 'ru' | 'ja' | 'ko';

// 路由菜单配置
export interface MenuSetting {
  bgColor: string;
  fixed: boolean;
  collapsed: boolean;
  siderHidden: boolean;
  canDrag: boolean;
  show: boolean;
  hidden: boolean;
  split: boolean;
  menuWidth: number;
  mode: MenuModeEnum;
  type: MenuTypeEnum;
  theme: ThemeEnum;
  topMenuAlign: 'start' | 'center' | 'end';
  trigger: TriggerEnum;
  accordion: boolean;
  closeMixSidebarOnChange: boolean;
  collapsedShowTitle: boolean;
  mixSideTrigger: MixSidebarTriggerEnum;
  mixSideFixed: boolean;
}

export interface MultiTabsSetting {
  cache: boolean;
  show: boolean;
  showQuick: boolean;
  canDrag: boolean;
  showRedo: boolean;
  showFold: boolean;
}

// Header配置
export interface HeaderSetting {
  bgColor: string;
  fixed: boolean;
  show: boolean;
  theme: ThemeEnum;
  // 开启全屏
  showFullScreen: boolean;
  // 是否显示锁屏
  useLockPage: boolean;
  // 显示文档按钮
  showDoc: boolean;
  // 显示消息中心按钮
  showNotice: boolean;
  // 显示搜索按钮
  showSearch: boolean;
}

// 多语言配置
export interface LocaleSetting {
  showPicker: boolean;
  // 当前语言
  locale: LocaleType;
  // 默认语言
  fallback: LocaleType;
  // 可用的语言环境
  availableLocales: LocaleType[];
}

// 切换动画配置
export interface TransitionSetting {
  //  是否开启页面切换动画
  enable: boolean;
  // 路由基本切换动画
  basicTransition: RouterTransitionEnum;
  // 是否开启页面切换加载
  openPageLoading: boolean;
  // 是否打开顶部进度条
  openNProgress: boolean;
}

// 锁屏图片配置
export interface LockBackgroundSetting {
  // 锁屏背景切换方式
  lockType: LockOptionsEnum.Specify;
  // 锁屏背景图片
  lockImage: string;
}

// 登录保存账户密码
export interface LoginAccount {
  // 用户名
  username: string | null;
  // 密码
  password: string | null;
  // 是否记住密码
  rememberMe: boolean;
}

// 项目配置
export interface ProjectConfig {
  // 权限相关信息的存储位置
  permissionCacheType: CacheTypeEnum;
  // 是否显示SettingButton
  showSettingButton: boolean;
  // 是否显示主题切换按钮
  showDarkModeToggle: boolean;
  // 设置按钮位置 可选项
  // SettingButtonPositionEnum.AUTO: 自动选择
  // SettingButtonPositionEnum.HEADER: 位于头部
  // SettingButtonPositionEnum.FIXED: 固定在右侧
  settingButtonPosition: SettingButtonPositionEnum;
  // 权限模式,默认前端角色权限模式
  // ROUTE_MAPPING: 前端模式（菜单由路由生成，默认）
  // ROLE：前端模式（菜单路由分开）
  permissionMode: PermissionModeEnum;
  // 会话超时处理方案
  // SessionTimeoutProcessingEnum.ROUTE_JUMP: 路由跳转到登录页
  // SessionTimeoutProcessingEnum.PAGE_COVERAGE: 生成登录弹窗，覆盖当前页面
  sessionTimeoutProcessing: SessionTimeoutProcessingEnum;
  // 网站灰色模式，用于可能悼念的日期开启
  grayMode: boolean;
  // 色弱模式
  colorWeak: boolean;
  // 项目主题色
  themeColor: string;

  // 是否取消菜单,顶部,多标签页显示, 用于可能内嵌在别的系统内
  fullContent: boolean;
  // 主题内容宽度
  contentMode: ContentEnum;
  // 是否显示logo
  showLogo: boolean;
  // 是否显示底部信息 copyright
  showFooter: boolean;
  // 头部配置
  headerSetting: HeaderSetting;
  // 菜单配置
  menuSetting: MenuSetting;
  // 多标签
  multiTabsSetting: MultiTabsSetting;
  // 动画配置
  transitionSetting: TransitionSetting;
  // 是否开启KeepAlive缓存  开发时候最好关闭,不然每次都需要清除缓存
  openKeepAlive: boolean;
  // 自动锁屏时间，为0不锁屏。 单位分钟 默认1个小时
  lockTime: number;
  // 显示面包屑
  showBreadCrumb: boolean;
  // 显示面包屑图标
  showBreadCrumbIcon: boolean;
  // 是否使用全局错误捕获
  useErrorHandle: boolean;
  // 是否开启回到顶部
  useOpenBackTop: boolean;
  //  是否可以嵌入iframe页面
  canEmbedIFramePage: boolean;
  // 切换界面的时候是否删除未关闭的message及notify
  closeMessageOnSwitch: boolean;
  // 切换界面的时候是否取消已经发送但是未响应的http请求。
  // 如果开启,想对单独接口覆盖。可以在单独接口设置
  removeAllHttpPending: boolean;
  // 锁屏背景切换方式
  lockBackgroundSetting: LockBackgroundSetting;
  // 登录保存密码
  loginSaveAccount: LoginAccount;
}

// 公共配置
export interface GlobConfig {
  // 网站标题
  title: string;
  // 服务接口地址
  apiUrl: string;
  // 上传网址
  uploadUrl?: string;
  // 服务接口url前缀
  urlPrefix?: string;
  // 项目简称
  shortName: string;
}

// 公共环境变量配置
export interface GlobEnvConfig {
  // 网站标题
  VITE_GLOB_APP_TITLE: string;
  // Service interface url
  VITE_GLOB_API_URL: string;
  // 服务接口url前缀
  VITE_GLOB_API_URL_PREFIX?: string;
  // 项目简称
  VITE_GLOB_APP_SHORT_NAME: string;
  // 上传网址
  VITE_GLOB_UPLOAD_URL?: string;
  // 是否开启数据加密
  VITE_GLOB_ENCRYPT: boolean;
  // 加密密钥
  VITE_GLOB_PUBLICKEY: string;
  // 生产环境API地址
  VITE_GLOB_API_PATH: string;
}
