import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewALLComponent } from './view-all/view-all.component';
import { ViewAllRegisterPaginationComponent } from './view-all-register-pagination/view-all-register-pagination.component';
import { SeeComponent } from './see/see.component';
import { DeleteUsersComponent } from './delete-users/delete-users.component';

const routes: Routes =
  [
    { path: 'users', loadChildren: () => import('./userform/userform.module').then(m => m.UserformModule) },
    { path: 'viewall', component: ViewALLComponent, title: 'ViewAll' },
    { path: 'viewallreg', component: ViewAllRegisterPaginationComponent },
    { path: 'see', component: SeeComponent },
    { path: 'deleteRegs', component: DeleteUsersComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
