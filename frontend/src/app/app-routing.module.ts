import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { BookingsComponent } from './bookings/bookings.component';
import { DriverregComponent } from './driverreg/driverreg.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserregComponent } from './userreg/userreg.component';
import { ViewbookingsComponent } from './viewbookings/viewbookings.component';

const routes: Routes = [

  {path: 'bookings', component:BookingsComponent},
  {path: 'driverreg', component:DriverregComponent},
  {path: 'footer', component:FooterComponent},
  {path: 'navbar', component:NavbarComponent},
 {path:'userreg',component:UserregComponent},
   {path: 'login', component:LoginComponent},
   {path:'viewbookings', component:ViewbookingsComponent},
  
  
  
   //{ path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
