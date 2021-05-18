const { Router } = require('express');
const router = Router();

const path = require('path');
const { unlink } = require('fs-extra');

const Login = require('../models/Login');

router.get('/', async (req, res) => {
    const Login = await Login.find().sort('-_id');
    res.json(Login);
});

router.post('/', async (req, res) => {
    const { nombre, correo, contraseña} = req.body;
  
    const newLogin = new Login({nombre, correo, contraseña});
    console.log(newLogin)
    await newLogin.save();
    res.json({'message': 'Login Saved'});
});

router.delete('/:id', async (req, res) => {
    const Login = await Login.findByIdAndDelete(req.params.id);
    res.json({message: 'login Deleted'});
});


module.exports = router;