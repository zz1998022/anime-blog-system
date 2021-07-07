/**
 * 封装GET、POST、PUT、DELETE方法
 */

import fetch from "./fetch";
import { baseHost } from "../config";

//  开发环境 development  上线环境 production
const {DEV} = import.meta.env;
let serverURL = "";

/**
 * @method getURL 获取请求地址
 *
 * @param {String} type [请求 地址环境类型]
 */
const getURL = () => {
  // 是否为开发环境
  if (DEV) {
    serverURL = baseHost.API1.dev_host;
  } else {
    serverURL = baseHost.API1.pro_host
  }

  return serverURL;
};

/**
 * @method httpGet
 *
 * import { httpGet } from '@/utils/http';
 *
 * httpGet('', payload).then().catch();
 *
 * @param {*} url [ 请求地址 ]
 * @param {*} payload [ 请求参数 ]
 * @param {*} type [ 设置 baseURL ]
 */
export const httpGet = async (url:any, payload?:any) => {
  try {
    serverURL = getURL();
    fetch.defaults.baseURL = serverURL;
    const response = await fetch.get(`${url}`, {
      params: payload
    });

    const result = response.data;
    return result;
  } catch (err) {
    throw new Error(err);
  }
};

/**
 * @method httpPost
 *
 * import { httpPost } from '@/libraries/axios/http'
 *
 * httpPost('', payload).then().catch()
 *
 * @param { String } url  [ 请求地址 ]
 * @param { Object } payload  [ 请求参数 ]
 */
export const httpPost = async (url:any, payload:any) => {
  try {
    serverURL = getURL();

    fetch.defaults.baseURL = serverURL;

    const response = await fetch.post(`${url}`, payload);

    const result = response.data;
    return result;
  } catch (err) {
    throw new Error(err);
  }
};

/**
 * @method httpPut
 *
 * import { httpPut } from '@/utils/http'
 *
 * httpPut('', payload).then().catch()
 *
 *
 * @param {*} url [ 请求地址 ]
 * @param {*} payload [ 请求参数 ]
 * @param {*} type [ 设置 baseURL ]
 */
export const httpPut = async (url:any, payload:any) => {
  try {
    serverURL = getURL();
    fetch.defaults.baseURL = serverURL;
    const response = await fetch.put(`${url}`, payload);

    const result = response.data;
    return result;
  } catch (err) {
    throw new Error(err);
  }
};

/**
 * @method httpDelete
 *
 * import { httpDelete } from '@/utils/http'
 *
 * httpDelete('', payload).then().catch()
 *
 * @param {*} url [ 请求地址 ]
 * @param {*} payload [ 请求参数 ]
 * @param {*} type [ 设置 baseURL ]
 */
export const httpDelete = async (url:any, payload:any) => {
  try {
    serverURL = getURL();
    fetch.defaults.baseURL = serverURL;
    const response = await fetch.delete(`${url}`, {
      data: payload
    });

    const result = response.data;
    return result;
  } catch (err) {
    throw new Error(err);
  }
};
