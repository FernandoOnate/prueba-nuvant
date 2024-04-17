import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-char-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './char-dialog.component.html',
  styleUrl: './char-dialog.component.scss'
})
export class CharDialogComponent {
  public mdc: any;
  public charName = '';
  public charStatus = '';
  public charSpecies = '';
  public charGender = '';
  public charType = '';
  public charImage = '';
  public charEpisodes= '';

  ngOnInit() {
    this.charName = this.mdc.data.name
    this.charStatus = this.mdc.data.status
    this.charSpecies = this.mdc.data.species
    this.charGender = this.mdc.data.gender
    this.charType = this.mdc.data.type
    this.charImage = this.mdc.data.image
    this.charEpisodes = this.mdc.data.episode
  }
}
