const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/demoProject',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);