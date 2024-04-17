import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '@enviroment/enviroment';
import { delay } from 'rxjs';
import { Episode } from '../inferfaces/episode';

interface State {
  loading: boolean;
  notFound: string;
  characters: Array<any>;
  id: number;
  created: string;
  episode: string;
  air_date: string;
  name: string;
  url: string;
}
@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor() { }

  private http = inject(HttpClient);

  private _episodeResult = signal<State>({
    id: 0,
    loading: false,
    notFound: '',
    characters: [],
    created: "",
    episode: "",
    air_date: "",
    name: "",
    url: "",
  });

  public loadingEpisode = computed(() => this._episodeResult().loading);
  public episode = computed(() => {
    return {
      episode: this._episodeResult().episode,
      id: this._episodeResult().id,
      crated: this._episodeResult().created,
      air_date: this._episodeResult().air_date,
      name: this._episodeResult().name,
      url: this._episodeResult().url,

    }
  });
  public characters = computed(() => this._episodeResult().characters);
  public notFound = computed(() => this._episodeResult().notFound);

  getEpisodeById(id: number) {
    this._episodeResult.set({
      id: 0,
      loading: true,
      notFound: '',
      characters: [],
      created: "",
      episode: "",
      air_date: "",
      name: "",
      url: "",
    });
    this.http.get<Episode>(environment.API_URL_EPISODE + `/${id}`)
      .pipe(delay(500))
      .subscribe({
        next: response => {

          let charactersIds = '';

          for (const urlString of response.characters) {
            const parts = urlString.split('/');
            charactersIds += String(parts[parts.length - 1]) + ',';
          }

          this.http.get<any>(environment.API_URL + `/${charactersIds}`).subscribe({
            next: res => {

              this._episodeResult.set({

                id: response.id,
                created: response.created,
                episode: response.episode,
                air_date: response.air_date,
                name: response.name,
                url: response.url,
                characters: res,
                loading: false,
                notFound: ''
              });

            },
            error: err => {

            }
          });

        },
        error: error => {
          console.log(error.message);
          this._episodeResult.set({
            loading: false,
            notFound: 'No hay resultados',
            id: 0,
            created: "",
            episode: "",
            air_date: "",
            name: "",
            url: "",
            characters: [],
          });
        }
      });
  }
}
