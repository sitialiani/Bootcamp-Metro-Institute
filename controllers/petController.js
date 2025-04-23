// Data dummy langsung di dalam controller
const pets = [
    {
      id: 1,
      name: 'Juju',
      type: 'Kucing',
      breed: 'Persia',
      age: 2,
      gender: 'Betina',
      owner: 'Siti'
    },
    {
      id: 2,
      name: 'Biba',
      type: 'Anjing',
      breed: 'Golden Retriever',
      age: 4,
      gender: 'Jantan',
      owner: 'Mira'
    },
    {
      id: 3,
      name: 'Lily',
      type: 'Kelinci',
      breed: 'Anggora',
      age: 1,
      gender: 'Betina',
      owner: 'Risa'
    }
  ];
  
  const getAllPets = (req, res) => {
    res.json(pets);
  };
  
  const getPetById = (req, res) => {
    const id = parseInt(req.params.id);
    const pet = pets.find(p => p.id === id);
  
    if (pet) {
      res.json(pet);
    } else {
      res.status(404).json({ message: 'Hewan tidak ditemukan' });
    }
  };
  
  const createPet = (req, res) => {
    const { name, type, breed, age, gender, owner } = req.body;
    const newPet = {
      id: pets.length + 1,
      name,
      type,
      breed,
      age,
      gender,
      owner
    };
    pets.push(newPet);
    res.status(201).json(newPet);
  };
  
  const updatePet = (req, res) => {
    const id = parseInt(req.params.id);
    const petIndex = pets.findIndex(p => p.id === id);
  
    if (petIndex !== -1) {
      const { name, type, breed, age, gender, owner } = req.body;
      pets[petIndex] = { id, name, type, breed, age, gender, owner };
  
      res.json({
        message: 'Hewan berhasil diperbarui',
        data: pets[petIndex]
      });
    } else {
      res.status(404).json({ message: 'Hewan tidak ditemukan' });
    }
  };
  
  const deletePet = (req, res) => {
    const id = parseInt(req.params.id);
    const index = pets.findIndex(p => p.id === id);
  
    if (index !== -1) {
      const deletedPet = pets.splice(index, 1);
      res.json({
        message: 'Hewan berhasil dihapus',
        data: deletedPet[0]
      });
    } else {
      res.status(404).json({ message: 'Hewan tidak ditemukan' });
    }
  };
  
  module.exports = {
    getAllPets,
    getPetById,
    createPet,
    updatePet,
    deletePet
  };
  