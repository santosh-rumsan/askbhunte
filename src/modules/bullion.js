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

class Commodity {
  constructor() {
    this.schema = schema;
  }

  add(payload) {}
}

export default new Commodity();
