// src/index.ts

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Importe o CORS
import apiRoutes from './routes/Routes'; // Importe suas rotas

dotenv.config(); // Carrega as variáveis de ambiente do .env

const app = express();
const PORT = process.env.PORT || 3001;
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:3000'; // Origem do seu frontend

// Middleware para habilitar CORS
app.use(cors({
    origin: CORS_ORIGIN, // Permite requisições apenas da origem do seu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
}));

app.use(express.json()); // Middleware para parsear JSON no corpo das requisições

// Prefixo para as rotas da API
app.use('/api', apiRoutes);

// Rota de teste simples
app.get('/', (req, res) => {
    res.send('API de Confirmação de Eventos rodando!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Aguardando requisições do frontend em: ${CORS_ORIGIN}`);
});