import express from 'express'
const router = express.Router();
import User from '../models/User.js'
//import route from './primes.js';

router.get('/', async(req, res) => {
    const users = await User.find()
    res.json(users)
})

router.get('/oneMan', async(req, res) => {
    const man = await User.findOne({gender: "male"})
    res.json(man)
})

router.get('/byId/:_id', async(req, res) => {
    const man = await User.findOne({_id: req.params._id})
    res.json(man)
})

router.get('/endAName', async(req, res) => {
    const enda = await User.find({name: { $regex: ".a$"}})
    res.json(enda)
})

router.delete('/deleteOne', async(req, res) => {
    try {
        const user = await User.deleteOne()
        res.send("delete successful")
    }catch(error) {
        res.send("you made a mistake")
        res.send(error)
    }
})

router.delete('/deleteById/:_id', async(req, res)=>{
    try 
    {
        const user = await User.deleteOne({_id: req.params._id})
        res.send("delete successful")
    }catch(error) {
        res.send("you made a mistake")
        res.send(error)
    }
})

router.delete('/deleteNotAEnd', async(req, res) => {
    try {
        const user = await User.deleteMany({name: { $regex: ".[b-z]$"}})
        res.send("delete successful")
    }catch(error) {
        res.send("you made a mistake")
        res.send(error)
    }
})

router.delete('/deleteKevin', async(req, res) => {
    try {
        const user = await User.deleteMany({interests: "Kevin"})
        res.send("delete successful")
    }catch(error) {
        res.send("you made a mistake")
        res.send(error)
    }
})

router.post('/add', async(req , res) => {
    try {
        const user = await User.create(req.body)
        if(user) {
            res.send(user)
            console.log('Все прошло успешно');
        }
    }catch(error) {
        res.send("Плохо. Переделывай!")
        console.log('Плохо. Переделывай!')
        console.log(error)
    }
})

export default router