import bullion from "./modules/bullion";
import nepse from "./modules/nepse";
import vegetable from "./modules/vegetable";

import ApiService from "./utils/apiService";

class Client {
  constructor(config) {
    this.test = "test";
    const service = new ApiService({
      url: config.endpoint
    });
    let cfg = { service };

    this.Bullion = new bullion(cfg);
    //this.Nepse = new nepse(cfg);
    // this.Vegetable = new vegetable(cfg);
  }
}

export default Client;
