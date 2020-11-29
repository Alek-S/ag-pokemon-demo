import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavedListComponent } from '~app/saved-list/saved-list.component';
import { TableComponent } from '~app/table/table.component';

const routes: Routes = [
  { path: '', redirectTo: '/find', pathMatch: 'full' },
  { path: 'find', component: TableComponent },
  { path: 'saved', component: SavedListComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
