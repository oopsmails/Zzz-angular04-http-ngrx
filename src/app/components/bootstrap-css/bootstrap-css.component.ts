import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-bootstrap-css',
  templateUrl: './bootstrap-css.component.html',
  styleUrls: ['./bootstrap-css.component.css']
})
export class BootstrapCssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $(".progress-bar").animate({
      width: "100%"
    }, 5000);
  }

}
