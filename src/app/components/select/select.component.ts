import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { joinClasses } from '../../utils/joinClasses';

export type Option = {
  value: string;
  label: string;
};

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {
  @Input() options: Option[] = [];
  @Input() placeholder?: string;
  @Input() disabled = false;
  @Input() error = false;
  @Input() labelId: string | undefined;

  value: string | null = null;

  onChange: any = () => {};
  onTouched: any = () => {};

  get selectClassNames(): string {
    return joinClasses(
      [!!this.value, 'select-selected'],
      [this.error, 'select-error']
    );
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
    this.disabled = isDisabled;
  }

  onValueChange(value: string): void {
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
}
