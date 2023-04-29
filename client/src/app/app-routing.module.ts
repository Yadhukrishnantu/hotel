import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RoomdetailsComponent } from './roomdetails/roomdetails.component';
import { HomeComponent } from './home/home.component';
import { BookedroomComponent } from './bookedroom/bookedroom.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'viewHotel/:id',component:RoomdetailsComponent},
  {path:'home',component:HomeComponent},
  {path:'bookedroom',component:BookedroomComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
