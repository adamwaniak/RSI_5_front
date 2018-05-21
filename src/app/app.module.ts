// Adam Waniak, 228124
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ObjectsComponent } from './object/objects/objects.component';
import { ObjectDetailsComponent } from './object/object-details/object-details.component';
import { AddObjectComponent } from './object/add-object/add-object.component';
import {ObjectsService} from "./object/objects.service";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemEntityDbService} from "./InMemEntityDbService";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";


/**
 * Moduły aplikacji
 */
@NgModule({
  declarations: [
    AppComponent,
    ObjectsComponent,
    ObjectDetailsComponent,
    AddObjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemEntityDbService),
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [
    ObjectsService,
    AddObjectComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
