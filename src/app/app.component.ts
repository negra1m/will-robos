import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMobile: boolean = false;

  constructor(private readonly bp:BreakpointObserver){}

  ngOnInit(){
    this.bp.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait,
      Breakpoints.Small,
      Breakpoints.XSmall
    ]).subscribe((res: { matches: any; }) => {this.isMobile = res.matches})
  }
}
