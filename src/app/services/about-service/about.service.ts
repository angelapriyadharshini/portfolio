import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface IAbout {
  firstname: string;
  lastname: string;
  title:string;
  stack:string[];
  summary1: string;
  summary2: string;
  summary3: string;
  backend: string[];
  bframeworks:string[];
  frontend:string[];
  fframeworks:string[];
  dbskills:string[];
  versioncontrol:string[];
  apps:string[];
  other:string[];
  profileimage:string;
  cvlink:string;
}

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http: HttpClient) {
    this.getAbout().subscribe(data => {
      console.log(data);
    })
  }

  public getAbout(): Observable<any> {
    return this.http.get("./assets/json/about.json");
  }

}
