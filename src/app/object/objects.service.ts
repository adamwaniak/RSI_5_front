import { Injectable } from '@angular/core';
import {Entity} from "./entity";
import {Observable} from "rxjs/internal/Observable";
import {HttpClient} from "@angular/common/http";
import {EntityToAdd} from "./add-object/add-object.component";

@Injectable({
  providedIn: 'root'
})
export class ObjectsService {

  url = 'api/objects';

  constructor(private http: HttpClient) { }

  getObjects(): Observable<Entity[]> {
    return this.http.get<Entity[]>(this.url);
  }

  editObject(id: number, entity: Entity) {
    return this.http.post(this.url + '/' + id, entity);
  }

  addObject(object: EntityToAdd){
    return this.http.post(this.url,object);
  }


  getObject(id: number) {
    return this.http.get<Entity>(this.url + "/" + id);
  }
}
