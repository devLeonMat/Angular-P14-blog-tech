import {NgModule} from "@angular/core";
import {NavbarComponent} from "./navbar/navbar.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    RouterModule
  ]
})
export class SharedModule {
}
