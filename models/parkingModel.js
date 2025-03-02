const mongoose = require('mongoose');

const parkingSchema = new mongoose.Schema({
  slotArea: {
    type: String,
    required: true
  },
  slotNo: {
    type: Number,
    required: true,
    unique: true
  },
  status: {
    type: String,
    enum: ['available', 'occupied'],
    default: 'available'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  }
}, { timestamps: true });

const Parking = mongoose.model('Parking', parkingSchema);

// module.exports = Parking;
