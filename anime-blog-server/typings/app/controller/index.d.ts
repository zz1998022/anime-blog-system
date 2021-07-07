// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/controller/article';

declare module 'egg' {
  interface IController {
    article: ExportArticle;
  }
}
