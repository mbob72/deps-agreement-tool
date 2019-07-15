import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-get-file',
  templateUrl: './get-file.component.html',
  styleUrls: ['./get-file.component.css']
})
export class GetFileComponent implements OnInit {
  @Output()
  getFile = new EventEmitter()

  constructor() { }

  openFile(event) {
    let input = event.target;
    let reader = new FileReader();
    reader.onload = () => {
      var text = reader.result
      this.getFile.emit(text)
    }
    reader.readAsText(input.files[0])
  }

  ngOnInit() {
  }

}
