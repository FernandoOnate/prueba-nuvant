import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'dialog-animations-example-dialog',
  styles:`
  button {
    margin-right: 8px;
  }`,
  template: `
  <h2 mat-dialog-title>Campos incorrectos</h2>
  <mat-dialog-content>
    Por favor vuelve a intentarlo.
  </mat-dialog-content>
  <mat-dialog-actions>
    <button mat-button mat-dialog-close style="background-color:orange; color:white">Ok</button>
  </mat-dialog-actions>`,
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent,MatDialogModule],
})
export class GenericDialog {
  constructor(public dialogRef: MatDialogRef<GenericDialog>) { }
}
