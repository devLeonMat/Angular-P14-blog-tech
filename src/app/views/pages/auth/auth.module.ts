import {NgModule} from '@angular/core';
import {RegisterComponent} from './register/register.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthRoutingModule} from './auth.routing';
import {MatCardModule} from '@angular/material/card';
import {LoginComponent} from './login/login.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent

  ],
  exports: [
    RegisterComponent,
    LoginComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AuthRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: []
})

export class AuthModule {

}

