import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilesComponent } from './pages/files/files.component'
import { CryptoComponent } from './pages/crypto/crypto.component'

const routes: Routes = [
  { path: '', redirectTo: '/crypto', pathMatch: 'full' },
  {
    path: 'crypto',
    component: CryptoComponent,
    pathMatch: 'full'
  },
  {
    path: 'files',
    component: FilesComponent,
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }