// Rollup
import rollup, { OutputOptions, watch } from 'rollup';
// Chalk
import chalk from 'chalk';
import ora from 'ora';
import waitOn from 'wait-on';
import net from 'net';
// URL
import { URL } from 'url';
// 环境模式
import minimist from 'minimist';
// Electron连接
import ElectronConnect from 'electron-connect';
// 编译配置
import { getRollupOptions } from '../config/rollupElectronConfig';

const argv = minimist(process.argv.slice(2));
const TAG = '[compiler-electron]';

// 导出编译配置
export function StartCompilerElectron(Port = 80) {
  // 因为 vite 不会重定向到 index.html，所以直接写 index.html 路由。
  const ELECTRON_URL = `http://localhost:${Port}/index.html`;
  // 连接Electron开始编译
  const Spinner = ora(`${TAG} 正在使用Electron开始编译...`);
  // 创建连接
  const electron = ElectronConnect.server.create({
    stopOnClose: true,
  });
  // 读取配置
  const RollupOptions = getRollupOptions();
  // 监听
  function WatchFunc() {
    const Watcher = watch(RollupOptions);
    Watcher.on('change', (filename) => {
      const Log = chalk.green(`changer --${filename}`);
      console.log(TAG, Log);
    });

    // 监听事件
    Watcher.on('event', (ev) => {
      if (ev.code.includes('END')) {
        // init-未启动、started-第一次启动、restarted-重新启动
        electron.electronState.includes('init') ? electron.start() : electron.restart();
      } else if (ev.code.includes('ERROR')) {
        // 错误
        console.log('错误:', ev.error);
      }
    });
  }

  // 如果watch存在
  if (argv.watch) {
    waitOn(
      {
        resources: [ELECTRON_URL],
        timeout: 5000,
      },
      (err) => {
        if (err) {
          const { hostname } = new URL(ELECTRON_URL);
          // 创建服务连接
          const ServerSocket = net.connect(Port, hostname, () => {
            WatchFunc();
          });
          // 监听错误
          ServerSocket.on('error', (e) => {
            console.log(err);
            console.log(e);
            process.exit(1);
          });
        } else {
          WatchFunc();
        }
      },
    );
  } else {
    Spinner.start();
    rollup
      .rollup(RollupOptions)
      .then((build) => {
        Spinner.stop();
        console.log(TAG, chalk.green('Electron编译成功,开始生成安装包!'));
        build.write(RollupOptions.output as OutputOptions);
      })
      .catch((error) => {
        console.log(`\n${TAG} ${chalk.red('Electron编译报错')}\n`, error, '\n');
        Spinner.stop();
      });
  }
}
