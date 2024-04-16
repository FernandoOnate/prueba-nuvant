import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '@enviroment/enviroment';
import { delay } from 'rxjs';
import { Results } from '../inferfaces/characters-res';

interface State {
  info:object,
  characters: Array<any>,
  loading: boolean,
}
@Injectable({
  providedIn: 'root'
})
export class SearchCharacterService {

  constructor() { }
  private http = inject(HttpClient);

  private _result = signal<State>({
    info:{},
    characters: [],
    loading: false,
  });

  public loading = computed(() => this._result().loading);
  public characters = computed(() => this._result().characters);

  public getByName(name: string) {

    this._result.set({
      info:{},
      characters: [],
      loading: true,
    });

    this.http.get<Results>(environment.API_URL + `/?name=${name}`).pipe(delay(500)).subscribe(response => {
      console.log(response)
      this._result.set({
        info: response.info,
        characters:response.results,
        loading: false,

      })

    })

  }
}
