import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableComponent } from './table/table.component';
import { QrLoginComponent } from './qr-login/qr-login.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: TableComponent },
  { path: 'login', component: QrLoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
