import { Component, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SearchCharacterService } from '@services/search-character.service';
import { EpisodeCardComponent } from '../components/episode-card/episode-card.component';

@Component({
  selector: 'app-episode-detail',
  standalone: true,
  imports: [MatProgressSpinnerModule,EpisodeCardComponent],
  templateUrl: './episode-detail.component.html',
  styleUrl: './episode-detail.component.scss'
})
export default class EpisodeDetailComponent {
  public scs:SearchCharacterService = inject(SearchCharacterService);
  episodeChanging(event:any){
    const value = +event.target.value;
    this.scs.getEpisodeById(value);
  }
}
