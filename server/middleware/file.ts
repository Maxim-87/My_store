import multer from "multer";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "static/");
  },
  filename(req, file, cb) {
    cb(null, `${new Date().toISOString()}-${file.originalname}`);
  },
});

const types = ["image/png", "image/jpeg", "image/jpg", "image/svg"];

const fileFilter = (req: any, file: any, cb: any) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

export default multer({ storage, fileFilter });
