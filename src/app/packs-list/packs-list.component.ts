import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-packs-list',
  templateUrl: './packs-list.component.html',
  styleUrls: ['./packs-list.component.css']
})
export class PacksListComponent implements OnInit {
  @Input()
  packs;
  show = false;

  constructor() { }

  toggleShow() {
    this.show = !this.show
  }

  ngOnInit() {
  }

}
