import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { UsersListComponent } from './users-list/users-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UserFormComponent } from '../user-form/user-form.component';

const MaterialComponents = [
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatCheckboxModule,
];

@NgModule({
  declarations: [ToolbarComponent, UsersComponent, UsersListComponent, UserFormComponent],
  imports: [CommonModule, ...MaterialComponents, FormsModule, ReactiveFormsModule],
  exports: [
    FormsModule,
    ...MaterialComponents,
    ToolbarComponent,
    UsersComponent,
    UsersListComponent, ReactiveFormsModule
  ],
})
export class UsersModule {}
