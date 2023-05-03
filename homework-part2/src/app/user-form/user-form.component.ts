import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../interface/user';
// import { ReactiveFormsModule, FormsModule  } from '@angular/forms';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {
  userForm!: FormGroup;

  @Output() onSubmit = new EventEmitter<User>();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]]
    });
  }

	submitForm() {
    // console.log(this.userForm.value);
		// onCreateUsers()
		if (this.userForm.valid) {
      const user: User = {
        name: `${this.userForm.value.firstName} ${this.userForm.value.lastName}`,
        email: this.userForm.value.email,
        phone: this.userForm.value.phone
      };
      this.onSubmit.emit(user);
      this.userForm.reset();
    }
  }
  
}


