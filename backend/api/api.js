const express = require("express");
const router = express.Router();
const models = require("../models");
const Sequelize = require('../models/').sequelize


router.post("/insertEmployee", async (req, res) => {
    let data = req.body
    // if (data.username == "" || data.password == "" || data.email == "") {
    //     res.send("Please input data.")
    //     return
    // }

    let fetchData = await models.Employee.findOne({
        where: { username: data.username },
        raw: true
    })

    if (fetchData == null) {
        await models.Employee.create({
            username: data.username,
            password: data.password,
            email: data.email
        })
        res.send("OK")
    } else {
        res.send("Username has been registered!")
    }
})

router.post("/login", async (req, res) => {
    let data = req.body
    let fetchData = await models.Employee.findOne({
        where: {
            username: data.username,
            password: data.password
        },
        raw: true
    })

    if (fetchData == null) {
        res.send("Username and Password not found.")
    } else {
        res.send("OK")
    }
})

router.get("/getEmployee", async (req, res) => {
    let data = await models.Employee.findAll({ raw: true })
    res.send(data)
})

router.get("/getFood", async(req,res) => {
    let data = await models.Food.findAll({ raw: true })
    res.send(data)
})

router.post("/insertFood",async(req,res) => {
    await models.Food.create({
        name: req.body.name,
        price: req.body.price
    })
    res.send("OK")
})


module.exports = router