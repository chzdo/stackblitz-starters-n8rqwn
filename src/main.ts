import 'zone.js/dist/zone';
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.html',
})
export class App implements OnInit, AfterViewInit {
  @ViewChild('video') vid!: any;
  name = 'Angular';
  constructor() {}
  ngOnInit() {
    if (this.vid) {
      this.vid.controls = false;
    }
  }
  ngAfterViewInit() {
    this.vid.nativeElement.controls = false;
  }
}

bootstrapApplication(App);
