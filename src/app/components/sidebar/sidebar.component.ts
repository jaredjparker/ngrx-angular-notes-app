import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent{

  sidebarItems = [
    {
      name: 'Notes',
      icon: 'fas fa-lightbulb'
    }, 
    {
      name: 'Reminders',
      icon: 'fas fa-bell'
    }, 
    {
      name: 'Edit Labels',
      icon: 'fas fa-pen'
    }, 
    {
      name: 'Archive',
      icon: 'fas fa-arrow-alt-circle-right'
    }, 
    {
      name: 'Trash',
      icon: 'fas fa-trash'
    }
  ]

  isTextSidebar$: Observable<boolean>;

  constructor(private readonly store: Store<{ isSidebarText: boolean }>) {
    this.isTextSidebar$ = store.pipe(select('isSidebarText'));
   }


}
