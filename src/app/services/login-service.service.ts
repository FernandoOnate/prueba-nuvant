import { Injectable } from '@angular/core';
import { environment } from '@enviroment/enviroment';
import { User } from '@models/User.model';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  public login(user:User):boolean{

    if(user._email == environment.EMAIL && user._password == environment.PASSWORD) {
      user._isLogged = true;
      localStorage.setItem("isLogged",JSON.stringify(user));
      return true;
    }else{
      return false;
    }

  }

  public logout(){

    if(localStorage.getItem("isLogged")){
      localStorage.removeItem("isLogged");
    }

  }

  public isLogged():boolean{
    const isLogged = localStorage.getItem("isLogged");
    if(isLogged){
      const user = JSON.parse(isLogged);
      return user._isLogged === true;
    }else{
        return false;
    }
  }
}
