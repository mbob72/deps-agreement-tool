import { Component, OnInit, Input } from '@angular/core';
import { names } from '../config'

@Component({
  selector: 'app-one-app-deps',
  templateUrl: './one-app-deps.component.html',
  styleUrls: ['./one-app-deps.component.css']
})
export class OneAppDepsComponent implements OnInit {
  firstRole = names[0]
  secondRole = names[1]
  @Input()
  title;
  @Input()
  name;

  dependencies;
  devDependencies;


  constructor() { }

  getFile(event) {
    const { dependencies, devDependencies } = JSON.parse(event)
    this.dependencies = JSON.stringify(dependencies, null, '\t')
    this.devDependencies = JSON.stringify(devDependencies, null, '\t')
  }
  ngOnInit() {
  }

}
