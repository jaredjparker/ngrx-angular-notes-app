import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { sidebarToggle } from '../../core/actions/core.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private readonly store: Store<{ isTextSidebar: boolean }>) { }

  sidebarToggle() {
    this.store.dispatch(sidebarToggle());
  }

}
