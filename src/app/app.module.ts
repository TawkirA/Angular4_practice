import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TdFormComponent } from './td-form/td-form.component';
import { MdFormComponent } from './md-form/md-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TdFormComponent,
    MdFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
