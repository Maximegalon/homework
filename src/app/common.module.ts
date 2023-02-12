import { NgModule } from '@angular/core';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  imports: [
    AutoCompleteModule,
    ButtonModule,
    DialogModule,
    ProgressSpinnerModule,
    TableModule,
  ],
  declarations: [],
  providers: [],
  exports: [
    AutoCompleteModule,
    ButtonModule,
    DialogModule,
    ProgressSpinnerModule,
    TableModule,
  ]
})
export class CommonModule { }
