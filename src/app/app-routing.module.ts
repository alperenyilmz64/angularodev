import { LoginComponent } from './login/login.component';
import { KayitlarComponent } from './kayitlar/kayitlar.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AngularFireAuthGuard, canActivate, redirectUnauthorizedTo} from '@angular/fire/compat/auth-guard'
import { RegisterComponent } from './register/register.component';

const redirectLogin=() => redirectUnauthorizedTo (['/giris']);
const routes: Routes = [
  {path: '', component:HomeComponent,
  canActivate:[AngularFireAuthGuard],
  data:{
    authGuardPipe:redirectLogin
  }
},  
  {path: 'sorular', component:KayitlarComponent,
  canActivate:[AngularFireAuthGuard],
  data:{
    authGuardPipe:redirectLogin
  }
},  
  {path: 'giris', component:LoginComponent},  
  {path: 'kayit', component:RegisterComponent},  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
