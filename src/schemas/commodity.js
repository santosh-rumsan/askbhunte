export default {
  symbol: {
    type: String,
    unique: true,
    required: true
  },
  name: {
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
