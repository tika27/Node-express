const express = require('express');
const { resourceLimits } = require('worker_threads');

const burger = require('../models/burger');

const router = express.Router();

router.get("/", (req, res) =>{
    burger.selectAll(data => {
        const Object = {
            burger: data
        };
        console.log(Object);
        res.render("index", Object);
    });
});

router.post("/api/burger", (req, res)=>{
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (result) => {
        res.json({ id: resourceLimits.insertId })

    });
});

router.put("/api/burger/:id", (req, res) => {
    console.log("put req starting");
    const condition = `id = ${req.params.id}`;
    console.log('condition', condition);

    burger.updateOne({
            devoured: req.body.devoured
        },

        condition, (result) => {
            console.log("resust complete");
            if (result.changeRows === 0){
                return res.status(404).end()
            }
            return res.status(200).end()
        });
});

module.exports = router;