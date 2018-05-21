import {Injectable} from '@angular/core';
import {Entity} from './entity';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObjectsService {
  /**
   * Endpoint bazy danych
   * @type {string}
   */
  url = 'api/objects';

  constructor(private http: HttpClient) {
  }

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
    console.log(entity);
    return this.http.post(this.url + '/' + id, entity);
  }

  /**
   * Dodaje studenta do bazy danych
   * @param {EntityToAdd} object nowy student
   * @returns {Observable<Object>}
   */
  addObject(object: Entity) {
    console.log(object);
    return this.http.post(this.url, object);
  }

  /**
   * Zwtaca studenta o podanym id
   * @param {number} id
   * @returns {Observable<Entity>}
   */
  getObject(id: number) {
    return this.http.get<Entity>(this.url + '/' + id);
  }

  /**
   * Usuwa studenta o podanym id
   * @param {number} id studenta
   * @returns {Observable<Object>}
   */
  removeObject(id: number) {
    return this.http.delete(this.url + '/' + id);

  }
}
