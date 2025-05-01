const { Owner } = require('../models');

// GET semua owner
const daftarOwner = async (req, res) => {
  try {
    const owners = await Owner.findAll();
    res.status(200).json({
      message: "Berhasil mendapatkan daftar owner",
      data: owners
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal mendapatkan daftar owner",
      error: error.message
    });
    console.log(error);
  }
};

// GET detail owner by ID
const detailOwner = async (req, res) => {
  try {
    const owner = await Owner.findByPk(req.params.id);
    res.status(200).json({
      message: "Berhasil mendapatkan data owner",
      data: owner
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal mendapatkan data owner",
      error: error.message
    });
    console.log(error);
  }
};

// POST tambah owner
const tambahOwner = async (req, res) => {
  try {
    const { nama, email } = req.body;
    const owner = await Owner.create({ nama, email });
    res.status(201).json({
      message: "Berhasil menambahkan owner",
      data: owner
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menambahkan owner",
      error: error.message
    });
    console.log(error);
  }
};

// PUT ubah owner
const ubahOwner = async (req, res) => {
  try {
    const updated = await Owner.update(req.body, {
      where: { id: req.params.id }
    });
    res.status(200).json({
      message: "Berhasil mengubah data owner",
      data: updated
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengubah data owner",
      error: error.message
    });
    console.log(error);
  }
};

// DELETE hapus owner
const hapusOwner = async (req, res) => {
  try {
    const deleted = await Owner.destroy({
      where: { id: req.params.id }
    });
    res.status(200).json({
      message: "Berhasil menghapus data owner",
      data: deleted
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menghapus data owner",
      error: error.message
    });
    console.log(error);
  }
};

module.exports = {
  daftarOwner,
  detailOwner,
  tambahOwner,
  ubahOwner,
  hapusOwner
};
