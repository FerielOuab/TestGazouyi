import { Component } from '@angular/core';
import {LoginService} from '../services/login.service';
import {Router} from "@angular/router";
import {NavController} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string;
  password: string;
  champObligatoire = true;
  compteExists = true;
  constructor(private loginService: LoginService,
              private router: Router,
              private navCtrl: NavController) {}

  update(){
      this.compteExists=true;
  }
  accountExists(){
    console.log("LISTE USERS taille: " + this.loginService.map.size)
    if(this.password != null && this.username != null)
    {
      if(this.loginService.map.get(this.username) == this.password)
      {
        this.compteExists = true;
        console.log("Connexion réussie !")
        this.router.navigate(['/home/MyAccount']);
      }
      else
      {

        this.compteExists = false;



      }
    }
    else{

      this.champObligatoire = false;
    }
  }

}
