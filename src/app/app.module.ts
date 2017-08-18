import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TrialComponent }  from './components/trial.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TrialComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
