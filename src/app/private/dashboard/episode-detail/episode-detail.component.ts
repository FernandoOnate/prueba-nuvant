import { Component, inject, signal } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SearchCharacterService } from '@services/search-character.service';
import { EpisodeCardComponent } from '../components/episode-card/episode-card.component';
import { EpisodesService } from '@services/episodes.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-episode-detail',
  standalone: true,
  imports: [MatProgressSpinnerModule,EpisodeCardComponent,JsonPipe],
  templateUrl: './episode-detail.component.html',
  styleUrl: './episode-detail.component.scss'
})
export default class EpisodeDetailComponent {

  public scs:SearchCharacterService = inject(SearchCharacterService);
  public es:EpisodesService = inject(EpisodesService);

  episodeChanging(event:any){
    const value = +event.target.value;
    this.es.getEpisodeById(value);
  }

}
