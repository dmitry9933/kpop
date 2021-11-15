import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular3';

  text:string = ""

  changeText(event: any) {
    console.log(event.target.value);
    this.text = event.target.value;
  }
}
