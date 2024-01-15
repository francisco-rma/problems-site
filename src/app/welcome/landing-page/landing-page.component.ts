import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as p5 from 'p5';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  private p5: any;

  title = 'Welcome'
  c: any = [];
  sw: any = 2;
  strokeColor: any = 0;
  canvas: any;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createCanvas();
  }

  clearCanvas() {
    this.createCanvas();
  }

  createCanvas() {
    const sketch = (s: p5) => {
      s.setup = () => {
        let canvas2 = s.createCanvas(s.windowWidth - 200, s.windowHeight - 200);
        // creating a reference to the div here positions it so you can put things above and below
        // where the sketch is displayed
        canvas2.parent('sketch-holder');

        s.background(255);
        s.strokeWeight(this.sw);

        this.c[0] = s.color(148, 0, 211);
        this.c[1] = s.color(75, 0, 130);
        this.c[2] = s.color(0, 0, 255);
        this.c[3] = s.color(0, 255, 0);
        this.c[4] = s.color(255, 255, 0);
        this.c[5] = s.color(255, 127, 0);
        this.c[6] = s.color(255, 0, 0);

        s.rect(0, 0, s.width, s.height);

        s.stroke(this.c[this.strokeColor]);
      };

      s.draw = () => {
        if (s.mouseIsPressed) {
          if (s.mouseButton === s.LEFT) {
            s.line(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY);
          } else if (s.mouseButton === s.CENTER) {
            s.background(255);
          }
        }
      };

      s.mouseReleased = () => {
        // modulo math forces the color to swap through the array provided
        this.strokeColor = (this.strokeColor + 1) % this.c.length;
        s.stroke(this.c[this.strokeColor]);
        console.log(`color is now ${this.c[this.strokeColor]}`);
      };

      s.keyPressed = () => {
        if (s.key === 'c') {
          window.location.reload();
        }
      };
    };

    this.canvas = new p5(sketch);
  }

  drawing = function (p: any) {
    // f5 setup
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight).parent('gear-clock-canvas');
      p.angleMode(p.DEGREES);
      p.rectMode(p.CENTER);
      p.background(0);
    };
    p.center = { x: 0, y: 0 };
    // f5 draw
    p.draw = () => {

      p.background(0);
      p.center.x = p.width / 2;
      p.center.y = p.height / 2;

      let hr = p.hour();
      let mn = p.minute();
      let sc = p.second();
      let ms = p.millis();

      p.push();

      p.translate(p.center.x, p.center.y);
      p.rotate(-90);

      p.strokeWeight(8);
      p.noFill();

      // dail
      p.stroke(175);
      p.arc(0, 0, 210, 210, 0, 360);



      // second
      let sc_end = p.map(sc % 60, 0, 60, 0, 360);

      p.push();
      p.rotate(sc_end);
      p.stroke(255, 0, 0);
      p.line(0, 0, 90, 0);
      p.pop();


      // minute
      let mn_end = p.map(mn % 60, 0, 60, 0, 360);
      p.push();
      p.rotate(mn_end);
      p.stroke(0, 230, 0);
      p.line(0, 0, 70, 0);
      p.pop();


      // hour
      let hr_end = p.map(hr % 12, 0, 12, 0, 360);
      p.push();
      p.rotate(hr_end);
      p.stroke(0, 0, 230);
      p.line(0, 0, 50, 0);
      p.pop();


      // center
      p.fill(255);
      p.noStroke();
      p.ellipse(0, 0, 8, 8);

      p.pop();


      let clock = hr + ':' + mn + ':' + sc;
      p.fill(255);
      p.noStroke();
      p.textSize(14);
      p.text(clock, 100, 50);


    };

  };
}
