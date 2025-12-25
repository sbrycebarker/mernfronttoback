const mongoose = require('mongoose');
const config = require('config');

// Use environment variable in production, config file in development
const db = process.env.MONGO_URI || config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('mongoDB Connected...')
    } catch(err) {
        console.error(err.message)

        process.exit(1)
    }
}

module.exports = connectDB;