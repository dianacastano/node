const express = require("express")
const cors = require ("cors")
const professionalRouters = require ("./routers/profe.routers")
const errorHandlingh = require ("./error/errorHandling")

const app = express();

app.set ("port", process.env.PORT || 5000)

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(professionalRouters);
app.use(function (request, response, next)
{
    response.status(404).json({error: true,
                                codigo: 404,
                                message: "Endpoint doesnt found"})
});

app.use(errorHandlingh);

module.exports = app;
