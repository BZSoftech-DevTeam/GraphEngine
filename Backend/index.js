const express = require('express');
const cors = require('cors');
const router = require('./router/router');
const server = express();

server.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

require("dotenv").config({ path: "./config.env" })
require('./database/connection')

server.use(express.json({ limit: '50mb' }));
server.use(express.urlencoded({ limit: '50mb', extended: true }));

server.use('/api/', router);

server.get('/', (req, res) => {
    res.status(200).send('👋Welcome to Dummy Server');
});

const Port = 8910;
server.listen(Port, () => {
    console.log(`🖥️  =================== Server Initiated at Port# ${Port} =================== 🖥️`);
});