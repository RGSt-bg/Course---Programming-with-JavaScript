import { Component, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
const IMG_URL = 'https://cdn.pixabay.com/photo/2017/05/29/15/34/kitten-2354016_1280.jpg'

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit, OnDestroy {
  @Input('color') colorValue = 'white';
  @Output() onTestOutput = new EventEmitter<string>();

  isToggle = false;
  greenBackground = 'background-green';
  imgUrl = IMG_URL;
  
  ngOnInit() {
    console.log('Component created!');
  }

  ngAfterViewInit() {
    console.log('Component initialized!');
  }

  ngOnDestroy() {
    // Clean up of stuff!
    console.log('Component destroyed!');
  }

  ngDoCheck() {
    console.log('Component checked!');
  }

  handleClick(event: Event) {
    console.log('clicked!', event);
    this.isToggle = !this.isToggle;

    console.log(this.isToggle);
  }
  
  handleInput(usernameInput: HTMLInputElement) {
      console.log('username: ', usernameInput, usernameInput.value);
      console.log(this.colorValue);
      this.onTestOutput.emit(usernameInput?.value || '');
  }
}
