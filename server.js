const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

/* CONFIG */

app.use(cors());

app.use(express.json());

/* ROTA */

app.post("/financiamento", async (req, res) => {

const {
nome,
email,
telefone,
moto
} = req.body;

try{

/* EMAIL */

const transporter = nodemailer.createTransport({

service:"gmail",

auth:{

user:"tavaresmotors01@gmail.com",

pass:"pqdk ywvh cibn zkwo"

}

});

/* MENSAGEM */

await transporter.sendMail({

from:"tavaresmotors01@gmail.com",

to:"tavaresmotors01@gmail.com",

subject:"Novo financiamento solicitado",

html:`

<div style="font-family:Arial;padding:20px">

<h2>
Novo financiamento solicitado
</h2>

<p>
<b>Nome:</b> ${nome}
</p>

<p>
<b>Email:</b> ${email}
</p>

<p>
<b>Telefone:</b> ${telefone}
</p>

<p>
<b>Moto:</b> ${moto}
</p>

</div>

`

});

/* SUCESSO */

res.status(200).send("Email enviado");

}catch(error){

console.log(error);

res.status(500).send("Erro ao enviar email");

}

});

/* SERVIDOR */

app.listen(3000, () => {

console.log("Servidor rodando na porta 3000");

});