import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AdminService} from "../_services/admin.service";
import {Video} from "../_models/video";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

video: Video[];

  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit() {
      this.adminService.getVideous()
      .subscribe( data => {
        this.video = data
      });
  	//console.log(localStorage.getItem('currentUser'));
  }

  addVideo(): void {
    this.router.navigate(['add-videous']);
  };

}
