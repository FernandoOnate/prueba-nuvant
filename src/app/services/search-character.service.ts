import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '@enviroment/enviroment';
import { delay } from 'rxjs';
import { Results } from '../inferfaces/characters-res';

interface State {
  info: object,
  characters: Array<any>,
  loading: boolean,
  notFound:string
}
@Injectable({
  providedIn: 'root'
})
export class SearchCharacterService {

  constructor() { }
  private http = inject(HttpClient);

  private _result = signal<State>({
    info: {},
    characters: [],
    loading: false,
    notFound:''
  });

  public loading = computed(() => this._result().loading);
  public characters = computed(() => this._result().characters);
  public notFound = computed(() => this._result().notFound);

  public getByName(name: string) {

    this._result.set({
      info: {},
      characters: [],
      loading: true,
      notFound:''
    });

    this.http.get<Results>(environment.API_URL + `/?name=${name}`).pipe(delay(500)).subscribe({
      next: response => {
        this._result.set({
          info: response.info,
          characters: response.results,
          loading: false,
          notFound:''

        })

      },
      error:error=>{
        console.log(error.message)
        this._result.set({
          info: {},
          characters: [],
          loading: false,
          notFound:'No hay resultados'
        })
      }
    })

  }

  getEpisodeById(id:number){
    
  }
}
