/* eslint-disable @angular-eslint/no-output-on-prefix */
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.scss'],
})
export class MyComponent implements OnChanges {
  @Input() someInput: any[] = [];
  @Output() handleFavorite: EventEmitter<any> = new EventEmitter();
  @Output() openInfo: EventEmitter<any> = new EventEmitter();

  isFavorite(item) {
    return this.someInput?.map((favorite) => favorite.id).includes(item.id);
  }

  onFavorite(hero: any) {
    this.handleFavorite.emit(hero);
  }

  handleOpenInfo(hero) {
    this.openInfo.emit(hero);
  }

  ngOnChanges() {
    console.log(this.someInput);
  }
}
