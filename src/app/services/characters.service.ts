import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '@enviroment/enviroment';
import { delay } from 'rxjs';

interface State {
  characters: any;
  loading: boolean;
  arrayLength:number,
}
@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private _results = signal<State>({
    characters: [],
    loading: true,
    arrayLength:0,
  });

  private http = inject(HttpClient);
  public characters = computed(() => this._results().characters);
  public loading = computed(() => this._results().loading);
  public charactersLength = computed(()=>this._results().arrayLength)

  public IDsArray = signal([]);

  public searchByPage(pageIndex: number, count: number) {
    const perPage = 10;
    pageIndex = pageIndex + 1;

    const limit = Math.round(count / perPage);

    if (pageIndex > limit) {
      return '';

    } else {
      const maxElements = perPage * pageIndex;
      const minIdData = (maxElements - perPage) + 1;

      let ids = '';

      for (let index = minIdData; index <= maxElements; index++) {
        ids += index + ',';
      }

      return ids;
    }


  }

  public getByIds(ids:string) {
    this._results.set({
      characters:[],
      loading:true,
      arrayLength:0
    });
    this.http.get<any>(environment.API_URL+`/${ids}`).pipe(delay(500)).subscribe(response => {

      this._results.set({
        characters: response,
        loading: false,
        arrayLength:response.length,
      })
    })

  }

  // public getAllCharacters() {
  //   this.http.get<Results>(environment.API_URL).pipe(delay(500)).subscribe(response => {

  //     this._results.set({
  //       info: {
  //         count: response.info.count,
  //         perPage: 10,
  //         next: response.info.next,
  //         prev: response.info.prev,
  //         pages: Math.round(response.info.count / 10),
  //         pagesRaw: response.info.pages,
  //         lastPage: response.info.next == null,
  //         firstPage: response.info.prev == null,
  //         page: this.currentPage()
  //       },
  //       characters: response.results,
  //       loading: false,

  //     })
  //   })
  // }
}
