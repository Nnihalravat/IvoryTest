import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserformRoutingModule } from './userform-routing.module';
import { UserformComponent } from './userform.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserformComponent
  ],
  imports: [
    CommonModule,
    UserformRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class UserformModule { }
