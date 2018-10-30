import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

export interface IProject {
  id: number,
  title: string;
  description: string;
  builtwith: string[];
  image?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  constructor(private http: HttpClient) {
    this.getProjects().subscribe(data => {
      console.log(data)
    })
  }

  public getProjects(): Observable<any> {
    return this.http.get("./assets/json/project.json")
  }
}
