import { Component, OnInit } from '@angular/core';
import {BlogsService} from "../../../../core/services/blogs.service";
import {BlogModels} from "../../../../core/models/blog.models";



@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogModels: BlogModels = new BlogModels();

  constructor( private blogsService:BlogsService) { }

  ngOnInit(): void {
    this.loadBlogs();
  }

loadBlogs(){
    this.blogsService.getBlogs().subscribe(resp =>{
      this.blogModels= resp;
    })

}
}
