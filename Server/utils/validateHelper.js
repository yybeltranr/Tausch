const {validationResult} = require('express-validator')
const {postUserInfoFromDBNoGoogle} = require('../models/registerUserToDatabase')

const validateResult = (req, res, next) =>{
    try{
        validationResult(req).throw()
        postUserInfoFromDBNoGoogle(req.body)
        return next()
    }
    catch(err){
        res.status(403).send({errors:err.array()})
    }
}

module.exports = {validateResult}