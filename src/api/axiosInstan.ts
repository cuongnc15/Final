import axios from "axios";

const axiosInstan = axios.create ({
    baseURL: 'http://localhost:3000/api/'
})

// Add a request interceptor
axiosInstan.interceptors.request.use(function (config: any) {
    // Do something before request is sent
    config.headers = {
        Authorization : 'bearer jlasjjalsdjlwjdljlk',
        Accept: 'application/json',
        'content-type' : 'application/x-www-form-urlencoded'
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosInstan.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default axiosInstan