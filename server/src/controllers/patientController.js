import Patient from '../models/Patient.js';
import HealthRecord from '../models/HealthRecord.js';
import { buildAlertsFromRisk } from '../services/alertService.js';
import { getRecommendations } from '../services/recommendationService.js';

export async function getMyPatientProfile(req, res) {
  const patient = await Patient.findOne({ userId: req.user._id });
  return res.json(patient);
}

export async function createOrUpdatePatientProfile(req, res) {
  const patient = await Patient.findOneAndUpdate(
    { userId: req.user._id },
    { ...req.body, userId: req.user._id },
    { new: true, upsert: true }
  );
  return res.json(patient);
}

export async function addHealthRecord(req, res) {
  const patient = await Patient.findOne({ userId: req.user._id });
  if (!patient) return res.status(404).json({ message: 'Patient profile not found' });

  const record = await HealthRecord.create({ ...req.body, patientId: patient._id });
  const alerts = buildAlertsFromRisk(record.riskLevel);
  const recommendations = getRecommendations(record);

  return res.status(201).json({ record, alerts, recommendations });
}

export async function getMyHealthRecords(req, res) {
  const patient = await Patient.findOne({ userId: req.user._id });
  if (!patient) return res.json([]);

  const records = await HealthRecord.find({ patientId: patient._id }).sort({ recordedAt: -1 });
  return res.json(records);
}
