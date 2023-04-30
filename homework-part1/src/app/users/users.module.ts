import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { UsersListComponent } from '../users-list/users-list.component';
import { MatCardModule } from '@angular/material/card';
// import { MatGridListModule } from '@angular/material/grid-list';

const MaterialComponents = [
  MatToolbarModule,
  MatButtonModule,
  FormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  // MatGridListModule,
  // MatSortModule,
  // MatExpansionModule,
  // MatTableModule,
];

@NgModule({
  declarations: [ToolbarComponent, UsersComponent, UsersListComponent],
  imports: [CommonModule, MaterialComponents],
  exports: [
    MaterialComponents,
    ToolbarComponent,
    UsersComponent,
    UsersListComponent,
  ],
})
export class UsersModule {}
