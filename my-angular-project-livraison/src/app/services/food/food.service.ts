import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():string[]{
    return[
      'assets/images/burger-with-melted-cheese.jpg',
      'assets/images/téléchargement (1).jpg',
       'assets/images/téléchargement (2).jpg',
       'assets/images/images.jpg',
       'assets/images/Sausage-and-Ricotta-Pizza-with-Castelvetrano-Olives-XL-RECIPE0422-74dd7f860abd4e40a5c3c283e3169cda.jpg',
       'assets/images/téléchargement.jpg',
       'assets/images/téléchargement (3).jpg',
       'assets/images/téléchargement (4).jpg',
       'assets/images/images (1).jpg'
    ]
  }

}
