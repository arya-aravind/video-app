import { Component, OnInit } from '@angular/core';
import {Video} from "../models/video";
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
video: Video[];
  constructor( private userService: UserService, private router: Router) { }

  ngOnInit() {
  	  let user_val = localStorage.getItem("currentUserToken");
  	this.userService.getVideous(user_val)
      .subscribe( data => {
        this.video = data
      });
  }
		
}
