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

  /**
   * Zwraca tablice studentów
   * @returns {Observable<Entity[]>}
   */
  getObjects(): Observable<Entity[]> {
    return this.http.get<Entity[]>(this.url);
  }

  /**
   * Edytuje studenta o podanym id
   * @param {number} id studenta
   * @param {Entity} entity nowe właściwości studenta
   * @returns {Observable<Object>}
   */
  editObject(id: number, entity: Entity) {
    return this.http.post(this.url + '/' + id, entity);
  }

  /**
   * Dodaje studenta do bazy danych
   * @param {EntityToAdd} object nowy student
   * @returns {Observable<Object>}
   */
  addObject(object: EntityToAdd){
    return this.http.post(this.url,object);
  }

  /**
   * Zwtaca studenta o podanym id
   * @param {number} id
   * @returns {Observable<Entity>}
   */
  getObject(id: number) {
    return this.http.get<Entity>(this.url + "/" + id);
  }
}
