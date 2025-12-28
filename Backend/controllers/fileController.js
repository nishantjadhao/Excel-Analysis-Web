import File from '../models/File.js';
import { parseExcel } from '../utils/excelParser.js';

export const uploadFile = async (req, res) => {
  const parsedData = parseExcel(req.file.buffer);
  const file = await File.create({
    filename: req.file.filename,
    originalname: req.file.originalname,
    data: parsedData,
    uploadedBy: req.user.id,
  });
  res.json({ success: true, file });
};

export const getUserFiles = async (req, res) => {
  const files = await File.find({ uploadedBy: req.user.id });
  res.json(files);
};