import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: '', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
