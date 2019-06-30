import axios from "axios";

const API = axios.create({
  baseURL: "http://develop.planoaeventos.com.br/api"
});

API.interceptors.request.use(async config => {
  // const token = await localStorage.getItem("@tokenMalta");
  // if (token) config.headers.authorization = `Bearer ${token}`;

  config.headers["Access-Control-Allow-Origin"] = "*";
  // config.headers["Access-Control-Allow-Credentials"] = "true";
  // config.headers["Content-type"] = "application/json; charset=UTF-8";
  config.headers["Access-Control-Allow-Methods"] = "GET,PUT,POST,DELETE";

  return config;
});

API.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    return Promise.resolve(error.response);

    // if (400 === error.response.status) {
    //   return Promise.resolve(error.response);
    // }

    // // if (401 === error.response.status) {
    // //   localStorage.clear();
    // //   window.onload();
    // // }

    // return Promise.reject(error.response);
  }
);

export default API;
