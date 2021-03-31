import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  SignupForm: FormGroup;
  detailItems: any[] = [{ title: 'noteTitle01', textBody: "textBody01" }, { title: 'noteTitle02', textBody: 'textBody02' }]

  ngOnInit() {
    this.SignupForm = new FormGroup({
      'userData': new FormGroup({
        'title': new FormControl('', [Validators.required,]),
        'textBody': new FormControl('', [Validators.required]),
      }),
    });
  }

  onAddNote() {
    if (this.SignupForm.valid) {
      console.log("this.personalDetailsForm.value", this.SignupForm.value['userData'])
      this.detailItems.push({ title: this.SignupForm.value['userData']['title'], textBody: this.SignupForm.value['userData']['textBody'] })
    }
  }

  setTitleEdit(item) {
    item.canEditCode = true;
  }
}
