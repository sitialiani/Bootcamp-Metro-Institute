const express = require('express');
const router = express.Router();
const ownerController = require('../controllers/ownerController');
const petController = require('../controllers/petController');

router.get('/owner', ownerController.daftarOwner);
router.get('/owner/:id', ownerController.detailOwner);
router.post('/owner', ownerController.tambahOwner);
router.put('/owner/:id', ownerController.ubahOwner);
router.delete('/owner/:id', ownerController.hapusOwner);


router.get('/pet', petController.daftarPet);
router.get('/pet/:id', petController.detailPet);
router.post('/pet', petController.tambahPet);
router.put('/pet/:id', petController.ubahPet);
router.delete('/pet/:id', petController.hapusPet);

module.exports = router;
