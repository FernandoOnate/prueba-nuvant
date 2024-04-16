import { Component, EventEmitter, Output, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  public mfaAction(event: Event): void {
    console.log(this.mfaForm.valid)
    if (this.mfaForm.valid) {

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
