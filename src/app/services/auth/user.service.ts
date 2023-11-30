import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  PATH_OF_API = "http://localhost:8080";
  requetHeader = new HttpHeaders(
    {"No-Auth":"True"}
  )
  constructor(private httpClient:HttpClient , private userAuthService : UserAuthService) { }

  createClient(client: User): Observable<Object>{
    return this.httpClient.post(`${this.PATH_OF_API}/auth/register`, client);
  }

}
