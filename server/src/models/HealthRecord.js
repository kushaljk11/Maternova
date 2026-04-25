import mongoose from 'mongoose';

const healthRecordSchema = new mongoose.Schema(
  {
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    bloodPressure: String,
    glucose: Number,
    hemoglobin: Number,
    symptoms: [String],
    riskLevel: { type: String, default: 'low' },
    recordedAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export default mongoose.model('HealthRecord', healthRecordSchema);
