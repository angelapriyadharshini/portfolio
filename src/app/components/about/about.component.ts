import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services/about-service/about.service';
import { GlobalConstants } from 'src/app/global.constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  imagePrefix: string;
  imageExt: string;
  logos: string[] = [];
  about: any = [];
  picture: any;

  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.aboutService.getAbout().subscribe(data => {
      this.about = data;
      this.picture = data.profileimage;
      this.imagePrefix = './assets/images/';
      this.imageExt = '.png';
      this.logos = GlobalConstants.ABOUT_PAGE.LOGOS;
      console.log(this.logos);
    });
  }
}
