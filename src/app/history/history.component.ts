import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { ComputeService } from '../compute.service'
import { InputUpdateService } from '../input-update.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  name: string
  history: any

  constructor(
    private storageService: StorageService,
    private computeService: ComputeService,
    private inputUpdateService: InputUpdateService
  ) {
    this.history = storageService.get()
    console.warn('get history::', this.history)
  }

  saveCurrent() {
    if (!this.name) {
      alert('Заполните имя!')
      return
    }
    this.storageService.add({
      name: this.name,
      data: this.computeService.dependecies
    })
  }

  historyClick(data) {
    // console.warn('getting::', ind)
    // const { data } = this.storageService.getByInd(ind)
    this.inputUpdateService.setVals(data)
  }

  ngOnInit() {
  }

}
