import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
} from '@po-ui/ng-components';
import { SelectComponent } from './components/select/select.component';
import { SimpleFormComponent } from "./components/simple-form/simple-form.component";
import { SwitchComponent } from "./components/switch/switch.component";

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    SelectComponent,
    FormsModule,
    SimpleFormComponent,
    SwitchComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  selectedOption: string | null = null;
  onOptionSelected(value: string | null): void {
    this.selectedOption = value;
    console.log('Selected option in parent:', this.selectedOption);
  }
}
