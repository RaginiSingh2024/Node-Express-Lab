import { Router } from 'express';
import { submitContact, listContacts } from '../controllers/contactController.js';
import auth from '../middleware/authMiddleware.js';

const router = Router();

router.post('/', submitContact);
router.get('/', auth, listContacts);

export default router;
