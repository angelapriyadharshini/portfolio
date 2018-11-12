import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services/about-service/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about: any = [];

  constructor(private aboutService: AboutService ) { }

  ngOnInit() {
    this.aboutService.getAbout().subscribe(data => {
      this.about = data;
      console.log(this.about['firstname']);
    });
  }

}
