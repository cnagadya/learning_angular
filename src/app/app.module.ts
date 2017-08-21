import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import { TrialComponent }  from './components/trial.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TrialComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
