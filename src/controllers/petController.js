const { Pet, Owner } = require('../models');

// GET semua pet
const daftarPet = async (req, res) => {
  try {
    const pets = await Pet.findAll({ include: Owner });
    res.status(200).json({
      message: "Berhasil mendapatkan daftar pet",
      data: pets
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal mendapatkan daftar pet",
      error: error.message
    });
    console.log(error);
  }
};

// GET detail pet by ID
const detailPet = async (req, res) => {
  try {
    const pet = await Pet.findByPk(req.params.id, { include: Owner });
    res.status(200).json({
      message: "Berhasil mendapatkan data pet",
      data: pet
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal mendapatkan data pet",
      error: error.message
    });
    console.log(error);
  }
};

// POST tambah pet
const tambahPet = async (req, res) => {
  try {
    const { nama_pet, type, breed, age, gender, owner_id } = req.body;
    const pet = await Pet.create({ nama_pet, type, breed, age, gender, owner_id});
    res.status(201).json({
      message: "Berhasil menambahkan pet",
      data: pet
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menambahkan pet",
      error: error.message
    });
    console.log(error);
  }
};

// PUT ubah pet
const ubahPet = async (req, res) => {
  try {
    const updated = await Pet.update(req.body, {
      where: { id: req.params.id }
    });
    res.status(200).json({
      message: "Berhasil mengubah data pet",
      data: updated
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengubah data pet",
      error: error.message
    });
    console.log(error);
  }
};

// DELETE hapus pet
const hapusPet = async (req, res) => {
  try {
    const deleted = await Pet.destroy({
      where: { id: req.params.id }
    });
    res.status(200).json({
      message: "Berhasil menghapus data pet",
      data: deleted
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menghapus data pet",
      error: error.message
    });
    console.log(error);
  }
};

module.exports = {
  daftarPet,
  detailPet,
  tambahPet,
  ubahPet,
  hapusPet
};
