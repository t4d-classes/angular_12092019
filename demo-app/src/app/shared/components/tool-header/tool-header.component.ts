import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tool-header',
  templateUrl: './tool-header.component.html',
  styleUrls: ['./tool-header.component.css']
})
export class ToolHeaderComponent implements OnInit {

  // directive:
  // scope: { headerText: '=' }
  // component:
  // bindings: { headerText: '<' }
  @Input()
  headerText = 'Tool Header'; // initialized to a default value

  constructor() {
    // placing of the input on the component instance ($ctrl)
    // bindToController: true
    // this.headerText = 'Tool Header'; // valid JavaScript
  }

  ngOnInit() {
  }

}
