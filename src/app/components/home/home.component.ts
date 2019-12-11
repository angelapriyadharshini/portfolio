import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { AboutService } from 'src/app/services/about-service/about.service';
import { GlobalConstants } from 'src/app/global.constants';
import { About } from '../about/about.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  title: string = GlobalConstants.TITLE;
  dotWidth: number;
  dotHeight: number;
  dotPositionX: number;
  dotPositionY: number;
  about: any = [];
  canvas: HTMLElement;
  animatedDiv: HTMLElement;

  constructor(private aboutService: AboutService, private renderer: Renderer2, private elRef: ElementRef) { }

  // @ViewChild('content') content: ElementRef;

  ngOnInit() {
    this.getAboutData();
    // this.genarateAnimationElements();
    // this.generateAnimation();
  }

  genarateAnimationElements() {
    // this.canvas = this.content.nativeElement;
    this.animatedDiv = this.canvas.querySelector('.dot');
    this.dotWidth = this.animatedDiv.offsetWidth;
    this.dotHeight = this.animatedDiv.offsetHeight;
    this.dotPositionX = this.animatedDiv.offsetLeft;
    this.dotPositionY = this.animatedDiv.offsetTop;
  }

  generateAnimation() {
    for (let i = 0; i <= 20; i++) {
      let circle1: any, circle2: any;
      circle1 = this.renderer.createElement('div');
      circle2 = this.renderer.createElement('div');
      this.renderer.addClass(circle1, 'dot-extend-one');
      this.renderer.addClass(circle2, 'dot-extend-two');
      this.renderer.appendChild(this.canvas, circle1);
      this.renderer.appendChild(this.canvas, circle2);

      const divSet1: HTMLCollection = this.elRef.nativeElement.getElementsByClassName('dot-extend-one');
      const divSet2: HTMLCollection = this.elRef.nativeElement.getElementsByClassName('dot-extend-two');

      Array.from(divSet1).forEach((el) => {
        const currentWidth: string = this.dotWidth * (Math.random() + 2) + 'px';
        this.renderer.setStyle(el, 'background-color', 'transparent');
        this.renderer.setStyle(el, 'border', 'solid 2px #2B2532');
        this.renderer.setStyle(el, 'opacity', Math.random() - 0.1);
        this.renderer.setStyle(el, 'width', currentWidth);
        this.renderer.setStyle(el, 'height', currentWidth);
        this.renderer.setStyle(el, 'z-index', Math.round(Math.random() * 23));
        this.renderer.setStyle(el, 'position', 'absolute');
        this.renderer.setStyle(el, 'left', (100 * Math.random()) * 15 + 'px');
        this.renderer.setStyle(el, 'top', 1000 * (Math.random()) + 'px');
        this.renderer.addClass(el, 'dot-animation-1');
      });
      Array.from(divSet2).forEach((el) => {
        const currentWidth: string = this.dotWidth * (Math.random() + 2) + 'px';
        this.renderer.setStyle(el, 'background-color', '#594375');
        this.renderer.setStyle(el, 'opacity', Math.random() - 0.1);
        this.renderer.setStyle(el, 'width', currentWidth);
        this.renderer.setStyle(el, 'height', currentWidth);
        this.renderer.setStyle(el, 'z-index', Math.round(Math.random() * 23));
        this.renderer.setStyle(el, 'position', 'absolute');
        this.renderer.setStyle(el, 'left', (200 * Math.random()) * 15 + 'px');
        this.renderer.setStyle(el, 'top', 1000 * (Math.random()) + 'px');
        this.renderer.addClass(el, 'dot-animation-2');
      });
    }
  }

  getAboutData() {
    this.aboutService.getAbout().subscribe((data: About) => {
      this.about = data;
    });
  }
}
