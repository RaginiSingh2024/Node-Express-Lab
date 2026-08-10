import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import auth from '../middleware/authMiddleware.js';
import { upsertMyProfile, getMyProfile } from '../controllers/profileController.js';

const router = Router();

// ensure uploads directory exists
const uploadsDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname) || '';
    cb(null, `resume-${unique}${ext}`);
  }
});

function fileFilter(req, file, cb) {
  const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  if (allowed.includes(file.mimetype)) cb(null, true); else cb(new Error('Invalid file type'));
}

const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } });

router.get('/me', auth, getMyProfile);
router.post('/me', auth, upload.single('resume'), upsertMyProfile);

export default router;
