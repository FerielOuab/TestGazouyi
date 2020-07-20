import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {Location} from '@angular/common';
import { FormControl } from '@angular/forms';

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
  regEX = true;
  constructor(private loginService: LoginService,
              private location: Location,
              private control: FormControl) {

  }

  ngOnInit() {}

  createAccount(){
    if(this.username!=null && this.password !=null) {
      let re =  /^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      let result = re.test(this.username);
      if(result){
        if(this.loginService.map.has(this.username))
        {

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
        this.regEX = false;
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
