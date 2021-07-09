import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  
  // 配置jwt插件
  jwt: {
    enable: true,
    package: 'egg-jwt'
  },
  cors: {
    enable: true,
    package: 'egg-cors'
  },
  // 配置mysql
  mysql: {
    enable: true,
    package: 'egg-mysql'
  }
};

export default plugin;
