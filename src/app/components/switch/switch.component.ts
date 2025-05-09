import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { PoComponentsModule } from '@po-ui/ng-components';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { joinClasses } from '../../utils/joinClasses';

export type Option = {
  value: string;
  label: string;
};

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [CommonModule, PoComponentsModule],
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
  providers: [
    {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SwitchComponent),
    multi: true
    }
    ]
})
export class SwitchComponent implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() error = false;

  @Input() value: boolean = false;

  onChange: any = () => {};
  onTouched: any = () => {};

  get switchWrapperClassNames(): string {
      return this.value ? 'checked' : '';
  }

  writeValue(value: boolean): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  toggle() {
    this.value = !this.value;
  }

}
