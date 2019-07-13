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
    console.warn('before pass to input, data::', data)
    const pointers = [
      this.inputs.one.dependencies,
      this.inputs.one.devDependencies,
      this.inputs.two.dependencies,
      this.inputs.two.devDependencies
    ]
    const datas = [
      data.one.dependencies ? JSON.stringify(data.one.dependencies) : '',
      data.one.devDependencies ? JSON.stringify(data.one.devDependencies) : '',
      data.two.dependencies ? JSON.stringify(data.two.dependencies) : '',
      data.two.devDependencies ? JSON.stringify(data.two.devDependencies) : ''
    ]
    pointers.map((pointer, ind) => {
      pointer.el.value = datas[ind]
      pointer.instance.onValChange({ target: { value: datas[ind] } } )
    } )
  }
}
