const { Router } = require('express');
const router = Router();
/*
const path = require('path');
const { unlink } = require('fs-extra');
*/
const Registrar_comunidad = require('../models/Registrar_comunidad');

router.get('/', async (req, res) => {
    const Registrar_comunidad = await Registrar_comunidad.find().sort('-_id');
    res.json(Registrar_comunidad);
});

router.post('/', async (req, res) => {
    const { nombre, correo, contraseña, confirmar_contraseña } = req.body;
    const newRegistrar_comunidad = new Registrar_comunidad({nombre, correo, contraseña, confirmar_contraseña});
    console.log(newRegistrar_comunidad)
    await newRegistrar_comunidad.save();
    res.json({'message': 'Registrado a la comunidad'});
});
/*
router.delete('/:id', async (req, res) => {
    const Registrar_comunidad = await Registrar_comunidad.findByIdAndDelete(req.params.id);
    res.json({message: 'Registrar_comunidad Deleted'});
});
*/

module.exports = router;