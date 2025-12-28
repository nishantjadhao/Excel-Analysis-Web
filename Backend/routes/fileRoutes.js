import express from 'express';
import multer from 'multer';
import { uploadFile, getUserFiles } from '../controllers/fileController.js';
import { protect } from '../middleware/authMiddleware.js';


const router = express.Router();
const upload = multer();

router.post('/upload', protect, upload.single('excel'), uploadFile);
router.get('/myfiles', protect, getUserFiles);
export default router;