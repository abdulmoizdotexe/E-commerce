const express = require('express');
const multer = require('multer');
const path = require('path');
const {showCreateProducts, createProducts, showProducts} = require('../controllers/products')
const router = express.Router();

router.get('/create', showCreateProducts);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve('./public/uploads'))
    },
    filename: function (req, file, cb) {
      const fileName =`${Date.now()}-${file.originalname}`
      cb(null, fileName)
    }
  })
  
const upload = multer({ storage: storage })

router.post('/create', upload.single('imageUrl') ,createProducts);
router.get('/show', showProducts);
module.exports = router;
