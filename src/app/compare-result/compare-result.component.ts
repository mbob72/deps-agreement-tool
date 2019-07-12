import { Component, OnInit } from '@angular/core';
import { ComputeService } from '../compute.service';
@Component({
  selector: 'app-compare-result',
  templateUrl: './compare-result.component.html',
  styleUrls: ['./compare-result.component.css']
})
export class CompareResultComponent implements OnInit {

  constructor(
    public computeService: ComputeService
  ) { }

  ngOnInit() {
  }

}
