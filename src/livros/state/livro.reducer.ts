import { createReducer, on } from "@ngrx/store";
import { Livro } from "../livro.model";
import { livroActions } from "./livro.actions";

enum LivroStatus {
    loading = 'loading',
    pending = 'pending',
    error   = 'error',
    success = 'success',
}

// Interface do estado de livros da aplicação
export interface LivroState {
    livros: Livro[],
    error: '' | null,
    status: LivroStatus
}

// Valores default do meu livroState
const initialState: LivroState = {
    error: null,
    status: LivroStatus.pending,
    livros: []
}

/*
    initialState: Primeiro parâmetro é os valores default.

    createReducer(currentState, on()):
        - Fará a transição dos estados.
        - currentState -> Valor default do nosso state.
        - on() -> Esse função é do core do ngrx.

    on(): [Esse função é do core do ngrx] - Será a função que fará o tratamento de uma ação. Passamos o action e a função que será executada.
        - Essa função precisa do currentState
        - Essa função precisa retornar o mesmo tipo de objeto que a interface que define o state.
        - O retorno dessa função é colocada dentro do store.

*/
export const livroReducer = createReducer(
    initialState,
    on(livroActions.carregarLivros, (currentState) => {
        return {
            ...currentState,
            status: LivroStatus.loading
        };
    }),

    /*
        Aqui temos acesso a 'livros', pois retornamos ele do Create Action
    */
    on(livroActions.livrosCarregadosSucesso, (currentState, livrosObj) => {
        return {
            ...currentState,
            livros: livrosObj.livros,
            status: LivroStatus.success
        }
    }),

    on(livroActions.adicionarLivro, (currentState, livroObj: Livro) => {
        return {
            ...currentState,
            livros: [
                ...currentState.livros,
                livroObj
            ]
        };
    })
);