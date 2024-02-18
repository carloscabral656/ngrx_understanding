import { createAction, props } from "@ngrx/store";
import { Livro } from "../livro.model";

// Definição das Actions
/*
    props<{}>() -> é um método
        - Ela sempre precisa de uma interface como tipo (INTERFACE)
*/
const carregarLivros = createAction('[Livros] Carregar Livros');
const livrosCarregadosSucesso = createAction('[Livros] Livros Carregados Sucesso', props<{ livros: Livro[] }>());
const adicionarLivro = createAction('[Livros] Adicionar Livros', props<Livro>());

// Exportando nossas Actions
export const livroActions = {
    carregarLivros,
    livrosCarregadosSucesso,
    adicionarLivro
}