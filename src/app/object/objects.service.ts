import {Injectable} from '@angular/core';
import {Entity} from './entity';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObjectsService {

  url = '169.254.244.255:56477/Service1.svc/Students';

  constructor(private http: HttpClient) {
  }

  getObjects(): Observable<Entity[]> {
    return this.http.get<Entity[]>(this.url);
  }

  editObject(index: string, entity: Entity) {
    return this.http.post(this.url + '/' + index, entity);
  }

  addObject(object: Entity) {
    return this.http.post(this.url, object);
  }


  getObject(id: number) {
    return this.http.get<Entity>(this.url + '/' + id);
  }
}
