const { User } = require('../models');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Kullanıcılar getirilemedi.' });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'Kullanıcı bulunamadı.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Kullanıcı getirilemedi.' });
    }
};

exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Kullanıcı oluşturulamadı.' });
    }
};
