import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


import{NzSpinModule} from 'ng-zorro-antd/spin';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NzSpinModule, NzLayoutModule, NzMenuModule, RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'myapp';
}
