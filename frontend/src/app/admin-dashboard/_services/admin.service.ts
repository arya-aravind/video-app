import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Video} from "../_models/video";
import {RequestOptions, Request, RequestMethod,Http} from '@angular/http';
@Injectable()
export class AdminService {
    constructor(private http: HttpClient) { }

baseUrl: string ='http://localhost:3000';


   //  addVideo(video:Video,token:string) {
   //  	 let headers: HttpHeaders = new HttpHeaders();
   //  	  headers = headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
   //  headers = headers.append('x-access-token', token); // Not added yet as this is the reason for the question
   
   //  	return this.http.post(`${this.baseUrl}/api/video/add_video`,video,{headers});
       
   //  }

   //    addVideo(video:Video,token:string) {
   //  	 let headers = new Headers({
   //  	 	'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
   //  	 	'x-access-token':token
   //  	 });
   //  	// Not added yet as this is the reason for the question
   // var options=new RequestOptions({headers: headers});
   //  	return this.http.post(`${this.baseUrl}/api/video/add_video`,video,options);
       
   //  }

     addVideo(video:string,author:string,fileToUpload: File) {

      const formData: FormData = new FormData();

    formData.append('fileKey', fileToUpload, fileToUpload.name);
    formData.append('video_name',  video);
    formData.append('author_name',  author);

console.log(formData);
    	return this.http.post(`${this.baseUrl}/api/video/add_video`,formData);
       
    }

    getVideous()
    {
      return this.http.get<Video[]>(`${this.baseUrl}/api/video/all_videous`);
    }

}