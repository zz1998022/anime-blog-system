import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1625556139159_5956';

  // add your egg config in here
  config.middleware = [];

  // 配置jwt
  config.jwt = {
    secret: '123456', // 自定义token加密条件字符串
  }
  config.security = {
    csrf: {
      enable: true,
      ignoreJSON: true
    },
    // domainWhiteList: ['http://localhost:8080'],//允许访问接口的白名单
  }
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };

  // 连接数据库
  config.mysql = {
    // 单数据库信息配置
    client: {
      // 数据库地址
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'Zc2LkL1314',
      // 数据库名
      database: 'anime_blog'
    },
    // 是否加载到app上
    app: true,
    // 是否加载到agent上
    agent: false
  }

  config.security = {
    csrf: {
      enable: false
    }
  }
  

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
