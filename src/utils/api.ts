/* eslint-disable import/namespace */
import axios, { CancelToken } from 'axios';
import * as config from '../constants/urlApi';
import { LOGIN_URL, TOKEN_KEY } from '../constants/urlApi';
//import { removeToken, readCookie } from './helpers';

// create instance normal
const instanceNext = axios.create({
  baseURL: config.API_URL,
  timeout: 10000
});

/**
 * @author: exe
 * @description: config header Authorization each send request
 */
instanceNext.interceptors.request.use(
  config => {
    // if (!config.headers.Authorization) {
    //   const token = readCookie(TOKEN_KEY);
    //   if (token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    //   }
    // }

    return config;
  },
  error => Promise.reject(error)
);

/**
 * @author: exe
 * @description: handle response interceptor
 */
let isShowModalExpried = false;
instanceNext.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    // token expiry
    if (
      error.response &&
      error.response.status === 401 &&
      !isShowModalExpried
    ) {
      isShowModalExpried = true;
    }

    // call api without token
    // if (error.response && error.response.status === 403) {
    //   history.push(LOGIN_URL);
    // }

    if (error.response) {
      return Promise.reject(error.response);
    }
    if (error.request) {
      return Promise.reject(error.request);
    }
    return Promise.reject(error.message);
  }
);

/**
 * @author: exe
 * @description: normal request
 * @params: {endpoint} : url api
 * @params: {method} : method
 * @params: {body} : body request
 * @params: {params} : parame on url
 * @params: {cancelToken} : cancel request token
 */
export async function fetchApi(
  endpoint: string,
  method:
    | 'get'
    | 'GET'
    | 'delete'
    | 'DELETE'
    | 'head'
    | 'HEAD'
    | 'options'
    | 'OPTIONS'
    | 'post'
    | 'POST'
    | 'put'
    | 'PUT'
    | 'patch'
    | 'PATCH'
    | 'purge'
    | 'PURGE'
    | 'link'
    | 'LINK'
    | 'unlink'
    | 'UNLINK'
    | undefined = 'GET',
  body: any,
  params: any = {},
  sourceToken?: CancelToken
) {
  return instanceNext({
    method: method,
    url: endpoint,
    data: body,
    params: params,
    cancelToken: sourceToken
  });
}

export async function fetchAllApi(requests = []) {
  return axios.all(requests);
}
