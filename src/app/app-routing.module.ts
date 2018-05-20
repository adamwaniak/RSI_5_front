import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ObjectsComponent} from "./object/objects/objects.component";
import {ObjectDetailsComponent} from "./object/object-details/object-details.component";
import {AddObjectComponent} from "./object/add-object/add-object.component";



const routes: Routes = [
  {path: '', redirectTo: '/objects', pathMatch: 'full'},
  {path: 'objects', component: ObjectsComponent},
  {path: 'objects/add',component: AddObjectComponent},
  {path: 'objects/object/:id',component: ObjectDetailsComponent},
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})


export class AppRoutingModule { }
