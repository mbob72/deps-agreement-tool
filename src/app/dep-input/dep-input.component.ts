import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ComputeService } from '../compute.service';

@Component({
  selector: 'app-dep-input',
  templateUrl: './dep-input.component.html',
  styleUrls: ['./dep-input.component.css']
})
export class DepInputComponent implements OnInit {
  @Input()
  role;
  @Input()
  name

  @Output()
  jsonEmit = new EventEmitter()

  jsovVal;

  onValChange(event) {
    console.log('val changed::', event.target.value)
    this.computeService.setNewVal({
      number: this.name,
      name: this.role,
      value: event.target.value
    })
  }

  constructor(
    private computeService: ComputeService
  ) { }

  ngOnInit() {
  }

}
