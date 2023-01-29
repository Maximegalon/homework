import { Component, Input } from '@angular/core';
import { FileStatus } from '../../interfaces/file';

@Component({
  selector: 'home-status-indicator',
  templateUrl: './status-indicator.component.html',
  styleUrls: ['./status-indicator.component.scss']
})
export class StatusIndicatorComponent {
  @Input() status: FileStatus = FileStatus.Unknown;
}
