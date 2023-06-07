import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { BookingsComponent } from './bookings/bookings.component';
import { DriverregComponent } from './driverreg/driverreg.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserregComponent } from './userreg/userreg.component';
import { ViewbookingsComponent } from './viewbookings/viewbookings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookingsComponent,DriverregComponent,
    FooterComponent,
    NavbarComponent,
    UserregComponent,
    ViewbookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
