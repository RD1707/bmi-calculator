
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/calcular-imc', (req, res) => {
    const { nome, altura, peso } = req.body;

    const alturaNum = parseFloat(altura);
    const pesoNum = parseFloat(peso);

    if (isNaN(alturaNum) || isNaN(pesoNum) || alturaNum <= 0 || pesoNum <= 0) {
        return res.status(400).send('Valores de altura e peso inválidos.');
    }

    const imc = pesoNum / (alturaNum * alturaNum);

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
        <html>
            <head>
                <title>Resultado do IMC</title>
                <style>
                    body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; text-align: center; }
                    .result { padding: 2rem; border: 1px solid #ccc; border-radius: 8px; background-color: #f9f9f9; }
                </style>
            </head>
            <body>
                <div class="result">
                    <h1>Resultado do IMC</h1>
                    <p>Olá, <strong>${nome}</strong>!</p>
                    <p>Seu IMC é <strong>${imc.toFixed(2)}</strong>.</p>
                    <p>Sua classificação é: <strong>${categoria}</strong>.</p>
                    <a href="/">Calcular novamente</a>
                </div>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});