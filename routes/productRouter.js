const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path');


const productController = require('../controllers/productController')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/products')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})
const upload = multer({
    storage: storage
})


router.get('/', productController.catalogo);
router.get('/productCreate', productController.creacion);
router.get('/productDetail/:id', productController.detalle);
router.post('/productCreate', productController.almacenar); //post cambiado por mariano//
router.get('/productEdit', productController.edicion);
router.put('/productEdit/:id', productController.actualizar);
router.delete('/delete/:id', productController.borrado);

module.exports = router;

