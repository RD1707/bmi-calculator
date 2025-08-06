# Calculadora de IMC

Uma aplicação web simples para calcular o Índice de Massa Corporal (IMC) de um usuário com base em seu nome, altura e peso.

## Descrição

Este projeto consiste em um servidor Node.js com Express que fornece uma página HTML com um formulário. O usuário insere seu nome, altura (em metros) e peso (em kg). Após o envio, a aplicação calcula o IMC e retorna uma página com o resultado e a classificação correspondente (ex: Peso adequado, Sobrepeso, etc.), de acordo com as faixas estabelecidas pela OMS.

## Como Executar

1.  **Pré-requisitos**:
    * Ter o [Node.js](https://nodejs.org/) instalado.

2.  **Clone ou baixe este repositório:**
    * Crie uma pasta e coloque os arquivos `index.js` e `index.html` dentro dela.

3.  **Instale as dependências:**
    * Abra o terminal na pasta do projeto e execute o comando:
      ```bash
      npm install express
      ```

4.  **Inicie o servidor:**
    * Ainda no terminal, execute:
      ```bash
      node index.js
      ```

5.  **Acesse a aplicação:**
    * Abra seu navegador e acesse o endereço: `http://localhost:3001`

## Tecnologias Utilizadas

* **Backend**: Node.js, Express.js
* **Frontend**: HTML, CSS