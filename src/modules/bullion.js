class Bullion {
  constructor(cfg) {
    Object.assign(this, cfg);
  }

  async get(symbol) {
    if (!symbol) return this.service.get("/bullion/current");
    else return this.service.get("/bullion/" + symbol);
  }
}

export default Bullion;
