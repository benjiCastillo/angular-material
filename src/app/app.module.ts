import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormControlsComponent } from './form-controls/form-controls.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { PopupModalsComponent } from './popup-modals/popup-modals.component';
import { ModalEjemploComponent } from './popup-modals/modal-ejemplo/modal-ejemplo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormControlsComponent,
    ButtonsComponent,
    PopupModalsComponent,
    ModalEjemploComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [ModalEjemploComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
