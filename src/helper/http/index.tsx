import axios from 'axios';

function http(config: any) {
  const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/',
    headers: {},
    ...config,
  });

  axiosInstance.interceptors.response.use(
    response => {
      return new Promise(resolve => {
        resolve(response);
      });
    },

    async error => {
      console.log(error.response, 'error');
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
      return Promise.reject(error);
    },
  );

  return axiosInstance;
}

export default http;
