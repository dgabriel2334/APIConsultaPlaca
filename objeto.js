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

const puppeteer = require("puppeteer");

//nas proximas duas linhas abaixo estou dizendo até quantas requisições essa api pode ter
require('events').EventEmitter.prototype._maxListeners = 70;
require('events').defaultMaxListeners = 70;
//fim
async function start(placa) {

  const browser = await puppeteer.launch({ headless: true, slowMo: 0, args: ['--start-maximized'] }); //CASO NÃO QUEIRA QUE O NAVEGADOR ABRA E SIM RODE EM SILENCIOSO BASTA COLOCAR O headless true
  try {
    const page = await browser.newPage();

    let link = 'https://buscaplacas.com.br/';
    await page.goto(link, {timeout: 0, waitUntil: 'domcontentloaded' });

    await page.waitForSelector('#name-3b55');

    await page.click('#name-3b55');
  
    await page.keyboard.type(placa, { delay: 10 })

    await page.evaluate(() => {
      window.scrollBy(0, 500);
    });
    await page.click('.u-form-submit a');
    const selector = '.u-table-entity.u-table-entity-1';
    await page.waitForSelector(selector);

    // Encontra a tabela e seleciona suas linhas
    const rows = await page.$$('table.u-table-entity-1 tr');

    // Objeto para guardar as informações da tabela
    const tableData = {};

    // Itera sobre todas as linhas da tabela
    var ignorados = ['Logo', 'Marca/Modelo', 'Situação (Roubo/Furto)', 'N° do chassi', 'Município', 'Estado (UF)', 'Submodelo', 'Versão', 'Origem', 'Segmento', 'Sub_segmento', 'Placa Alternativa', 'Sub Segmento', 'Tipo doc faturado', 'Caixa_cambio', 'N° do Motor', 'Estado (UF) faturado', 'Especie', 'Tipo Carroçaria', 'Qtd de passageiros', 'Cilindradas', 'Cap max. Tração', 'Renavam', 'Nome do Proprietário', 'Tipo doc proprietário', 'DOC Parcial do Proprietário'];
    for (const row of rows) {
      // Extrai o texto da primeira célula como chave
      const key = await row.$eval('td:first-child', cell => cell.innerText.trim());
      
      // Extrai o texto da segunda célula como valor
      const value = await row.$eval('td:nth-child(2)', cell => cell.innerText.trim());
      
      // Adiciona as informações ao objeto da tabela
      if (inArray(key, ignorados)) {
        continue;
      }
      tableData[key] = value;
    }

    await browser.close();
    return (convertStringToJson(JSON.stringify(tableData)));
  } catch (error) {
    let erro = {};
    erro.mensagem = 'Erro ao consultar a placa';
    console.log(erro);
    await browser.close();
    return erro;
  }


}

function inArray(value, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

function convertStringToJson(string) {
  // Replace all single quotes with double quotes to make it valid JSON
  const validJsonString = string.replace(/'/g, '"');

  // Parse the valid JSON string into an object
  const jsonObject = JSON.parse(validJsonString);

  return jsonObject;
}


module.exports = { start }
