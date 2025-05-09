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
  @Input() isDisabled = false;
  @Input() error = false;

  value: boolean = false;

  onChange: any = () => {};
  onTouched: any = () => {};

  get switchWrapperClassNames(): string {
      return joinClasses([this.value, 'switch-checked']);
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

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  toggle() {
    this.value = !this.value;
  }

}

// @Input() options: Option[] = [];
// @Input() selectedValue: string | null = null;
// @Input() placeholder?: string;
// @Input() disabled = false;
// @Input() error = false;
// @Output() selectedValueChange = new EventEmitter<string | null>();

// get selectClassNames(): string {
//   return joinClasses([!!this.selectedValue, 'select-selected'], [this.error, 'select-error']);
// }

// get iconClassNames(): string {
//   return joinClasses([this.disabled, 'select-icon-disabled'], [this.error, 'select-icon-error']);
// }

// ngOnInit(): void {
//   if (this.selectedValue === null && this.options.length > 0) {
//     this.selectedValueChange.emit(null);
//   }
// }

// onChange(event: Event): void {
//   const selectedValue = (event.target as HTMLSelectElement).value;
//   this.selectedValue = selectedValue;