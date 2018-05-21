import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemEntityDbService implements InMemoryDbService {
  createDb() {
    const objects = [
      {name: 'Włodek', lastName: 'Markowicz', index: '228125', city: 'Wrocław'},
      {name: 'Włodek', lastName: 'Milowicz', index: '228323', city: 'Warszawa'},
      {name: 'Marcin', lastName: 'Niełacny', index: '218125', city: 'Szczecin'},
      {name: 'Jakub', lastName: 'Przybylski', index: '211115', city: 'Wrocław'},


    ];
    return {objects};
  }
}
