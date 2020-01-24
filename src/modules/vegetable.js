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
  constructor() {
    this.schema = schema;
  }

  add(payload) {}
}

export default new Vegetable();
