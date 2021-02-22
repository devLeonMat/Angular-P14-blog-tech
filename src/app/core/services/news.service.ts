import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private headers: HttpHeaders = new HttpHeaders();
  private newUrl = '';
  private apiKey = '4b108cc47c484cbc820bfb808fa53e16';
  private newsApi = 'http://newsapi.org/v2/top-headlines';


  constructor(private http: HttpClient) {
  }

  getNews(): Observable<any> {
    const params = new HttpParams()
      .set('country', 'mx')
      .set('category', 'business')
      .set('apiKey', this.apiKey);
    return this.http.get(this.newsApi, {params});
  }


}
