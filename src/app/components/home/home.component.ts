import { Component, OnInit, ViewChild, ElementRef, Renderer, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }
  canvas: HTMLElement;
  animatedDiv: HTMLElement;
  dotWidth: number;
  dotHeight: number;
  dotPositionX: number;
  dotPositionY: number;
  divSet1: NodeListOf<Element>;
  tempDiv: ElementRef;

  @ViewChild('content') content: ElementRef;

  ngOnInit() {
    this.canvas = this.content.nativeElement;
    this.animatedDiv = this.canvas.querySelector('.dot');
    this.dotWidth = this.animatedDiv.offsetWidth;
    this.dotHeight = this.animatedDiv.offsetHeight;
    this.dotPositionX = this.animatedDiv.offsetLeft;
    this.dotPositionY = this.animatedDiv.offsetTop;
console.log(this.dotWidth);
    for (let i = 0; i <= 20; i++) {
      let circle1, circle2;
      circle1 = this.renderer.createElement('div');
      circle2 = this.renderer.createElement('div');
      this.renderer.addClass(circle1, 'dot-extend-one');
      this.renderer.addClass(circle2, 'dot-extend-two');
      this.renderer.appendChild(this.canvas, circle1);
      this.renderer.appendChild(this.canvas, circle2);

      // var circle1 = document.createElement('div');
      // var circle2 = document.createElement('div');

      // circle1.classList.add('dot-extend-one');
      // circle2.classList.add('dot-extend-two');

      // this.elRef.nativeElement.querySelector(circle2).classList.add('dot-animation-2');
      // console.log(this.elRef.nativeElement.querySelector('.dot-extend-two'));
      // this.canvas.appendChild(circle1);
      // this.canvas.appendChild(circle2);
      let divSet1: HTMLCollection = this.elRef.nativeElement.getElementsByClassName('dot-extend-one');
      let divSet2: HTMLCollection = this.elRef.nativeElement.getElementsByClassName('dot-extend-two');

      Array.from(divSet1).forEach((el) => {
        const currentWidth: string = this.dotWidth * (Math.random() + 2) + "px";
        this.renderer.setStyle(el, 'background-color', 'transparent');
        this.renderer.setStyle(el, 'border', 'solid 2px #2B2532');
        this.renderer.setStyle(el, 'opacity', Math.random() - 0.1);
        this.renderer.setStyle(el, 'width', currentWidth);
        this.renderer.setStyle(el, 'height', currentWidth);
        this.renderer.setStyle(el, 'z-index', Math.round(Math.random() * 23));
        this.renderer.setStyle(el, 'position', 'absolute');
        this.renderer.setStyle(el, 'left', (100 * Math.random()) * 15 + "px");
        this.renderer.setStyle(el, 'top', 1000 * (Math.random()) + "px");
        this.renderer.addClass(el, 'dot-animation-1');
        // this.renderer.setStyle(el, );
        // this.renderer.setElementProperty(el.nativeElement, 'someProperty', 'someValue');
        // var dd = el.setElementStyle()
        // el.style.backgroundColor = "transparent";//"#FF5733";
        // dd.style.border = "solid 2px #900C3F";
        // dd.style.opacity = "${op}";
        // dd.style.width = this.dotWidth * (Math.random() + 2) + "px";
        // dd.style.height = dd.style.width;
        // dd.style.zIndex = "Math.round(Math.random() * 23)";
        // dd.style.position = "absolute";
        // dd.style.left = (this.dotPositionX * Math.random()) * 15 + "px";
        // dd.style.top = this.dotPositionY * (Math.random()) + "px";
        // dd.classList.add("dot-animation-1");
        //  console.log(el);
        // console.log(dd.style.zIndex);
      });
      Array.from(divSet2).forEach((el) => {
        const currentWidth: string = this.dotWidth * (Math.random() + 2) + "px";
        this.renderer.setStyle(el, 'background-color', '#594375');
        this.renderer.setStyle(el, 'opacity', Math.random() - 0.1);
        this.renderer.setStyle(el, 'width', currentWidth);
        this.renderer.setStyle(el, 'height', currentWidth);
        this.renderer.setStyle(el, 'z-index', Math.round(Math.random() * 23));
        this.renderer.setStyle(el, 'position', 'absolute');
        this.renderer.setStyle(el, 'left', (200 * Math.random()) * 15 + "px");
        this.renderer.setStyle(el, 'top', 1000 * (Math.random()) + "px");
        this.renderer.addClass(el, 'dot-animation-2');

        // var d1 = el.cloneNode() as HTMLElement;
        // // this.renderer.setElementStyle(el, 'backgroundColor', 'yellow');
        // d1.style.backgroundColor = "#594375";
        // d1.style.opacity = "Math.random() - 0.1";
        // d1.style.width = this.dotWidth * (Math.random() + 2) + "px";
        // d1.style.height = d1.style.width;
        // d1.style.zIndex = "Math.round(Math.random() * 25)";
        // d1.style.position = "absolute";
        // d1.style.left = (this.dotPositionX * Math.random()) * 15 + "px";
        // d1.style.top = this.dotPositionY * (Math.random()) + "px";
        // // d1.classList.add("dot-animation-2");
        // var elems = document.getElementsByClassName('dot-extend-two');

        // console.log(this.elRef.nativeElement.querySelector('.dot-extend-two'));
        // this.tempDiv = elems[0];
        // elem.className += " dot-animation-2";
        // this.renderer.setElementClass(this.elRef.nativeElement.querySelector('.dot-extend-two'), 'dot-animation-2', true);
      });

    }
  }
  ngAfterViewInit() {



    //let elements = this.canvas.nativeElement.querySelector('.content');
    // console.log(this.animatedDiv.offsetWidth);

    //var animatedDiv = document.querySelector('.dot');
    //this.canvas.nativeElement.insertAdjacentHTML('beforeend', '<div class="two">two</div>');
  }
}
