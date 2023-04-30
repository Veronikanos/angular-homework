import { NgModule } from '@angular/core';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { UsersComponent } from './users.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
// import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { MatTableModule } from '@angular/material/table';

const MaterialComponents = [
  MatToolbarModule,
  MatButtonModule,
  FormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  // MatSortModule,
  // MatExpansionModule,
  // MatTableModule,
];

@NgModule({
  declarations: [ToolbarComponent, UsersComponent],
  imports: [CommonModule, MaterialComponents],
  exports: [MaterialComponents, ToolbarComponent, UsersComponent],
})
export class UsersModule {}
