import {Injectable} from '@angular/core';
import {Entity} from './entity';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObjectsService {

  url = 'api/objects';

  constructor(private http: HttpClient) {
  }

  getObjects(): Observable<Entity[]> {
    return this.http.get<Entity[]>(this.url);
  }

  editObject(id: number, entity: Entity) {
    console.log(entity);
    return this.http.post(this.url + '/' + id, entity);
  }

  addObject(object: Entity) {
    console.log(object);
    return this.http.post(this.url, object);
  }


  getObject(id: number) {
    return this.http.get<Entity>(this.url + '/' + id);
  }

  removeObject(id: number) {
    return this.http.delete(this.url + '/' + id);

  }
}
