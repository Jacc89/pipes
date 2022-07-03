import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material
import { MaterialModule } from './material/material.module';

import { CompartidoModule } from './compartido/compartido.module';
import { PrincipalModule } from './principal/principal.module';
import { AppRouterModule } from './app-router.module';

import localesEs from '@angular/common/locales/es';
import { registerLocaleData } from "@angular/common";

registerLocaleData(localesEs);

@NgModule({

  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CompartidoModule,
    PrincipalModule,
    AppRouterModule  
    
  ],
  exports:[
    AppRouterModule 
    
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
