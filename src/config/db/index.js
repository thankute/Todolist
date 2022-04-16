const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/NodeJS');
        console.log("Connect successfully");
    } catch (error) {
        console.log("Connected fail");
    }
}

module.exports = {connect}
