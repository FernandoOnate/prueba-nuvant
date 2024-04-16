import { Component, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SearchCharacterService } from '@services/search-character.service';
import { CharacterCardComponent } from '../components/character-card/character-card.component';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [MatProgressSpinnerModule,CharacterCardComponent],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.scss'
})
export default class ItemDetailComponent {

  public scs:SearchCharacterService = inject(SearchCharacterService);
  nameChanging(event:any){
    const value = event.target.value.toLowerCase();
    this.scs.getByName(value);
  }
}
