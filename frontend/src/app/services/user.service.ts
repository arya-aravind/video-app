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

    getVideous()
    {
      return this.http.get<Video[]>(`${this.baseUrl}/api/video/all_videous`);
    }

    getVideous_id(id:string)
    {
      return this.http.get<Video[]>(`${this.baseUrl}/api/video/get_video_id/${id}`);
    }
}
