import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // username = ""
  // password =""

  _fb = inject(FormBuilder)  // gerencia os formulários da página
  login = this._fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
})
}