import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import {CreateAccountComponent} from '../create-account/create-account.component';
import {MyAccountComponent} from '../my-account/my-account.component';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'CreateAccount',
    component: CreateAccountComponent,
  },
  {
    path: 'MyAccount',
    component: MyAccountComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
