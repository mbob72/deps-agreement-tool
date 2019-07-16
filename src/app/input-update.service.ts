import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputUpdateService {

  inputs = {
    one: {
      dependencies: null,
      devDependencies: null,
    },
    two: {
      dependencies: null,
      devDependencies: null
    }
  }

  constructor() { }

  getInputs(name, dep, el, instance) {
    this.inputs[name][dep] = { el, instance }
  }

  setVals(data) {
    const pointers = [
      this.inputs.one.dependencies,
      this.inputs.one.devDependencies,
      this.inputs.two.dependencies,
      this.inputs.two.devDependencies
    ]
    const helper = data => data ? JSON.stringify(data, null, '\n') : ''
    const datas = [
      helper(data.one.dependencies),
      helper(data.one.devDependencies),
      helper(data.two.dependencies),
      helper(data.two.devDependencies),
    ]
    pointers.map((pointer, ind) => {
      pointer.instance.jsonVal = datas[ind]
    })
  }
}
