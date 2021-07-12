import { Controller } from 'egg';

export default class InfoController extends Controller {
  // 获取文章分类,文章数量,标签数量,标签分类,标签名字,标签分类
  public async getHomePageInfo() {
    const { ctx } = this;

    await ctx.service.homePage.getHomePageInfo();
  }
}