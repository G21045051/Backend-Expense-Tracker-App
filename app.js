// // app.js
const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const { readdirSync } = require('fs');
const app = express();

app.get("/",(req,res)=>{
    res.send("Server is ready");
})

require('dotenv').config();

const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(cors());

//routes
readdirSync('./routes').map(route => app.use('/api/v1', require('./routes/' + route)));

const server = () => {
    db();
    app.listen(PORT, () => {
        console.log('listening to port:', PORT);
    });
};

server();


// const express = require('express');
// const cors = require('cors');
// const { db } = require('./db/db');
// const { readdirSync } = require('fs');
// const app = express();

// app.get("/",(req,res)=>{
//     res.send("Server is ready");
// })
// require('dotenv').config();

// const PORT = process.env.PORT || 3000; // Changed to 3001

// //middlewares
// app.use(express.json());
// app.use(cors());

// //routes
// readdirSync('./routes').map(route => app.use('/api/v1', require('./routes/' + route)));

// const server = () => {
//     db();
//     app.listen(PORT, () => {
//         console.log('listening to port:', PORT);
//     });
// };

// // Error handling
// process.on('uncaughtException', (error) => {
//     console.error('Uncaught Exception:', error);
//     process.exit(1); // Exit the process to avoid an undefined state
// });

// process.on('unhandledRejection', (reason, promise) => {
//     console.error('Unhandled Rejection at:', promise, 'reason:', reason);
//     process.exit(1); // Exit the process to avoid an undefined state
// });

// server();
