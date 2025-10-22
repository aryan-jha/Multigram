import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://demotest/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
    'MSCRM.SuppressDuplicateDetection': 'false',
  },
});

axiosInstance.interceptors.request.use(
  async config => {
    config.headers['Ocp-Apim-Subscription-Key'] =
      '03670073ed0144c9b7bd738d8cae7623';
    config.headers['prefer'] = 'return=representation';

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export const setSuppressDuplicateDetection = (suppress: boolean) => {
  axiosInstance.defaults.headers['MSCRM.SuppressDuplicateDetection'] = suppress;
};

axiosInstance.interceptors.response.use(
  response => {
    console.debug(
      `%c[Post-Fetch] Endpoint=${response.config.url}`,
      'color: black;  background: lightgreen;',
      response,
    );
    return response;
  },
  error => {
    console.debug(
      `%c[Error] Endpoint=${error.config.url}`,
      'color: white; background: red;',
      error,
    );
    if (error?.response?.status === 400) {
      throw {statusCode: 400, message: error?.response?.data?.error?.message};
    }
    if (error?.response?.status === 412) {
      throw {statusCode: 412, message: error?.response?.data?.error?.message};
    }
    return error;

  },
);

export const ApiService = {
  async get(url: string, params?: any) {
    return await axiosInstance.get(
      url,
      {params},
    );
  },

  async post(url: string, data: any, params?: any) {
    return await axiosInstance.post(url, data, {params});
  },

  async put(url: string, data: any, params?: any) {
    return await axiosInstance.put(url, data, {params});
  },

  async patch(url: string, data: any, params?: any) {
    return await axiosInstance.patch(url, data, {params});
  },

  async delete(url: string, params?: any) {
    return await axiosInstance.delete(url, {params});
  },
};
