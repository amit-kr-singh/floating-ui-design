import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';

  
  itemArray = [
    "Item 1",
    "Item 2",
    "Item 3"
  ];

  onEnter(){
    let newVal =  (document.getElementById("newValue") as HTMLInputElement);
    this.itemArray.push(newVal.value);
    console.log("event value",newVal.value);
    newVal.value = "";
  }

  onSelect(value: any) {
    let selectedVal = (document.getElementById("selectedItem") as HTMLInputElement);
    selectedVal.value = value;
    console.log("selected value",selectedVal.value )
  }
}
