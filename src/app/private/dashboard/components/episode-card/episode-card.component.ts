import { Component, inject, Input, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CharDialogComponent } from '../char-dialog/char-dialog.component';
import { SearchCharacterService } from '@services/search-character.service';

interface CharState {
  character: object,
  loading: boolean
}
@Component({
  selector: 'app-episode-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDialogModule, CharDialogComponent],
  templateUrl: './episode-card.component.html',
  styleUrl: './episode-card.component.scss'
})
export class EpisodeCardComponent {
  @Input() characterName: string = ''
  @Input() characterImage: string = ''
  @Input() id: string = ''

  private _characterResult = signal<CharState>({
    character: {},
    loading: false
  });

  constructor(public dialog: MatDialog) { }

  private scs: SearchCharacterService = inject(SearchCharacterService);

  showDialog() {
    this.scs.getById(this.id).subscribe({
      next: res => {

        const mdc = new MatDialogConfig();
        mdc.data = res
        const dialogRef = this.dialog.open(CharDialogComponent);
        dialogRef.componentInstance.mdc = mdc;

      },
      error: err => {
        console.log(err.message);
      }
    })


    // dialogRef.afterClosed().subscribe(result => {
    // console.log(`Dialog result: ${result}`);
    // });

  }
}
