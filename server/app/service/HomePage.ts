import { Service } from 'egg';

export default class HomePage extends Service {
  // 获取文章分类,文章数量,标签数量,标签分类,标签名字,标签分类
  public async getHomePageInfo() {
    const { app,ctx } = this;

    // 获取文章数量sql
    const ArticleCountSql = `select COUNT(*) as total FROM anime_article;`;
    // 获取标签数量sql
    const TagCountSql = `select count(*) as tagCount from anime_tag;`;
    // 获取分类数量
    const CateCountSql = `select count(*) as cateCount from anime_category;`;
    // 获取分类
    const CateSql = `select * from anime_category;`;
    // 获取标签
    const TagSql = `select * from anime_tag;`;

    try {
      // 执行sql
      const ArticleResult = await app.mysql.query(ArticleCountSql, []);
      const TagCountResult = await app.mysql.query(TagCountSql, []);
      const CateCountResult = await app.mysql.query(CateCountSql, []);
      const CateResult = await app.mysql.query(CateSql, []);
      const TagResult = await app.mysql.query(TagSql, []);

      // 响应数据
      ctx.body = {
        code: 200,
        message: '数据获取成功',
        success: true,
        data: {
          articleCount: ArticleResult[0].total,
          tag: {
            count: TagCountResult[0].tagCount,
            data: TagResult
          },
          cate: {
            count: CateCountResult[0].cateCount,
            data: CateResult
          }
        }
      }
    } catch (error) {
      ctx.body = {
        code: 500,
        message: '服务器内部错误',
        data: null
      }
    }
  }
}