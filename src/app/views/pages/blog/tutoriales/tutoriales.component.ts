import {Component, OnInit} from '@angular/core';
import {YoutubeService} from "../../../../core/services/youtube.service";
import {Video} from "../../../../core/models/youtube.models";

import Swal from 'sweetalert2'
import {NewsService} from "../../../../core/services/news.service";
import {NewModels} from "../../../../core/models/new.models";

@Component({
  selector: 'app-tutoriales',
  templateUrl: './tutoriales.component.html',
  styleUrls: ['./tutoriales.component.css']
})
export class TutorialesComponent implements OnInit {

  videos: Video[] = [];
  newsModel: NewModels = new NewModels();

  constructor(private youtubeService: YoutubeService,
              private newsService: NewsService) {
  }

  ngOnInit() {

    this.cargarVideos();
    this.loadNews();
  }

  loadNews() {
    this.newsService.getNews().subscribe(resp => {
      this.newsModel = resp;
      // console.log(resp);
    })
  }


  cargarVideos() {

    this.youtubeService.getVideos()
      .subscribe(resp => {
        this.videos.push(...resp);
        console.log(this.videos)
      })

  }

  mostrarVideo(video: Video) {
    Swal.fire({
      html: `
            <h4>${video.title}</h4>
             <iframe
            width="100%" height="315"
             src="https://www.youtube.com/embed/${video.resourceId.videoId}"
             frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>

               </iframe>`
    })
  }


}
