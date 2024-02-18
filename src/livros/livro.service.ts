import { Injectable } from "@angular/core";
import { Livro } from "./livro.model";
import { delay, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LivroService {
    obterLivros(): Livro[]{
        return [
            {
                id: 1,
                nome: "Harry Potter"
            },

            {
                id: 2,
                nome: "Hobbit"
            }
        ];
    }

    obterLivrosApi(){
        return of(this.obterLivros())
        .pipe(delay(1000));
    }
}