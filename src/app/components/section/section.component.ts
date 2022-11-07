import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements AfterViewInit {
  @Input() isMobile: boolean = false;
  images = [
    {path: 'src/assets/images/weed-1.jpg'},
    {path: 'src/assets/images/weed-5.jpg'},
  ]
  constructor() { }

  ngAfterViewInit(): void {
    var element = document.getElementById('myVideo') as HTMLVideoElement;
    element.muted = true;
  }
}
