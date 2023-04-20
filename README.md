# Extrator de distância direto do Google Maps

O google atualmente cobra por consultas para obter distância em km de um ponto ao outro, com essa ferramenta você poderá fazer isso de graça!

Explicação:
O projeto abre uma página em silencioso com o google maps e traça uma rota do ponto A ao ponto B e retorna via API.

Pra usar basta:

Clonar o repositório e executar:

npm install

Após a instalação basta executar:

node server.js

Para utilizar basta fazer uma chamada para api enviando os seguintes dados no body:

Cidade atual;
Endereço atual;
Cidade de destino;
Endereço de destino;

Após essa chamada a API retornará a distância em quilômetros.

Espero que essa ferramenta seja útil para você!

Contribua com melhorias!

Deixarei no código também a collection do postman para testes.

