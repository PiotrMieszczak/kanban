import { TuiRoot } from "@taiga-ui/core";
import { Component, HostBinding } from "@angular/core";

@Component({
  standalone: true,
  imports: [TuiRoot],
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  // TODO theme switching
  @HostBinding('class')
  themeClass = 'theme theme-light'
}
