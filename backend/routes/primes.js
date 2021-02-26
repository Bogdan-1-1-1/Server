import express from 'express'
import nthPrime from '../methods/primes.js'

const route = express.Router();

route.get('/primes/:n', (req, res) =>{
    const result = nthPrime(req.params.n || 0)
    res.send(result);
})

route.post('/primess', (req, res)=> {
    const result = nthPrime(req.body.n || 0)
    res.send(result);
})

export default route;