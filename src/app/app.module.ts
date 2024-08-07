import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';
import {FormsModule} from "@angular/forms";
import { FormDetailsComponent } from './form-details/form-details.component';
import {MyFirstService} from "./services/my-first.service";
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MyFirstCompComponent,
    FormDetailsComponent,
    MenuComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
