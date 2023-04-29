import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from '../users-routing.module';
import { UserToolbarComponent } from './user-toolbar/user-toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [UserToolbarComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
  ],
})
export class UsersModule {}
