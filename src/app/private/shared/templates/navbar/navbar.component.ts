import { Component } from '@angular/core';
import { routes } from '../../../../app.routes';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(){}

  public links = routes.map(
    route => route.children ?? []
  ).flat().filter(
    route => route && route.path && !route.path?.includes(':')
  );

}
