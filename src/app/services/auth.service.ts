import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from '../models/login.model';
import { RegisterModel } from '../models/register.model';
import { UserModel } from '../models/user.model';

@Injectable()

export class AuthService {
  isLogin: boolean = false;
  isAdmin: boolean = false;

  apiUrl: string = "http://localhost:3000/users";

  constructor(
    private _router: Router,
    private _http: HttpClient,
    private _toastr: ToastrService
  ) {
    this.checkIsLogin();
  }

  checkIsLogin() {
    if (localStorage.getItem("user"))
      this.isLogin = true;
    else
      this.isLogin = false;
  }

  login(form: NgForm) {
    if(!form.valid)
      return

    let model = new LoginModel();
    model.email = form.controls["email"].value;
    model.password = form.controls["password"].value;

    this._http.get<UserModel[]>(`${this.apiUrl}?email=${model.email}&password=${model.password}`).subscribe({
      next: (res) => {
        if (res.length > 0) {
          this.loginSuccess(res[0])
        } else {
          this._http.get<UserModel[]>(`${this.apiUrl}?userName=${model.email}&password=${model.password}`).subscribe({
            next: (res2) => {
              if (res2.length > 0) {
                this.loginSuccess(res2[0])
              } else {
                this._toastr.error("userName/email or password are rong!")
              }
            },
            error: (err: HttpErrorResponse) => {
              this._toastr.error(`Status Code: ${err.status} - Error Message: ${err.message}`)
            }
          })
        }
      },
      error: (err: HttpErrorResponse) => {
        this._toastr.error(`Status Code: ${err.status} - Error Message: ${err.message}`)
      }
    })
  }

  register(form: NgForm) {
    if(!form.valid)
      return

    let model = new RegisterModel();
    model.email = form.controls["email"].value;
    model.name = form.controls["name"].value;
    model.userName = form.controls["userName"].value;
    model.password = form.controls["password"].value;
    model.isAdmin = false;

    this._http.get<UserModel[]>(`${this.apiUrl}?email=${model.email}`).subscribe(res => {
      if (res.length == 0) {
        this._http.get<UserModel[]>(`${this.apiUrl}?userName=${model.userName}`).subscribe(res => {
          if (res.length == 0) {
            this._http.post<UserModel>(this.apiUrl, model).subscribe({
              next: (res) => {
                this.loginSuccess(res);
              },
              error: (err: HttpErrorResponse) => {
                this._toastr.error(`Status Code: ${err.status} - Error Message: ${err.message}`)
              }
            })
          } else {
            this._toastr.error("username is already used!")
          }
        })
      } else {
        this._toastr.error("email is already used")
      }
    })

  }

  loginSuccess(model: UserModel) {
    localStorage.setItem("user", JSON.stringify(model));
    this.checkIsLogin();
    this._router.navigateByUrl("/");
    this._toastr.success("Login Success!")
  }

  logout() {
    localStorage.removeItem("user");
    this.checkIsLogin();
    this._router.navigateByUrl("/");
  }

  checkIsAdmin() {
    if (this.isLogin) {
      let model: UserModel = JSON.parse(localStorage.getItem("user"));

      if (model.isAdmin)
        this.isAdmin = true;
      else
        this.isAdmin = false;
    }
  }
}