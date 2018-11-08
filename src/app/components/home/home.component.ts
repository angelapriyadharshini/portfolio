import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private renderer: Renderer) { }
  canvas: HTMLElement;
  animatedDiv: HTMLElement;
  dotWidth: number;
  dotHeight: number;
  dotPositionX: number;
  dotPositionY: number;
  divSet1:NodeListOf<Element>;

  @ViewChild('content') content: ElementRef;

  ngOnInit() {
    this.canvas = this.content.nativeElement;
    this.animatedDiv = this.canvas.querySelector('.dot');
    this.dotWidth = this.animatedDiv.offsetWidth;
    this.dotHeight = this.animatedDiv.offsetHeight;
    this.dotPositionX = this.animatedDiv.offsetLeft;
    this.dotPositionY = this.animatedDiv.offsetTop;

    for (let i = 0; i <= 150; i++) { 
      var circle1 = document.createElement('div');
      var circle2 = document.createElement('div');

      circle1.classList.add('dot-extend-one');
        circle2.classList.add('dot-extend-two');
        this.canvas.appendChild(circle1);
        this.canvas.appendChild(circle2);
        this.divSet1 = document.getElementsByClassName('dot-extend-one');
        var divSet2 = document.getElementsByClassName('dot-extend-two');

        Array.from(this.divSet1).forEach((el) => { 
          var dd = el.cloneNode() as HTMLElement;
          dd.style.backgroundColor = "#FF5733";
            dd.style.opacity = Math.random();
            dd.style.width = dotWidth * (Math.random()+1) + "px";
            dd.style.height = dd.style.width;
            dd.style.zIndex = Math.round(Math.random()*23);
            dd.style.position = "absolute";
            dd.style.left = (dotPositionX * Math.random()) * 15 + "px";
            dd.style.top = dotPositionY * (Math.random()) + "px";
            dd.classList.add("dot-animation-1");

        });
        for (const dd of this.divSet1) {
            dd.style.backgroundColor = "#FF5733";
            dd.style.opacity = Math.random();
            dd.style.width = dotWidth * (Math.random()+1) + "px";
            dd.style.height = dd.style.width;
            dd.style.zIndex = Math.round(Math.random()*23);
            dd.style.position = "absolute";
            dd.style.left = (dotPositionX * Math.random()) * 15 + "px";
            dd.style.top = dotPositionY * (Math.random()) + "px";
            dd.classList.add("dot-animation-1");
    }

  }
  ngAfterViewInit() {
    


    //let elements = this.canvas.nativeElement.querySelector('.content');
    console.log(this.animatedDiv.offsetWidth);

    //var animatedDiv = document.querySelector('.dot');
    //this.canvas.nativeElement.insertAdjacentHTML('beforeend', '<div class="two">two</div>');
  }
}
