import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http: HttpClient) {
    this.getAbout().subscribe(data => {
      // console.log(data);
    })
  }

  public getAbout(): Observable<any> {
    return this.http.get("./assets/json/about.json");
  }

}
