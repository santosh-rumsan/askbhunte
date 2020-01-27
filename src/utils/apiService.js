//import fetch from "node-fetch";
const fetch = require("node-fetch");

class APIService {
  constructor(cfg) {
    Object.assign(this, cfg);
    this.debugMode = this.debugMode || false;
  }

  async request(options) {
    if (typeof options == "string") options = { path: options };
    const url = options.url || `${this.url}${options.path}`;
    if (options.body) options.body = JSON.stringify(options.body);

    options.method = options.method || "GET";
    options.useAccessToken = options.useAccessToken || true;
    options.headers = options.headers || {};

    options.headers["content-type"] = "application/json";
    //if (options.useAccessToken)
    //  options.headers["access_token"] = localStorage.getItem("access_token");

    let res = await fetch(url, options);
    if (!res.ok) return this.badResponse(res);
    let json = await res.json();
    return json;
  }

  get(options) {
    if (typeof options == "string") options = { path: options };
    return this.request(options);
  }

  post(options) {
    options.method = "POST";
    return this.request(options);
  }

  put(options) {
    options.method = "PUT";
    return this.request(options);
  }

  delete(options) {
    if (typeof options == "string") options = { path: options };
    options.method = "DELETE";
    return this.request(options);
  }

  patch(options) {
    options.method = "PATCH";
    return this.request(options);
  }

  notImplemented(name) {
    Notify.warning(`${name} is not implemented`);
  }

  async badResponse(res) {
    console.log(res);
    let message = res.statusText;
    //throw Error(message);
  }
}

export default APIService;
