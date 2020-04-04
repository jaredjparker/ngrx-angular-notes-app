import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { coreReducer } from './reducers/core.reducers';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      core: coreReducer
    }),
    StoreDevtoolsModule.instrument()
  ]
})

export class CoreModule { }
