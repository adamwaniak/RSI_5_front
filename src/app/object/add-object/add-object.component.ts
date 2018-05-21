// Adam Waniak, 228124
import {Component, OnInit} from '@angular/core';
import {Entity} from '../entity';
import {ObjectsService} from '../objects.service';

/**
 * Komponent umożliwiający dodanie nowego studenta
 */
@Component({
  selector: 'app-add-object',
  templateUrl: './add-object.component.html',
  styleUrls: ['./add-object.component.css']
})
export class AddObjectComponent implements OnInit {

  constructor(private objectsService: ObjectsService) {
  }

  /**
   * Obiekt nowego studenta
   */
  object: Entity;

  ngOnInit() {
    this.object = new Entity();
  }

  /**
   * Dodaje studenta do bazy danych
   */
  public addObject() {
    this.objectsService.addObject(this.object).subscribe((response) => console.log(response));
  }

}


