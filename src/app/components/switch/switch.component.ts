import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
  @Input() labelId: string | undefined;
  @Input() label: string | undefined;
  @Input() id: string | undefined;

  value: boolean = false;

  onChange: any = () => {};
  onTouched: any = () => {};

  get switchClassNames(): string {
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
    const newValue = !this.value;
    this.value = newValue;
    this.onChange(newValue);
    this.onTouched();
  }

}
