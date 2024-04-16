import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
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
import { LoginServiceService } from '@services/login-service.service';
import { User } from '@models/User.model';


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
  public showMfaComponent = signal(false);
  public showInvalidCredentials = signal(false);

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private loginService: LoginServiceService
  ) {}
  // public loginService = inject(LoginServiceService); // se podria asi de la nueva forma

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['prueba@nuvantglobal.com', [Validators.required, Validators.minLength(5), Validators.email]],
      password: ['Nu12345', [Validators.required, Validators.minLength(5)]],
    });
  }

  loginAction(event: Event) {

    event.preventDefault();
    const emailInputValue = this.loginForm.controls['email'].value;
    const passwordInputValue = this.loginForm.controls['password'].value;
    const user = new User();

    if (this.loginForm.valid) {

      user._email = emailInputValue;
      user._password = passwordInputValue;

      const logged = this.loginService.login(user);

      if (logged) {

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


