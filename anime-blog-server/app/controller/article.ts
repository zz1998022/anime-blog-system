import { Controller } from 'egg';
// 引入数据类型
import { IArticle } from "../../typings/app/service/Article";


export default class ArticleController extends Controller {
  // 添加文章数据
  public async addArticle() {
    const { ctx } = this;
    
    // 获取文章数据
    let articlData:IArticle = ctx.request.body as IArticle;
    try {
      const result = await ctx.service.article.addArticl(articlData);
      // 返回结果
      if (result) {
        ctx.body = {
          code: 200,
          message: "文章添加成功!",
          data: null
        }
      }
    } catch (error) {
      ctx.body = {
        code: 400,
        message: '字段填写有误!',
        data: null
      }
    }
  }
  // 获取文章数据
  public async getArticle() {
    const { ctx } = this;
    // 获取参数
    const { pageNum,pageSize } = ctx.request.query;
    console.log(ctx.query);
    await ctx.service.article.getArticl(Number(pageNum),Number(pageSize));
  }
  // 获取最近文章
  public async getRecentArticles() {
    const { ctx } = this;
    const { pageNum,pageSize } = ctx.request.query;
    // 判断是否为数字
    if (isNaN(Number(pageNum)) || isNaN(Number(pageSize))) {
      return ctx.body = {
        code: 400,
        message: '参数错误!',
        success: false,
        data: null
      }
    }

    await ctx.service.article.getRecentArticles(Number(pageNum),Number(pageSize));
  }
}