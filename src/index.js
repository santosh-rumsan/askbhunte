import bullion from "./modules/bullion";
import nepse from "./modules/nepse";
import vegetable from "./modules/vegetable";

import schemas from "./schemas";
import ApiService from "./utils/apiService";

class client {
  constructor(config) {
    const service = new ApiService({
      url: config.endpoint
    });

    let cfg = { service };

    this.Bullion = new bullion(cfg);
    this.Nepse = new nepse(cfg);
    this.Vegetable = new vegetable(cfg);
  }
}

export const Schemas = schemas;

export const Client = client;
