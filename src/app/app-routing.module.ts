import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilesComponent } from './pages/files/files.component'
import { CryptoComponent } from './pages/crypto/crypto.component'

const routes: Routes = [
  {
    path: '',
    component: FilesComponent,
    pathMatch: 'full'
  },
  {
    path: 'crypto',
    component: CryptoComponent,
    data: {
      title: 'R4 | Error'
    },
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }