// src/models/Confirmation.ts

export interface IConfirmation {
    id: string; // Um ID único para cada confirmação
    nomePrincipal: string;
    acompanhantes: string[]; // Array de nomes
    timestampConfirmacao: string; // Data e hora da confirmação
}

// Você pode adicionar um tipo para os dados de entrada se forem diferentes
export interface IConfirmationInput {
    nomePrincipal: string;
    acompanhantes?: string[]; // Opcional na entrada
}