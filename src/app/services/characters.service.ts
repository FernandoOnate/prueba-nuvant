import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '@enviroment/enviroment';
import { Results } from '../inferfaces/characters-res';
import { delay } from 'rxjs';

interface State {
  characters: any;
  info: any;
  loading: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor() {
    // this.getAllCharacters()
  }
  private http = inject(HttpClient);
  public characters = computed(() => this._results().characters);
  public loading = computed(() => this._results().loading);

  private _results = signal<State>({
    info: {},
    characters: [],
    loading: true
  });

  public getAllCharacters() {
    this.http.get<Results>(environment.API_URL).pipe(delay(4000)).subscribe(response => {
      this._results.set({
        info: response.info,
        characters: response.results,
        loading: false
      })
    })
  }
}
