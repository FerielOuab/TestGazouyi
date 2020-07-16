import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {

  username: string;
  password: string;
  champObligatoire = true;
  nomExistant = false;
  constructor(private loginService: LoginService,
              private location: Location) {

  }

  ngOnInit() {}

  createAccount(){
    if(this.username!=null && this.password !=null) {
      if(this.loginService.map.has(this.username))
      {
        // this.username = null;
        // this.password = null;
        this.champObligatoire = true;
        this.nomExistant = true;
        return false;
      }
      else{
        if(this.password !='')
        {
          this.nomExistant = false;
          this.loginService.addUser(this.username, this.password)
          console.log("USERNAME + MDP: " + this.username + "/" + this.password)
          return true;
        }
        else{
          this.nomExistant = false;
          this.champObligatoire = false;
          console.log("chaine vide");

        }
      }
    }
    else {
      console.log("Username ou password null")
      this.champObligatoire = false;
      return false;
    }
  }

  back() {
    return this.location.back();
  }

}
