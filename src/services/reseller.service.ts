import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationInterface } from '../app/interfaces/registrationInterface';
import { SignInInterface } from 'src/app/interfaces/sign-in-interface';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})


export class ResellerService {
  constructor(private _http: HttpClient, private _router: Router) {}

  private token?: String;
  private authenticatedUser = false;
  private logoutTimer: any;
  private username: any;
  private authenticatedSub = new Subject<boolean>();

  getIsAuthenticated() {
    return this.authenticatedUser;
  }

  getToken() {
    return this.token;
  }

  getUsername() {
    return this.username;
  }

  getAuthenticatedSub() {
    return this.authenticatedSub.asObservable();
  }

  signup(data: RegistrationInterface): Observable<RegistrationInterface> {
    return this._http.post<RegistrationInterface>(
      'http://127.0.0.1:3300/reseller/signup',
      data
    );
  }

  signIn(data: SignInInterface): void {
    this._http
      .post<{ token: String; expiresIn: Number }>(
        'http://127.0.0.1:3300/reseller/signin',
        data
      )
      .subscribe({
        next: (res: any) => {
          this.token = res.token;
          this.username = res.username;

          if (this.token) {
            this.authenticatedUser = true;
            this._router.navigate(['/', 'dashboard']);
            this.logoutTimer = setTimeout(() => {
              this.logout();
            }, res.expiresIn * 1000);
            const now = new Date();
            const expiresDate = new Date(now.getTime() + res.expiresIn * 1000);
            this.storeLoginDetails(this.token, expiresDate);
          }
        },
        error: (error) => {
          console.log(error)
          console.log('Incorrect username or password');
        },
      });
  }

  logout() {
    this.token = '';
    this.authenticatedUser = false;
    this.authenticatedSub.next(false);
    this._router.navigate(['/login']);
    clearTimeout(this.logoutTimer);
    this.clearLoginDetails();
  }

  storeLoginDetails(token: any, expirationDate: Date) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiresIn', expirationDate.toISOString());
  }

  clearLoginDetails() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresIn');
  }

  getLocalStorageData() {
    const token = localStorage.getItem('token');
    const expiresIn = localStorage.getItem('expiresIn');

    if (!token || !expiresIn) {
      return;
    }
    return {
      token: token,
      expiresIn: new Date(expiresIn),
    };
  }

  authenticateFromLocalStorage() {
    const localStorageData = this.getLocalStorageData();
    if (localStorageData) {
      const now = new Date();
      const expiresIn = localStorageData.expiresIn.getTime() - now.getTime();

      if (expiresIn > 0) {
        this.token = localStorageData.token;
        this.authenticatedUser = true;
        this.authenticatedSub.next(true);
        this.logoutTimer.setTimeout(expiresIn / 1000);
      }
    }
  }

  changePassword(id:any, data:any): Observable<any> {
    return this._http.put<any>(`http://127.0.0.1:3300/reseller/change-password/${id}`, data)
  }
}
