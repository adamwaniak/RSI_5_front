import {Component, OnInit} from '@angular/core';
import {Entity} from '../entity';
import {ObjectsService} from '../objects.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-object-details',
  templateUrl: './object-details.component.html',
  styleUrls: ['./object-details.component.css']
})
export class ObjectDetailsComponent implements OnInit {

  object: Entity = new Entity();

  constructor(private objectsService: ObjectsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.object.index = '';
    this.object.name = '';
    this.object.lastName = '';
    this.object.city = '';

    this.getObject();
  }

  getObject(): void {
    const id = +this.route.snapshot.paramMap.get('id'); // + convert string to int
    this.objectsService.getObject(id).subscribe(object => this.object = object);
  }

  public updateObject(): void {
    this.objectsService.editObject(this.object.index, this.object).subscribe((response) => console.log(response));
  }
}
