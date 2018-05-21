import { InMemoryDbService } from 'angular-in-memory-web-api';


/**
 * Mock bazy danych
 */
export class InMemEntityDbService implements InMemoryDbService {
  createDb() {
    let objects = [
      { id: 1, name: 'obiekt1', price: 5, description: "super obiekt" },
      { id: 2, name: 'obiekt2', price: 6, description: "super obiekt1" },
      { id: 3, name: 'obiekt3', price: 7, description: "super obiekt2" },
      { id: 4, name: 'obiekt4', price: 8, description: "super obiekt3" },
      { id: 5, name: 'obiekt5', price: 9, description: "super obiekt4" },
      { id: 6, name: 'obiekt6', price: 10, description: "super obiekt5" },

    ];
    return {objects};
  }
}
