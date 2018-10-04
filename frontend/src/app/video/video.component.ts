import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {Router, ActivatedRoute } from '@angular/router';
import {Video} from "../models/video";
import {DomSanitizer,SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent  {
id;
VideoPath:any;
video:Video[];
  constructor(private _Activatedroute:ActivatedRoute,
               private _router:Router,
               private userService: UserService,private sanitizer:DomSanitizer) { }

 
  ngOnInit() {
  	 this.id=this._Activatedroute.snapshot.params['id'];
this.userService.getVideous_id(this.id)
      .subscribe( data => {
this.video = data
      	
      });

}



}
