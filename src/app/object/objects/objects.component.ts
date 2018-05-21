import {Component, OnInit} from '@angular/core';
import {Entity} from '../entity';
import {ObjectsService} from '../objects.service';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.css']
})
export class ObjectsComponent implements OnInit {

  constructor(private objectsService: ObjectsService) {
  }

  objects: Entity[];

  ngOnInit() {
    this.objectsService.getObjects().subscribe(objects => {
      this.objects = objects;
      console.log(this.objects);

    });
  }

  public remove(object: Entity) {
    this.objectsService.removeObject(object.id).subscribe((response) => {
      console.log('Usunięto studenta: ' + object.index);
    });
  }

}
