import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LivroService } from "../livro.service";
import { livroActions } from "./livro.actions";
import { catchError, map, switchMap, tap } from "rxjs";

/*

    1) Actions da aplicação (Os effects ficam olhando as actions) - é um observable
        - As Actions são um observable.
    2) Service necessário para fazer a requisição
    3) [ () -> {} ] - Essa função precisa retornar uma Action
        - Precisamos inscrever nas actions
        - pipe() -> Alteramos (RxJS)
        - ofType() -> NgRx, o que estamos escutando, qual a action que estamos escutando.
        - switchMap() -> Determina qual o que será executado caso executarmos qualquer action.
        - o map() precisamos retornar outra ação, estão precisamos criar outra.
        - Transformar o que veio da resposta da API para uma action.
        */
export const buscarLivroEffect = createEffect(
    (actions$ = inject(Actions), livroService = inject(LivroService)) => {
        return actions$
            .pipe(
                ofType(livroActions.carregarLivros),
                tap(() => {
                    console.log("Passou pelo effect!")
                }),
                switchMap(() => { 
                    return livroService.obterLivrosApi() // Retorna um Observable de Livro
                    .pipe(
                        // O argumento que teremos aqui é o 'livros'
                        // Passamos os valores para a nova ação, que fará a atualização para o reducer
                        // O map() é usado caso der certo
                        map(livros => livroActions.livrosCarregadosSucesso({livros})),
                        
                        // No catchError() teríamos que criar outra action para lidar com isso
                        // No store colocariamos que error: true, status: error
                        //catchError(err => {})
                        
                    )
                })
            );
    },
    {
        functional: true
    }
);