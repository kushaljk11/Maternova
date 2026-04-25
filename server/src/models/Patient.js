import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    age: Number,
    pregnancyWeek: Number,
    contactNumber: String,
    address: String
  },
  { timestamps: true }
);

export default mongoose.model('Patient', patientSchema);
