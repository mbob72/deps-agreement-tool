import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit  } from '@angular/core';
import { ComputeService } from '../compute.service';
import { InputUpdateService } from '../input-update.service';

import {ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dep-input',
  templateUrl: './dep-input.component.html',
  styleUrls: ['./dep-input.component.css']
})
export class DepInputComponent implements AfterViewInit {
  @Input()
  role
  @Input()
  name
  @Input()
  set jsonVal(value) {
    this._jsonVal = value
    setTimeout( () => this.onValChange({target: { value }}), 0);
  }

  get jsonVal() {
    return this._jsonVal
  }
  private _jsonVal

  @ViewChild('inputElem', null)
  el: ElementRef;

  onValChange(event) {
    this.computeService.setNewVal({
      number: this.name,
      name: this.role,
      value: event.target.value
    })
  }

  constructor(
    private computeService: ComputeService,
    private inputUpdateService: InputUpdateService,
    private rd: Renderer2
  ) { }

  ngAfterViewInit() {
    this.inputUpdateService.getInputs( this.name, this.role, this.el.nativeElement, this)
  }

}
