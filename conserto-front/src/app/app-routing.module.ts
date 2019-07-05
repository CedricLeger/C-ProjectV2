import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginUserComponent } from './components/login-user/login-user.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
