import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  // 添加文章
  router.put('/article',controller.article.addArticle);
  // 获取文章数据
  router.get('/article',controller.article.getArticle);
};
