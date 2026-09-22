import express from 'express';
import {
  createEnquiry,
  getEnquiries,
  getStats,
  getEnquiryById,
  updateEnquiry,
  deleteEnquiry,
  seedDemoEnquiries,
} from '../controllers/enquiryController.js';

const router = express.Router();

// Analytics & statistics
router.get('/stats', getStats);

// Demo seed
router.post('/seed', seedDemoEnquiries);

// Core Enquiry CRUD
router.route('/')
  .post(createEnquiry)
  .get(getEnquiries);

router.route('/:id')
  .get(getEnquiryById)
  .patch(updateEnquiry)
  .delete(deleteEnquiry);

export default router;
