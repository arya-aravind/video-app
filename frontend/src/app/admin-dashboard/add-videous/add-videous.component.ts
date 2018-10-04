import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../_services/admin.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import { HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-add-videous',
  templateUrl: './add-videous.component.html',
  styleUrls: ['./add-videous.component.css']
})
export class AddVideousComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private adminService: AdminService) { }
selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  addVideousForm: FormGroup;
user_data_token:string;

video_name:string;
author:string;

fileToUpload: File = null;
  ngOnInit() {

let user_val = localStorage.getItem("currentUserToken");

  	   this.addVideousForm = this.formBuilder.group({
      vname: ['', Validators.required],
      author_name: ['', Validators.required],
      //filename: null
    });
  }

handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

onSubmit() {
	//console.log(this.addVideousForm.value);
this.video_name=this.addVideousForm.value.vname;
this.author=this.addVideousForm.value.author_name;

	 this.adminService.addVideo(this.video_name,this.author,this.fileToUpload)
      .subscribe(  data => {
                	this.router.navigate(['/list']);
                },
                error => {
                  console.log('error');
                });
      this.selectedFiles = undefined;
  }

}
