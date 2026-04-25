import { Router } from 'express';
import {
  addHealthRecord,
  createOrUpdatePatientProfile,
  getMyHealthRecords,
  getMyPatientProfile
} from '../controllers/patientController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { allowRoles } from '../middleware/roleMiddleware.js';
import { ROLES } from '../constants/roles.js';

const router = Router();

router.use(authMiddleware, allowRoles(ROLES.PATIENT));
router.get('/profile', getMyPatientProfile);
router.put('/profile', createOrUpdatePatientProfile);
router.post('/health-records', addHealthRecord);
router.get('/health-records', getMyHealthRecords);

export default router;
