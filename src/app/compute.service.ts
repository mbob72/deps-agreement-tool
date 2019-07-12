import { Injectable } from '@angular/core';
import { names } from './config';

const startResult = {
  equal: [],
  noIn: [],
  diff: []
};

@Injectable({
  providedIn: 'root'
})
export class ComputeService {
  dependecies = {
    one: {},
    two: {}
  }

  resEqual = []
  resNoIn = []
  resDiff = []

  constructor() { }

  resetResult() {
    this.resEqual = []
    this.resNoIn = []
    this.resDiff = []
  }

  setNewVal({ number, name, value }) {

    this.dependecies[number] = {
      ...(this.dependecies[number] || {}),
      [name]: JSON.parse(value)
    }

    this.compute()
  }

  compute() {
    const one = { ...(this.dependecies.one[names[0]] || {}), ...(this.dependecies.one[names[1]] || {})}
    const two = { ...(this.dependecies.two[names[0]] || {}), ...(this.dependecies.two[names[1]] || {})}

    this.resetResult()

    Object.keys(one).map(pack => {
      if (one[pack] === two[pack]) {
        this.resEqual = this.resEqual.concat(`${pack} version ${one[pack]}`)
        return
      }
      if(!two[pack]) {
        this.resNoIn = this.resNoIn.concat(`${pack} version ${one[pack]}`)
        return
      }

      this.resDiff = this.resDiff.concat(`${pack} version ${one[pack]} / ${two[pack]}`)
    })

    console.warn('new res::', this.resEqual, this.resNoIn, this.resDiff)
  }
}
