import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Video} from "../models/video";
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

   baseUrl: string ='http://localhost:3000'

  register(user: User) {
  	 return this.http.post(`${this.baseUrl}/api/auth/register`, user);
       
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${this.baseUrl}/api/auth/login`, { email: username, password: password })
    }

  getVideous(token:string)
    {
       var token_string = new String();

token = token.toString().replace(/"/g, "");


      let headers: HttpHeaders = new HttpHeaders();
      //  headers = headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers = headers.append('x-access-token',token); // Not added yet as this is the reason for the question

      return this.http.get<Video[]>(`${this.baseUrl}/api/video/all_videous`,{headers});
    }


    getVideous_id(id:string)
    {
      return this.http.get<Video[]>(`${this.baseUrl}/api/video/get_video_id/${id}`);
    }
}
