import express from 'express';
import { 
  createStudent, 
  getStudents, 
  getStudentById 
} from '../controllers/studentController.js';

const router = express.Router();

router.post('/', createStudent);
router.get('/', getStudents);
router.get('/:id', getStudentById);

export default router;

ls -R

    //how to check the path
    /**
     * 
     * 
     * dbdemo/routes/studentRoutes.js
     * dbdemo/controllers/studentController.js
     * 
     * 
     * import { createStudent, getStudents, getStudentById } from '../controllers/studentController.js';
     * 
     * 
     */