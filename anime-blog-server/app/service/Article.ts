import { Service } from "egg";
import { IArticle } from "../../typings/app/service/Article";

export default class Article extends Service {
  // 添加文章
  public async addArticl(articleData: IArticle) {
    const { app } = this;
    // 获取对应的字段
    const { title, picture, content, author, publishTime, category, comments, tag } = articleData;
    // 创建sql语句
    let sql: string = `
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
    const result = await app.mysql.query(sql, [title, picture, content, author, publishTime, category, comments, tag]);

    // 返回结果
    return result;
  }
  // 获取文章
  public async getArticl(pageNum: number = 1, pageSize: number = 10) {
    const { app } = this;
    // 创建sql
    let sql = `select 
    a.id,
    a.title,
    a.picture,
    a.content,
    a.publishTime,
    a.updateTime,
    atag.tagName,
    cat.category_name from anime_article as a inner join anime_tag as atag inner join anime_category as cat on a.tag = atag.id and a.category = cat.id limit ?,?;`;
    try {
      // 执行查询
      const total = await app.mysql.query('select count(*) as total from anime_article;',[]);
      const result = await app.mysql.query(sql, [(pageNum - 1) * pageSize,pageSize]) as [];
      //判断是否查询成功
      if (result) {
        // 响应数据
        this.ctx.body = {
          code: 200,
          message: '数据获取成功!',
          success: true,
          pageNum,
          pageSize,
          total: total[0].total,
          data: result
        }
      }
    } catch (error) {
      this.ctx.body = {
        code: 400,
        message: '参数错误!',
        success: false,
        data: null
      }
    }

  }
  // 获取最近文章
  public async getRecentArticles(pageNum:number = 1,pageSize:number = 10) {
    const { ctx,app } = this;
    // 创建sql
    let sql = `
    select 
    a.id,
    a.title,
    a.picture,
    a.content,
    a.publishTime,
    a.updateTime,
    atag.tagName,
    cat.category_name 
    from anime_article as a inner join anime_tag as atag inner join anime_category as cat on a.tag = atag.id and a.category = cat.id order by a.publishTime desc limit ?,?;
    `;
    
    try {
      // 执行sql
      const total = await app.mysql.query('select count(*) as total from anime_article;',[]);
      const result = await app.mysql.query(sql,[(pageNum - 1) * pageSize,pageSize]) as [];
      // 判断是否有数据
      if (result) {
        ctx.body = {
          code: 200,
          message: '数据获取成功!',
          success: true,
          pageNum,
          pageSize,
          total: total[0].total,
          data: result
        }
      }
    } catch (error) {
      ctx.body = {
        code: 500,
        message: '服务器内部错误!',
        success: false,
        data: null
      }
    }
  }
}