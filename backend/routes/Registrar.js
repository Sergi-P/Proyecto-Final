const { Router } = require('express');
const router = Router();

const path = require('path');
const { unlink } = require('fs-extra');

const Registrar = require('../models/Registrar');

router.get('/', async (req, res) => {
    const Registrar = await Registrar.find().sort('-_id');
    res.json(Registrar);
});

router.post('/', async (req, res) => {
    const { nombre, correo, contraseña, confirmar_contraseña } = req.body;
  
    const newRegistrar = new Registrar({nombre, correo, contraseña, confirmar_contraseña});
    console.log(newRegistrar)
    await newRegistrar.save();
    res.json({'message': 'Registrado'});
});

router.delete('/:id', async (req, res) => {
    const Registrar = await Registrar.findByIdAndDelete(req.params.id);
    await unlink(path.resolve('./backend/public/' + Registrar.imagePath));
    res.json({message: 'Book Deleted'});
});


module.exports = router;