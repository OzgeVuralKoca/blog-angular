import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AboutModel } from '../models/about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  apiUrl: string = "http://localhost:3000/abouts"

  constructor(
    private _http: HttpClient
  ) { }

  get(callBack: (res:AboutModel)=>void){
    this._http.get<AboutModel[]>(this.apiUrl).subscribe(res=>{
      callBack(res[0]);
    })
  }
}
