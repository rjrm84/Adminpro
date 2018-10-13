
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// MOdulos
import { PagesModule } from './pages/pages.module';

// rutas
import { APP_ROUTING } from './app.routes';


// Temporal
import { FormsModule } from '@angular/forms';


// Servicios
import { ServiceModule } from './services/service.module';


@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, APP_ROUTING, PagesModule, FormsModule, ServiceModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
