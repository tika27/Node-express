const orm = require('../config/orm');

const burger = {
    selectAll(cb) {
        orm.selectAll("burgers", (res) => cb(res));
    },
    insertOne(column, value, cb) {
        orm.insertOne("burgers", column, value, (res) => cb(res));
    },
    updateOne(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, (res) => cb(res)); 
    },
}

module.exports = burger;