import { Component } from '@angular/core';
import {LoginService} from '../services/login.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string;
  password: string;
  champObligatoire = true;
  constructor(private loginService: LoginService,
              private router: Router) {}

  accountExists(){
    console.log("LISTE USERS taille: " + this.loginService.map.size)
    if(this.password!=null && this.username!=null)
    {
      if(this.loginService.map.get(this.username) == this.password)
      {
        console.log("Connexion réussie !")
        this.router.navigate(['/home/MyAccount']);
      }
    }
    else{
      this.champObligatoire = false;
    }
  }

}
