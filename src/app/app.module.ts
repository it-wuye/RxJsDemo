import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjstestComponent } from './rxjstest/rxjstest.component';
import { DivtestComponent } from './divtest/divtest.component';
import { BuffertestComponent } from './buffertest/buffertest.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjstestComponent,
    DivtestComponent,
    BuffertestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
