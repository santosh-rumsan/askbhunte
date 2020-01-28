const schema = {
  name: {
    type: String,
    required: true,
    unique: true
  },
  group: String,
  unit: String,
  min: Number,
  max: Number,
  price: { type: Number, required: true }
};

class Vegetable {
  constructor(cfg) {
    Object.assign(this, cfg);
    this.schema = schema;
  }
}

export default Vegetable;
