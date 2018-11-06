import { Component, OnInit } from '@angular/core';
import { ProjectService, IProject } from '../../services/project-service/project.service';
import { fadeAnimation } from '../../animations';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: IProject[] = [];
  tags: string[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
      console.log(data.tags);
    });
  }
}
