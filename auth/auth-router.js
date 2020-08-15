const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/model');
const newToken = require('./giveToken');
// const { isValidate } = require('../users/validation');

router.post('/register', async (req, res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 10) //10 tells how many times bcrypt runs the hashing algorythm
    user.password = hash;

    try{
        const saved = await Users.add(user);
        res.status(201).json(saved);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/login', (req, res) => {
    let {username, password} = req.body;

    Users.findBy({username})
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            req.session.ser = user; 
            res.status(200).json({message: `Welcome ${user.username}`});
        } else {
            res.status(401).json({message: 'invalid creds'});
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;