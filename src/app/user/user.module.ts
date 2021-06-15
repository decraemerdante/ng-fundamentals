import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { userRoutes } from './user.routes';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes),
    ReactiveFormsModule,
  ],
  declarations: [ProfileComponent, LoginComponent],
  providers: [],
})
export class UserModule {}
