import { ErrorTypeEnum } from '/@/enums/exceptionEnum';
import { MenuModeEnum, MenuTypeEnum } from '/@/enums/menuEnum';
import { RoleInfo } from '/@/api/sys/model/userModel';

// 锁屏信息
export interface LockInfo {
  // 要求输入密码
  pwd?: string | undefined;
  // 是否上锁?
  isLock?: boolean;
}

// 错误日志信息
export interface ErrorLogInfo {
  // 错误类型
  type: ErrorTypeEnum;
  // 错误文件
  file: string;
  // 错误名称
  name?: string;
  // 错误信息
  message: string;
  // 错误堆栈
  stack?: string;
  // 错误内容
  detail: string;
  // 错误url地址
  url: string;
  // 错误时间
  time?: string;
}

export interface UserInfo {
  userId: string | number;
  username: string;
  realName: string;
  avatar: string;
  desc?: string;
  homePath?: string;
  roles: RoleInfo[];
  time?: string;
}

export interface BeforeMiniState {
  menuCollapsed?: boolean;
  menuSplit?: boolean;
  menuMode?: MenuModeEnum;
  menuType?: MenuTypeEnum;
}
