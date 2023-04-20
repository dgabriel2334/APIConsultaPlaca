# Extrator de distância direto do Google Maps

O google atualmente cobra por consultas para obter distância em km de um ponto ao outro, com essa ferramenta você poderá fazer isso de graça!

Explicação:
O projeto abre uma página em silencioso com uma página de consulta de placas e lê seus elementos e transforma em json para retorno.

Pra usar basta:

Clonar o repositório e executar:

npm install

Após a instalação basta executar:

node server.js

Para utilizar basta fazer uma chamada para api enviando os seguintes dados no body:

Placa;
No formato XXX-XXXX

Após essa chamada a API retornará um Json parecido com.
{
    "Marca": "GM",
    "Modelo": "CELTA 4P SPIRIT",
    "Cor": "Vermelha",
    "Ano de fabricação": "2011",
    "Ano do modelo": "2011",
    "Placa": "NOV1996",
    "Combustível": "Alcool / Gasolina",
    "Nacionalidade": "Nacional"
}
A API usa um site você pode ter uma limitação, cerca de 50 consultas diárias.
Espero que essa ferramenta seja útil para você!

Contribua com melhorias!

Deixarei no código também a collection do postman para testes.

