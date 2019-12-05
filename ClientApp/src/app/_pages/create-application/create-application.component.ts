import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { tempForm } from '../../models/tempForm';
import { FormServiceService } from '../../services/form-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css']
})
export class CreateApplicationComponent implements OnInit {
    agencyId :Number;
   
userForm = new FormGroup({
    fisttextbox: new FormControl('', [Validators.required]),
    secondtextbox: new FormControl('', [Validators.required]),
    radioButton: new FormControl(true, [Validators.required]),
    dropDown: new FormControl('', [Validators.required])
})
    constructor(private formService: FormServiceService, private activationRouter: ActivatedRoute) { }
    ngOnInit() {
        this.activationRouter.queryParams.subscribe(response =>{
            this.agencyId = response['agencyid'];
        })
    }

    onSubmit() {
        if (this.userForm.valid) {
            let model = <tempForm>{
                fisttextbox: this.userForm.get('fisttextbox').value,
                secondtextbox: this.userForm.get('secondtextbox').value,
                radioBtn: this.userForm.get('radioButton').value,
                dropDown: this.userForm.get('dropDown').value,
            }
            this.formService.submitData(model).subscribe(response => {
                console.log("response from api", response)
            });
        }
    }

}
