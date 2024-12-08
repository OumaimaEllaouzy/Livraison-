import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { Restaurant } from 'src/app/models/restaurant.model';
import { FoodService } from 'src/app/services/food/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  restaurants: Restaurant[] = [];
  filteredRestaurants: Restaurant[] = [];
  searchQuery: string = '';
  foods: string[] = [];

  constructor(
    private foodService: FoodService,
    private restaurantService: RestaurantService,
    private route: ActivatedRoute // Ajout du paramètre route
  ) {}

  ngOnInit(): void {
    // Gestion des paramètres de la route
    this.route.params.subscribe((params) => {
      if (params['searchItems']) {
        // Filtrer les aliments en fonction des paramètres
        this.foods = this.foodService
          .getAll()
          .filter((food) =>
            food.toLowerCase().includes(params['searchItems'].toLowerCase())
          );
      } else {
        // Charger tous les aliments si aucun paramètre
        this.foods = this.foodService.getAll();
      }
    });

    // Récupération des restaurants depuis le service
    this.restaurantService.getRestaurants().subscribe((data) => {
      this.restaurants = data;
      this.filteredRestaurants = [...data]; // Cloner les données pour la liste filtrée
    });
  }

  // Méthode pour la recherche de restaurants
  onSearch(): void {
    this.filteredRestaurants = this.restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
