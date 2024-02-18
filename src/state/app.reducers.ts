import { ActionReducerMap } from "@ngrx/store";
import { IAppState } from "./app.state";
import { livroReducer } from "../livros/state/livro.reducer";

/*
    Registrando os reducers.
    Passamos o tipos do store.
*/
export const appReducers: ActionReducerMap<IAppState> = {
    livros: livroReducer
}