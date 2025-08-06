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
    if (imc < 16) {
        categoria = 'Baixo peso (grau I)';
    } else if (imc >= 16 && imc <= 16.99) {
        categoria = 'Baixo peso (grau II)';
    } else if (imc >= 17 && imc <= 18.49) {
        categoria = 'Baixo peso (grau III)';
    } else if (imc >= 18.5 && imc <= 24.99) {
        categoria = 'Peso adequado';
    } else if (imc >= 25 && imc <= 29.99) {
        categoria = 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.99) {
        categoria = 'Obesidade (grau I)';
    } else if (imc >= 35 && imc <= 39.99) {
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