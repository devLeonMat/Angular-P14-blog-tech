import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private headers: HttpHeaders = new HttpHeaders();
  private  blogUrl ='';
  private apikey ='4b108cc47c484cbc820bfb808fa53e16';
  private blogApi = 'http://newsapi.org/v2/top-headlines';

  constructor( private http: HttpClient) {
  }
getBlogs():Observable<any>{
    const params = new HttpParams()
      .set('sources','techcrunch')
      .set('apiKey',this.apikey);


  return this.http.get(this.blogApi,{params});

}
}
