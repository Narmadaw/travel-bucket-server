const express = require('express')
const router = express.Router()
const multer = require('multer')

const storage = multer.diskStorage({
    destination:(req, file, cb) =>{
        cb(null, 'public/user-avatar')
    },
    filename:(req, file, cd) =>{
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage})




const knex = require("knex")(require('../knexfile'))


//POST : NEW USER
const addNewUser = async (req, res) =>{
    const {username, password, user_avatar} = req.body
    console.log(username,password)
}

module.exports = {
    addNewUser,
}


