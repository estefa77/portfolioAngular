import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageInfo } from '../interface/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  inf: PageInfo = {};
  loadingPage = false;

  constructor( private http: HttpClient) { 
    
    this.http.get('assets/data/data-page.json')
      .subscribe( (resp: PageInfo) => {

        this.loadingPage = true;
        this.inf = resp;
        console.log(resp);
        // console.log(resp['author_page']);
      });

  }
}
