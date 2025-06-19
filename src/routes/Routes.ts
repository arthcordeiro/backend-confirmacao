// src/routes.ts

import { Router, Request, Response } from 'express';
import db from '../database/inMemoryDb'; // Importa o banco de dados em memória
import { IConfirmationInput } from '../models/Confirmation';

const router = Router();

// Endpoint para confirmar presença (POST)
router.post('/confirmations', (req: Request, res: Response) => {
    const { nomePrincipal, acompanhantes }: IConfirmationInput = req.body;

    // Validação simples dos dados de entrada
    if (acompanhantes !== undefined && !Array.isArray(acompanhantes)) {
        return res.status(400).json({ message: 'Acompanhantes deve ser um array de strings.' });
    }

    try {
        const newConfirmation = db.addConfirmation({
            nomePrincipal,
            acompanhantes: acompanhantes || [] // Garante que seja um array vazio se não fornecido
        });
        return res.status(201).json(newConfirmation); // 201 Created
    } catch (error) {
        console.error('Erro ao adicionar confirmação:', error);
        return res.status(500).json({ message: 'Erro interno do servidor ao processar a confirmação.' });
    }
});

// Endpoint para listar todas as confirmações (GET)
router.get('/confirmations', (req: Request, res: Response) => {
    const allConfirmations = db.getAllConfirmations();
    return res.status(200).json(allConfirmations);
});

// Endpoint para validar a saude do serviço (GET)
router.get('/health', (req: Request, res: Response) => {
    return res.status(200).json({ message: 'UP' });
});

export default router;