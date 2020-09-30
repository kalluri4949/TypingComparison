import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = '';
  onUserTyped(char: string): void {
    this.enteredText = char;
  }
  compare(singleChar: string, enterText: string): string {
    if (!enterText) {
      return 'pending';
    }
    return singleChar === enterText ? 'correct' : 'incorrect';
  }
}
