import {InMemoryDbService} from 'angular-in-memory-web-api';


/**
 * Mock bazy danych
 */
export class InMemEntityDbService implements InMemoryDbService {
  createDb() {
    const objects = [
      {id: 1, name: 'Włodek', lastName: 'Markowicz', index: '228125', city: 'Wrocław'},
      {id: 2, name: 'Włodek', lastName: 'Milowicz', index: '228323', city: 'Warszawa'},
      {id: 3, name: 'Marcin', lastName: 'Niełacny', index: '218125', city: 'Szczecin'},
      {id: 4, name: 'Jakub', lastName: 'Przybylski', index: '211115', city: 'Wrocław'},


    ];
    return {objects};
  }
}
