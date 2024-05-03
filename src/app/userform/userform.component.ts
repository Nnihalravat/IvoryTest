import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationServiceService } from '../registration-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  registrationForm: FormGroup;
  registers!:any[];

  constructor(private fb: FormBuilder, private userService: RegistrationServiceService, private route: Router) {
    this.registrationForm = this.fb.group({
      fullname: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      pin: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      state: ['', Validators.required],
      country: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      education: ['', Validators.required],
      designation: ['', Validators.required],
    });
  }

onSubmit() {
  if (this.registrationForm.valid) {
    const userData = this.registrationForm.value;
    this.userService.onPost(userData).subscribe(
      res => {
        console.log(res);

      },
      () => {
        console.log('Record Inserted Successfully',userData);
        alert("Success");
        this.route.navigateByUrl('/viewall');
      }
    );
  } 
}


ngOnInit(): void {
}
}
