const express = require('express');
const app = express();

app.use(express.json());

// Rota para o ESP32 enviar a telemetria (A mesma URL que o ESP32 usa)
app.post('/functions/receiveTelemetry', (req, res) => {
    console.log("Dados recebidos da Estufa:", req.body);
    // Aqui você pode salvar no banco de dados ou processar depois
    res.status(200).json({ status: "success", received: true });
});

// Rota básica para testar se o servidor está online no navegador
app.get('/', (req, res) => {
    res.send("Servidor TabacoControl Rodando com Sucesso!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});