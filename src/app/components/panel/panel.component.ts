import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  isMobile: any;

  constructor(private readonly bpO:BreakpointObserver) { }

  ngOnInit(): void {
    this.bpO.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait,
      Breakpoints.Small,
      Breakpoints.XSmall
    ]).subscribe((res: { matches: any; }) => {this.isMobile = res.matches})
  }

}
