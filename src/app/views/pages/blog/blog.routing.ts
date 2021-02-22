import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {TutorialesComponent} from "./tutoriales/tutoriales.component";
import {BlogsComponent} from "./blogs/blogs.component";

const routes: Routes = [
  {path: 'tutoriales', component: TutorialesComponent},
  {path: 'blogs', component: BlogsComponent},

  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRouting {
}
