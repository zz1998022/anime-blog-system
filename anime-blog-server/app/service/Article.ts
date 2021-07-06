import { Service } from "egg";
import { IArticle } from "../../typings/app/service/Article";

export default class Article extends Service {
  // 添加文章
  public async addArticl(articleData:IArticle) {
    const { app } = this;
    // 获取对应的字段
    const { title,picture,content,author,publishTime,category,comments,tag } = articleData;
    // 创建sql语句
    let sql:string = `
    insert into anime_article(
      title, 
      picture, 
      content, 
      author, 
      publishtime, 
      category, 
      comments, 
      tag) values(?,?,?,?,?,?,?,?);
    `;

    // 执行sql语句
    const result = await app.mysql.query(sql,[title,picture,content,author,publishTime,category,comments,tag]);
    
    // 返回结果
    return result;
  }
}