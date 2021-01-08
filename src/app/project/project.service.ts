import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseUrl = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getProjects(){
    console.log("GetProjects called.. ");
    return this.http.get<Project[]>(this.baseUrl + "projects");
  }

  getProject(id?: number){
    console.log("GetProject called.. " + id);
    return this.http.get<Project>(this.baseUrl + "projects/" + id);
  }

}
