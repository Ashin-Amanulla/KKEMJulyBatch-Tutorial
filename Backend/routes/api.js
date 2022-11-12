const express = require('express')
const { findById } = require('../models/student')
const router = express.Router() //routing function
const DATA = require('../models/student') // DB of student





// students full list read 
router.get('/studentlist', async (req, res) => {

    try {

        const list = await DATA.find()
        res.send(list)


    } catch (error) {
        console.log(error)
    }

})


// student add 

router.post('/student', async (req, res) => {
    try {

        console.log(req.body)
        let item = {  //to fetch and save data from front end in server
            name: req.body.name,
            age: req.body.age
        }


        const newStudent = new DATA(item) //to check incoming data
        const saveStudent = await newStudent.save() //mongoDB save

        res.send(saveStudent)


    } catch (error) {

        console.log(error)
    }
})


// student delete 

router.delete('/student/:id', async (req, res) => {
    try {
        let id = req.params.id
        const deleteStudent = await DATA.findByIdAndDelete(id)
        res.send(deleteStudent)


    } catch (error) {
        console.log(error)

    }
})


// student update 


router.put('/student', async (req, res) => {
    try {

        let id = req.body.id
        let item = {  //to fetch and save data from front end in server
            name: req.body.name,
            age: req.body.age
        }
        let updateData = { $set: item }
        let updateStudent = await DATA.findByIdAndUpdate({ 'id': id }, updateData)
        res.send(updateStudent)
    } catch (error) {
        console.log(error)

    }
})


// Single student detail 


router.get('/student/:id', async (req, res) => {
    try {

        let id = req.params.id
        const singleStudent = await DATA.findById(id)
        res.send(singleStudent)

    } catch (error) {
        console.log(error)

    }
})







module.exports = router