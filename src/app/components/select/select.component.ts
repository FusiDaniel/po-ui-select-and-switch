import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { joinClasses } from '../../utils/joinClasses';

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
})
export class SelectComponent implements OnInit {
  @Input() options: Option[] = [];
  @Input() selectedValue: string | null = null;
  @Input() placeholder?: string;
  @Input() disabled = false;
  @Input() error = false;
  @Output() selectedValueChange = new EventEmitter<string | null>();

  get selectClassNames(): string {
    return joinClasses([!!this.selectedValue, 'select-selected'], [this.error, 'select-error']);
  }

  ngOnInit(): void {
    if (this.selectedValue === null && this.options.length > 0) {
      this.selectedValueChange.emit(null);
    }
  }

  onChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedValue = selectedValue;
    this.selectedValueChange.emit(selectedValue);
  }
}
