import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services/about-service/about.service';
import { GlobalConstants } from 'src/app/global.constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  name: string;
  imagePrefix: string;
  imageExt: string;
  logos: string[] = [];
  about: any = [];
  picture: any;
  skills: any;

  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.aboutService.getAbout().subscribe((data: About) => {
      this.about = data;
      this.imagePrefix = './assets/images/';
      this.imageExt = '.png';
      this.logos = GlobalConstants.ABOUT_PAGE.LOGOS;
    });
  }

  breakDownSkills() {
    const skillStack = this.about.skillStack;
    const skills = [];
    Object.keys(skillStack).forEach(function (obj) {
      skillStack[obj].forEach(element => {
        skills.push(element.trim());
      });
    });
  }

}

export interface About {
  firstName: string;
  lastName: string;
  title: string;
  summary: string;
  profileimageUrl: string;
  skillStack?: any;
}
