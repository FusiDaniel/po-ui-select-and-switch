import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { joinClasses } from '../../utils/joinClasses';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

export type Option = {
  value: string;
  label: string;
};

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements ControlValueAccessor {
  @Input() options: Option[] = [];
  @Input() placeholder?: string;
  @Input() isDisabled = false;
  @Input() error = false;

  value: string | null = null;

  onChange: any = () => {};
  onTouched: any = () => {};

  get selectClassNames(): string {
    return joinClasses([!!this.value, 'select-selected'], [this.error, 'select-error']);
  }

  get iconClassNames(): string {
    return joinClasses([this.isDisabled, 'select-icon-disabled'], [this.error, 'select-icon-error']);
  }

  writeValue(value: string | null): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onValueChange(value: string): void {
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
}