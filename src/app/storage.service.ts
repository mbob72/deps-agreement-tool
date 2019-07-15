import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  nameSpace = 'compareHistory'
  history = []

  constructor() {
    const old = this.get()
    if (old) {
      this.history = old
    } else {
      this.reset()
    }
  }

  getMeta() {
    return this.history.map((item, ind) => [item.name, ind])
  }
  getByInd({ ind }) {
    return this.history[ind]
  }

  delete({ ind }) {
    const current = this.get()
    this.set(current.splice(ind, 1))
  }

  add({ name, data }) {
    const current = this.get()
    this.set(current.concat({ name, data }))
  }

  reset() {
    this.set([])
  }

  set(data: any): void {
    try {
      localStorage.setItem(this.nameSpace, JSON.stringify(data, null, '\n'));
      this.history = data
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  get() {
    try {
      return JSON.parse(localStorage.getItem(this.nameSpace));
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }
}
