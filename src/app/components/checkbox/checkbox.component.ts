import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MultiCheckboxState } from './checkbox.model';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() state!: MultiCheckboxState;
  @Output() stateChanged = new EventEmitter<MultiCheckboxState>();

  ngOnInit() {
    if (this.state == null) {
      this.state = MultiCheckboxState.Empty;
    }
  }

  /**
   * Fires when the state of the checkbox is changed
   *
   * @returns {void}
   * @memberof CheckboxComponent
   */
   changeState(): void {
    this.stateChanged.emit(this.state);
  }
}
