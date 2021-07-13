import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'


@Component({
  templateUrl: 'profile.component.html',
  styles: [`
    em {float: right; color: #E05C65; padding-left: 10px;}
    .error input {background-color: #E3C3C5;}
    .error input ::-webkit-input-placeholder {color: #999;}
    .error input ::-moz-placeholder {color: #999;}
    .error input :-moz-placeholder {color: #999;}
    .error input :-ms-input-placeholder {color: #999;}
  `]
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup 
  private firstName: FormControl | any
  private lastName: FormControl | any

  constructor(
    private router: Router,
    private authService: AuthService
    ) {}
  
  ngOnInit(): void {
    this.firstName = new FormControl(this.authService.firstName, Validators.required)
    this.lastName = new FormControl(this.authService.lastName, Validators.required)
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  saveProfile(formValues: { firstName: string; lastName: string }) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
      this.router.navigate(['events'])
    }
  }

  validateFirstName() {
    return this.firstName.valid && this.firstName.untouched
  }

  validateLastName() {
    return this.lastName.valid && this.lastName.untouched
  }

  cancel() {
    this.router.navigate(['events'])
  }
       
}