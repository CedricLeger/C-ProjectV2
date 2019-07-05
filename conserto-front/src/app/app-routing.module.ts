import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WelcomePageComponent } from "./components/welcome-page/welcome-page.component";
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'welcome', component: WelcomePageComponent },
  { path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
