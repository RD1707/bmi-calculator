const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/calcular-imc', (req, res) => {

    const nome = req.body.nome;
    const altura = parseFloat(req.body.altura);
    const peso = parseFloat(req.body.peso);

    const imc = peso / (altura * altura);

    let categoria = '';
    if (imc < 18.5) { 
        categoria = 'Baixo peso';
    } else if (imc < 25) {
        categoria = 'Peso adequado';
    } else if (imc < 30) {
        categoria = 'Sobrepeso';
    } else if (imc < 35) {
        categoria = 'Obesidade (grau I)';
    } else if (imc < 40) {
        categoria = 'Obesidade (grau II)';
    } else {
        categoria = 'Obesidade (grau III)';
    }

    res.send(`
        <h1>Olá, ${nome}!</h1>
        <p>Seu IMC é <strong>${imc.toFixed(2)}</strong>.</p>
        <p>Sua classificação é: <strong>${categoria}</strong>.</p>
        <a href="/">Calcular novamente</a>
    `);
});

app.listen(3001, () => {
    console.log('Servidor funcionando. Acesse http://localhost:3001');
});