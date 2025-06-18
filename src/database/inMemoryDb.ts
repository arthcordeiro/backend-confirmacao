// src/database/inMemoryDb.ts

import { IConfirmation } from '../models/Confirmation'; // Corrigido o caminho relativo
import { v4 as uuidv4 } from 'uuid'; // Para gerar IDs únicos

interface InMemoryDB {
    confirmations: IConfirmation[];
    addConfirmation(data: Omit<IConfirmation, 'id' | 'timestampConfirmacao'>): IConfirmation;
    getAllConfirmations(): IConfirmation[];
}

const db: InMemoryDB = {
    confirmations: [], // Array onde as confirmações serão armazenadas

    addConfirmation(data) {
        const newConfirmation: IConfirmation = {
            id: uuidv4(), // Gera um ID único
            ...data,
            timestampConfirmacao: new Date().toISOString(), // Adiciona o timestamp
        };
        this.confirmations.push(newConfirmation);
        return newConfirmation;
    },

    getAllConfirmations() {
        return [...this.confirmations]; // Retorna uma cópia para evitar modificações externas
    }
};

export default db;