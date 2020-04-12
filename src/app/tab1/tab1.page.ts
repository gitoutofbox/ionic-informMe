import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InformService } from './inform.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public submitted: boolean = false;
  public submissionInProgress: boolean = false;
  public errorMessage: string = '';
  public successMessage: string = '';
  // public reportTypes: Array<any> = ["report_suspect", "report_domestic_violance"]
  constructor(private fb: FormBuilder, private informService: InformService) { }

  public informForm = this.fb.group({
    report_type:    [false, [Validators.required]],
    person_name:    ['', [Validators.required]],
    person_address: ['', [Validators.required]],
    reporter_phone: ['', [Validators.required, Validators.pattern("^[0-9_-]{10,12}")]]
  });

  inform() {
    this.submitted = true;
    this.errorMessage = '';
    this.successMessage = '';
    if(this.informForm.valid) {
      this.submissionInProgress =  true;
      const postData = {
        report_type: this.informForm.controls.report_type.value,
        person_name: this.informForm.controls.person_name.value,
        person_address: this.informForm.controls.person_address.value,
        reporter_phone: this.informForm.controls.reporter_phone.value
      }
      this.informService.submitInformation(postData).subscribe(data => {
        this.successMessage = 'Thank you for contributing to save the world';
        this.submissionInProgress =  false;
        this.submitted = false;
        this.informForm.reset();
      },
      error => {
        this.errorMessage = 'Some error occured. Please try again later';
        this.submissionInProgress =  false;
      })
    }
  }
}
