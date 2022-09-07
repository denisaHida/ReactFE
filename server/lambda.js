const express = require("express");
const cors = require("cors");
const router = require("./controllers")
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
app.use(cors({
	origin: ["https://qc3ne77n9g.execute-api.eu-west-1.amazonaws.com/dev"],
	methods: ["GET", "POST", "PUT"],
	credentials: true
}));
app.use((req, _, next)=>{
	console.log(`${req.method}  ${req.path}`);
	next();
})
app.use(cookieParser());
app.use(bodyParser.json());
// logger
app.use((req, _, next)=>{
	console.log(`${req.method}  ${req.path}`);
	next();
})


app.use(router);


app.set('port', process.env.PORT || 3001);

module.exports = app;
