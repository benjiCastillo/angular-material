import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormControlsComponent } from './form-controls/form-controls.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { PopupModalsComponent } from './popup-modals/popup-modals.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormControlsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'popupmodal', component: PopupModalsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
