import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  map = new Map();
  constructor(private route: Router) { }

  addUser(username, password){

    if (!this.map.has(username))
    {
      this.map.set(username, password);
      console.log("AJOUT MAP taille: " + this.map.size)
      console.log("Compte créé");
      this.route.navigateByUrl('');
      return true;
    }
    return false;
  }

  testNonNullChamps(username, password){
    if(username!=null && password != null)
    {
      return true;
    }
    return false;
  }

}
