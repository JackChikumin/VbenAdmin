// 导出创建服务
import { createServer } from 'vite';
// Path
import path from 'path';
// Electron编译
import { StartCompilerElectron } from './compilerElectron';
// 解析命令行
import minimist from 'minimist';

// 异步创建Electron实例
(async () => {
  const argv = minimist(process.argv.slice(2));
  const isDev = Object.is(argv.env, 'development');
  // 端口
  let Port: number | undefined = undefined;
  // 如果是开发环境
  if (isDev) {
    // 请求服务
    const Service = await createServer({
      root: path.resolve(__dirname, '../../'),
    });

    // 监听端口
    const App = await Service.listen();
    Port = App.config.server.port;
    process.env.PORT = `${Port}`;
  }

  // 启动编译服务
  StartCompilerElectron(Port);
})();
