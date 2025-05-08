import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SelectComponent } from '../select/select.component';
import { CommonModule } from '@angular/common';
import { PoFieldModule } from '@po-ui/ng-components';


@Component({
  selector: 'app-simple-form',
  standalone: true,
  imports: [ReactiveFormsModule, SelectComponent, CommonModule, PoFieldModule],
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css'],
})
export class SimpleFormComponent implements OnInit {
  myForm: FormGroup;

  options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
  ];

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      fruit: [null, Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form value:', this.myForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
