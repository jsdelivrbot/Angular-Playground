
import {Component} from "@angular/core";

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/warframes" routerLinkActive="active">Warframe</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: [ './app.component.css' ],
})
export class AppComponent {
  title = 'Collection of random stuff';
}
