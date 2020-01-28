const schema = {
  symbol: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
};

class Bullion {
  constructor(cfg) {
    Object.assign(this, cfg);
    this.schema = schema;
  }

  async get(symbol) {
    if (!symbol) return this.service.get("/bullion/current");
    else return this.service.get("/bullion/" + symbol);
  }
}

export default Bullion;
