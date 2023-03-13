import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() { }

  callSwal(btnName: string, text: string, callBack: () => void) {
    Swal.fire({
      confirmButtonText: btnName,
      text: text,
      showCancelButton: true,
      cancelButtonText: "cancel",
      cancelButtonColor: "red",
      icon: 'question'
    }).then(res=>{
      if(res.isConfirmed){
        callBack();
      }
    })
  }
}
