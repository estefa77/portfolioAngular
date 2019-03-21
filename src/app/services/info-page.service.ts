import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageInfo } from '../interface/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  inf: PageInfo = {};
  loadingPage = false;

  team: any[] = [];

  constructor( private http: HttpClient) { 
    
  this.loadInfo();
  this.loadTeam();
  }

  private loadInfo(){
    this.http.get('assets/data/data-page.json')
      .subscribe( (resp: PageInfo) => {
        this.loadingPage = true;
        this.inf = resp;
      });
  }

  private loadTeam(){
    this.http.get('https://angularportfolio-1d6f5.firebaseio.com/team.json')
    .subscribe( (resp: any) => {

      this.team = resp;
      this.inf = resp;
      // console.log(resp);
    });
  }

  
}
