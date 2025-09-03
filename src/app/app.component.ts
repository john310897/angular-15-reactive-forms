import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: this.fb.array([this.fb.control('')]),
    });
  }

  get address(): FormArray {
    return this.myForm.get('address') as FormArray;
  }

  addAddress() {
    this.address.push(this.fb.control(''));
  }

  handleOnSubmit() {
    console.log('in handle on submit');

    if (this.myForm?.valid) {
      console.log('all fields are properly filled', this.myForm.value);
      console.log(this.myForm.get('address'));
    } else {
      console.error('fields are missing');
    }
  }
}
