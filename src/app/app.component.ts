import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


import{NzSpinModule} from 'ng-zorro-antd/spin';
import{NzFormModule} from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NzSpinModule, NzLayoutModule, NzMenuModule,NzFormModule,NzButtonModule,NzInputModule, RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'myapp';
}
