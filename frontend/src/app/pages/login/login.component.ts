import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../core/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [ReactiveFormsModule],
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly userService = inject(UserService);

  readonly loginForm = this.fb.group({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  login(): void {
    const data = this.loginForm.value;
    if (!data.email || !data.password) return;

    this.userService.login(data.email, data.password);
  }
}
