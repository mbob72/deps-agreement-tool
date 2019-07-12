import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-pack-show]',
  templateUrl: './pack-show.component.html',
  styleUrls: ['./pack-show.component.css']
})
export class PackShowComponent implements OnInit {

  @Input()
  pack: any

  constructor() { }

  ngOnInit() {
  }

}
