import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../enviroment/enviroment';

@Component({
  selector: 'app-mfa',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatDividerModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './mfa.component.html',
  styleUrl: "./mfa.component.scss"
})
export class MfaComponent {
  public mfaForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) { }

  public showErrorMessage = signal(false);
  public showCodeErrorMessage = signal(false);

  ngOnInit(): void {
    this.mfaForm = this.fb.group({
      code_number1: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
      code_number2: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
      code_number3: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
      code_number4: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
      code_number5: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
      code_number6: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
    });
  }

  /**
   * funcion para cambiar de foco cuando se escribe o se borra un numero en los inputs de mfa code
   * @param {Event} event
   */
  public moveToNextInput(event: Event) {

    const input: any = event.target;
    if (input.value.length === 1) {
      const nextInput = input.nextElementSibling;
      if (nextInput) {
        nextInput.focus();
      }
    } else if (input.value.length === 0) {
      const prevInput = input.previousElementSibling;
      if (prevInput) {
        prevInput.focus();
      }
    }
  }

  /**
 * Descripción de la función completa.
 *
 * @param {Event} event - El objeto de evento.
 * @return {void} Esta función no devuelve ningún valor.
 */
  public mfaAction(event: Event): void {

    const form = this.mfaForm.controls;
    let totalStringCode:string = '';

    if (this.mfaForm.valid) {

      totalStringCode =
      form['code_number1'].value +
      form['code_number2'].value +
      form['code_number3'].value +
      form['code_number4'].value +
      form['code_number5'].value +
      form['code_number6'].value;

      if(totalStringCode === environment.MFACODE){
        location.href = '';
      }else{
        this.showCodeErrorMessage.update(value => true);
      }

    } else {
      this.showErrorMessage.update(value => !value);
      setTimeout(() => {
        this.showErrorMessage.update(value => !value);
      }, 2000);
    }
  }

  public confirmMFACode() {

  }

}
