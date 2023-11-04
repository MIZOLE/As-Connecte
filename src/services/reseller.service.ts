import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationInterface } from '../app/interfaces/registrationInterface';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResellerService {

  constructor(private _http: HttpClient, _router: Router) {}

  signup (data: RegistrationInterface): Observable<RegistrationInterface>{
    return this._http.post<RegistrationInterface>("http://127.0.0.1:3300/reseller/signup", data)
  }
}
