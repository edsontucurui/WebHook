const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configuração do body-parser para lidar com dados JSON
app.use(bodyParser.json());

// Rota para receber Webhooks (apenas aceita solicitações POST)
app.post('/webhook', (req, res) => {
  // Obtenha os dados do corpo da solicitação
  const data = req.body;

  // Faça algo com os dados do Webhook (por exemplo, imprimir no console)
  console.log('Webhook recebido:', data);

  // Responda ao serviço externo para confirmar o recebimento
  res.status(200).send('Webhook recebido com sucesso');
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
