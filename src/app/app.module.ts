import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewALLComponent } from './view-all/view-all.component';
import { ViewAllRegisterPaginationComponent } from './view-all-register-pagination/view-all-register-pagination.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SeeComponent } from './see/see.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DeleteUsersComponent } from './delete-users/delete-users.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    ViewALLComponent,
    ViewAllRegisterPaginationComponent,
    SeeComponent,
    PaginationComponent,
    DeleteUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgxDatatableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
