import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-episode-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './episode-card.component.html',
  styleUrl: './episode-card.component.scss'
})
export class EpisodeCardComponent {
  @Input() characterName: string = ''
  @Input() characterImage: string = ''
}
