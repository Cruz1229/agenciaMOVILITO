import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor(
    private router: Router
  ) {}

  path(path:string)
  {
    if (path == 'home')
      this.router.navigate(['/']);
    else
      this.router.navigate(['/'+path]);
  }

}
