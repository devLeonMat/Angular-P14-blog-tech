import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {BlogRouting} from './blog.routing';
import {SharedModule} from "../../shared/shared.module";
import {MatCardModule} from "@angular/material/card";
import { TutorialesComponent } from './tutoriales/tutoriales.component';
import { BlogsComponent } from './blogs/blogs.component';



@NgModule({
  declarations: [
    HomeComponent,
    TutorialesComponent,
    BlogsComponent
  ],
  exports: [
    HomeComponent,
    TutorialesComponent,
    BlogsComponent

  ],
  imports: [
    CommonModule,
    BlogRouting,
    SharedModule,
    MatCardModule
  ]
})
export class BlogModule {
}
