const express = require("express")
const cors = require ("cors")
const professionalRouters = require ("./routers/profesional.routers")
const professional1Routers = require ("./routers/profesional1.router")
const errorHandlingh = require ("./error/errorHandling")

const app = express();

app.set ("port", process.env.PORT || 3000)

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(professionalRouters);
app.use(professional1Routers);
app.use(function (request, response, next)
{
    response.status(404).json({error: true,
                                codigo: 404,
                                message: "Endpoint doesnt found"})
});

app.use(errorHandlingh);

module.exports = app;