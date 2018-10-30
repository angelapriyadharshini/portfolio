import { Component, OnInit } from '@angular/core';
import { ProjectService, IProject } from '../../services/project-service/project.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: IProject[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data.projects;
      console.log(this.projects);
    })
  }
}
