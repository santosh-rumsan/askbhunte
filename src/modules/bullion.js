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
    let data = await this.service.get("/bullion/current");
    console.log(data);
  }
}

export default Bullion;
