import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: "app-child-component",
  templateUrl: "./app-child.component.html",
})
export class MyComponent implements OnChanges {

  @Input() textInput: string = "";

    procText: string= "";


  ngOnChanges() {

    this.proc(this.textInput)
  }   
 
  proc(text: string){
    this.procText = text.replace(/о/g, "?") + " text length is: " + text.length;
  }

}