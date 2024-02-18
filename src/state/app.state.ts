import { Livro } from "../livros/livro.model";
import { LivroState } from "../livros/state/livro.reducer";

export interface IAppState {
    livros: LivroState,
}