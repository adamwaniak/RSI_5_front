import { Component, OnInit } from '@angular/core';
import {Entity} from "../entity";
import {ObjectsService} from "../objects.service";

/**
 * Komponent wyświetlający liste studentów
 */
@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.css']
})
export class ObjectsComponent implements OnInit {

  constructor(private objectsService: ObjectsService) { }

  objects: Entity[];

  ngOnInit() {
    this.objectsService.getObjects().subscribe(objects => this.objects = objects)
  }

}
