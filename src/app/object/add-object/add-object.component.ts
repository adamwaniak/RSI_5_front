import {Component, OnInit} from '@angular/core';
import {Entity} from '../entity';
import {ObjectsService} from '../objects.service';

@Component({
  selector: 'app-add-object',
  templateUrl: './add-object.component.html',
  styleUrls: ['./add-object.component.css']
})
export class AddObjectComponent implements OnInit {

  constructor(private objectsService: ObjectsService) {
  }

  object: Entity;

  ngOnInit() {
    this.object = new Entity();
  }

  public addObject() {
    this.objectsService.addObject(this.object).subscribe((response) => console.log(response));
  }

}


