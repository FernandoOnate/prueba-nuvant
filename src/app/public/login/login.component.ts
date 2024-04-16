import { Component, EventEmitter, Output, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MfaComponent } from './component/mfa/mfa.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../enviroment/enviroment';
import { MatDialogModule, MatDialog, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, } from '@angular/material/dialog';
import { GenericDialog } from '../shared/components/simple-dialog/simple-dialog.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatDividerModule,
    MatButtonModule,
    MfaComponent,
    ReactiveFormsModule,
    MatDialogModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export default class LoginComponent {

  public loginForm: FormGroup = new FormGroup({});

  // para controlar si se muestra o no la contraseña
  public showingPassword = signal(false);
  public passwordType = signal('password');

  // mensaje de error de material al login
  public showErrorMessage = signal(false);

  // para mostrar el componente de mfa
  public showMfaComponent = signal(true);
  public showInvalidCredentials = signal(false);

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  loginAction(event: Event) {

    event.preventDefault();
    const emailInputValue = this.loginForm.controls['email'].value;
    const passwordInputValue = this.loginForm.controls['password'].value;

    if (this.loginForm.valid) {

      if (emailInputValue == environment.EMAIL && passwordInputValue == environment.PASSWORD) {

        this.showMfaComponent.update(value => true);
        this.showInvalidCredentials.update(value => false);

      } else {
        this.showMfaComponent.update(value => false);
        this.openDialog(".4s",".2s");
        this.showInvalidCredentials.update(value => true);

      }

    } else {
      this.showErrorMessage.update(value => true);

      setTimeout(() => {
        this.showErrorMessage.update(value => false);
      }, 2000);

    }
  }

  changeVisibility() {
    this.showingPassword.update(value => !value)

    if (this.passwordType() === 'password') {
      this.passwordType.update(value => 'text');
    } else {
      this.passwordType.update(value => 'password');
    }
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(GenericDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}


