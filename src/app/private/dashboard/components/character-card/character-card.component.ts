import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss'
})
export class CharacterCardComponent {

  @Input() characterName: string = ''
  @Input() characterImage: string = ''

}
