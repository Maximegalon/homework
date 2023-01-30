import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilesService } from '../../services/files/files.service';
import { File, FileStatus } from '../../interfaces/file';
import { MultiCheckboxState } from '../../components/checkbox/checkbox.model';

@Component({
  selector: 'page-downloads',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnDestroy, OnInit {
  subscriptions: Subscription[] = [];
  fileSubscription: Subscription = new Subscription;

  filesService: FilesService;
  files: File[] = [];
  selectedFiles: File[] = [];
  showModal = false;

  constructor(filesService: FilesService) {
    this.filesService = filesService;
  }

  ngOnInit(): void {
    this.fileSubscription = this.filesService.getFiles().subscribe(response => {
      this.files = response;
    })

    this.subscriptions.push(this.fileSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Fires when multistatte checkbox is clicked
   *
   * @returns {void}
   * @memberof FilesComponent
   */
  handleSelectionClick(e: MultiCheckboxState): void {
    if (e === MultiCheckboxState.Empty || e === MultiCheckboxState.Partial) {
      this.selectedFiles = this.files;
    } else {
      this.selectedFiles = [];
    }
  }

  /**
   * Fires when clicking to display the modal dialog
   *
   * @returns {void}
   * @memberof FilesComponent
   */
  handleDialogDisplay(display: boolean): void {
    this.showModal = display;
  }

  /**
   * The row selection state of the table
   *
   * @returns {MultiCheckboxState}
   * @memberof FilesComponent
   */
  get tableState(): MultiCheckboxState {
    if (this.selectedFiles.length === 0) {
      return MultiCheckboxState.Empty;
    }

    if (this.selectedFiles.length === this.files.length) {
      return MultiCheckboxState.Full;
    }

    return MultiCheckboxState.Partial;
  }

  /**
   * The number of files currently selected
   *
   * @returns {number}
   * @memberof FilesComponent
   */
  get selectedFileCount(): number {
    return this.selectedFiles.length;
  }

  /**
   * The number of files currently selected that are not available
   *
   * @returns {number}
   * @memberof FilesComponent
   */
   get selectedUnavailableFileCount(): number {
    return this.selectedFiles.filter(f => f.status !== FileStatus.Available).length;
  }
}
