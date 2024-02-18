import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Livro } from '../livros/livro.model';
import { LivroService } from '../livros/livro.service';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { livroActions } from '../livros/state/livro.actions';
import { livrosSelectors } from '../livros/state/livro.selector';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'livraria_ngrx';
  store = inject(Store);

  livroService = inject(LivroService);
  livros$ = this.store.select(livrosSelectors);
  valorInput = '';

  ngOnInit(): void {
    this.store.dispatch(livroActions.carregarLivros());
  }

  adicionarLivro() {
    this.store.dispatch(livroActions.adicionarLivro(
      {
        id: 1,
        nome: this.valorInput
      }
    ));
  }
}
