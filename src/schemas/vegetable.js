export default {
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
