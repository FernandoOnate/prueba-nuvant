import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/templates/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule,NavbarComponent],
  templateUrl: './dashboard.component.html',

})
export default class DashboardComponent {

}
