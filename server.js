/**
-**************************FEITO POR:**********************-
-*              Gabriel Santos - Vulgo: @gabi             *-
-*            Modificado em: 20/04/2023 às 13:20          *-
-*    Com grandes poderes vem grandes responsabilidades   *-
-**********************************************************-
-*           Me contate no WhatsApp pelos números:        *-
-*             (11) 91092-1684 | (92) 98128-5787          *-
-**********************************************************-
-*                    Me contate por email:               *-
-*                 dariogabriel2334@gmail.com             *-
-**********************************************************-
-*             Faça uma doação voluntária via PIX         *-
-*                   Celular: (11) 91092-1684             *-
-*                      CPF: 007.284.902-93               *-
-**********************************************************-
*/

const express = require('express');
const app = express();
const router = express.Router();
const objetos = require('./objeto');
const bodyParser = require("body-parser");

app.use("/", router);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;
app.listen(PORT, _ => { console.log('SERVIDOR RODANDO NA PORTA: ' + PORT); });

app.post('/buscar/', (req, res) => {

    let placa = req.body.placa;
    
    objetos.start(placa).then(result => {

        res.send(result);

    });
})




