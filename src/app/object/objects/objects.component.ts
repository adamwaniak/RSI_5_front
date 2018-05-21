// Adam Waniak, 228124
import {Component, OnInit} from '@angular/core';
import {Entity} from '../entity';
import {ObjectsService} from '../objects.service';

/**
 * Komponent wyświetlający liste studentów
 */
@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.css']
})
export class ObjectsComponent implements OnInit {
  /**
   *
   * @param {ObjectsService} objectsService obiekt serwisu
   */
  constructor(private objectsService: ObjectsService) {
  }

  /**
   * Tablica przechowująca studentów
   */
  objects: Entity[];

  ngOnInit() {
    this.objectsService.getObjects().subscribe(objects => {
      this.objects = objects;
      console.log(this.objects);

    });
  }

  /**
   * Usuwa studenta z bazy danych
   * @param {Entity} object
   */
  public remove(object: Entity) {
    this.objectsService.removeObject(object.id).subscribe((response) => {
      console.log('Usunięto studenta: ' + object.index);
    });
  }

}
