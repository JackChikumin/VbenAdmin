import { join } from 'path';
import is_dev from 'electron-is-dev';
import { build } from '../package.json';
import { app, BrowserWindow, screen, Menu, globalShortcut, Tray, Notification } from 'electron';

// 处理Insecure Content-Security-Policy警告
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

let MainWindow: BrowserWindow | null = null;

// 图标配置
let appTray = null;

// 系统托盘图标目录
const trayIcon: string = join(__dirname, is_dev ? '../../public' : '../');

// 显示系统消息通知
const SystemNotification = (title: string, body: string, icon: string, silent: boolean): void => {
  const notification = new Notification({
    // 通知的标题, 将在通知窗口的顶部显示
    title: title ?? '未读消息通知',
    // 通知的正文文本, 将显示在标题或副标题下面
    body: body ?? '您有新的未读消息,请注意查看!!',
    // 用于在该通知上显示的图标
    icon: icon ?? join(trayIcon, 'logo.png'),
    // 在显示通知时是否发出系统提示音
    silent: silent ?? true,
  });

  notification.show();
  notification.on('click', () => {
    // 显示窗口
    MainWindow.show();
    notification.close();
  });
};

class CreateApplications {
  constructor() {
    const displayWorkAreaSize = screen.getAllDisplays()[0].workArea;
    MainWindow = new BrowserWindow({
      // 默认宽度
      width: parseInt(`${displayWorkAreaSize.width * 0.65}`, 10),
      // 默认高度
      height: parseInt(`${displayWorkAreaSize.height * 0.36}`, 10),
      // 最小宽度
      minWidth: parseInt(`${displayWorkAreaSize.width * 0.6}`, 10),
      // 最小高度
      minHeight: parseInt(`${displayWorkAreaSize.width * 0.36}`, 10),
      // 内容大小
      useContentSize: true,
      // 是否显示默认的头部；自定义头部
      frame: true,
      // 隐藏菜单栏
      autoHideMenuBar: true,
      // 是否允许全屏模式
      simpleFullscreen: true,
      // 可否缩放,会让放大后的窗口不能恢复
      resizable: true,
      // 可否最小化
      minimizable: true,
      // 可否最大化
      maximizable: true,
      // 展示关闭按钮
      closable: true,
      // MAC下是否可以全屏
      fullscreen: false,
      // 在任务栏中显示窗口
      skipTaskbar: false,
      // 是否允许单击页面来激活窗口
      acceptFirstMouse: true,
      // 是否透明窗口
      transparent: false,
      // 可否移动
      movable: true,
      // 创建时是否显示窗口
      show: false,
      // 居中显示
      center: true,
      // 默认标题栏样式
      titleBarStyle: 'default',
      // 窗口图标
      icon: join(trayIcon, 'logo.png'),
      // 网页功能的设置
      webPreferences: {
        // 禁用安全策略
        webSecurity: false,
        // 允许一个 https 页面运行 http url 里的资源
        allowRunningInsecureContent: true,
        // 是否集成node，默认false
        nodeIntegration: true,
        // 数据隔离(应用多开时需启用)
        contextIsolation: true,
        // 多线程
        nodeIntegrationInWorker: true,
        // 是否启用js
        javascript: true,
        // 是否启用webView
        webviewTag: true,
        // 在 macOS 上启用滚动反弹（橡皮筋）效果
        scrollBounce: true,
        // 默认字体大小
        defaultFontSize: 16,
        // 是否启用 window.open()
        nativeWindowOpen: true,
      },
    });

    const URL = is_dev
      ? `http://localhost:${process.env.PORT}` // vite 启动的服务器地址
      : `file://${join(__dirname, '../index.html')}`; // vite 构建后的静态文件地址

    MainWindow.loadURL(URL);

    MainWindow.on('ready-to-show', (): void => {
      MainWindow.show();
    });

    // 全局注册打开开发者工具快捷键
    globalShortcut.register('ctrl+F12', (): void => {
      MainWindow.webContents.openDevTools();
    });

    // 注册刷新
    globalShortcut.register('ctrl+F5', (): void => {
      MainWindow.reload();
    });

    // 托盘图标
    appTray = new Tray(join(trayIcon, 'logo.png'));

    // 图标的上下文菜单
    const contextMenu = Menu.buildFromTemplate([
      {
        label: '打开',
        click: (): void => {
          MainWindow.isVisible() ? MainWindow.hide() : MainWindow.show();
        },
      },
      {
        label: '退出',
        click: (): void => {
          appTray.destroy();
          app.exit();
        },
      },
    ]);

    // 设置此托盘图标的悬停提示内容
    appTray.setToolTip(build.productName ?? 'Vben Admin');

    // 设置此图标的上下文菜单
    appTray.setContextMenu(contextMenu);

    // 单击右下角小图标显示应用
    appTray.on('click', (): void => {
      return MainWindow.isVisible() ? MainWindow.hide() : MainWindow.show();
    });

    // 开发环境自动打开调试工具
    if (is_dev) {
      MainWindow.webContents.openDevTools();
    }

    // 加载完成后再显示
    MainWindow.on('ready-to-show', (): void => {
      MainWindow.show();
    });

    // 点击关闭按钮不执行退出程序,并最小化到托盘
    MainWindow.on('close', (e): void => {
      e.preventDefault();
      MainWindow.hide();
    });
  }
}

Menu.setApplicationMenu(null);

app.whenReady().then((): void => {
  new CreateApplications();
});

const isFirstInstance = app.requestSingleInstanceLock();

if (!isFirstInstance) {
  app.quit();
} else {
  app.on('second-instance', (): void => {
    if (MainWindow) {
      MainWindow.focus();
    }
  });
}

app.on('window-all-closed', (): void => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', (): void => {
  if (BrowserWindow.getAllWindows().length === 0) {
    new CreateApplications();
  }
});
