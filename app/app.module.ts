import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { GithubService } from './services/github.service.js';


import { AppComponent }  from './app.component';
import { GithubComponent } from './components/github.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, GithubComponent ],
  providers: [ GithubService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
