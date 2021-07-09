import 'egg';

declare module 'egg' {

  interface mysql {
    get(tableName:string,find: {}):Promise;
    query(sql:string,values:any):Promise;
  }

  interface Application {
    jwt: any;
    mysql: mysql
  }
}