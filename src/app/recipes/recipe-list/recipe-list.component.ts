import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../data-models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('recipe1', '1st test Recipe', 'https://c.pxhere.com/images/15/3d/9ee477ee62341b9480ce314b02f8-1417897.jpg!d'),
    new Recipe('recipe2', '2nd test Recipe', 'https://get.pxhere.com/photo/dish-meal-food-colorful-meat-barbecue-cuisine-onion-bacon-asian-food-tasty-skewer-edible-kebab-grilling-mediterranean-food-hors-d-oeuvre-red-green-shish-kebab-grilled-food-meat-skewer-edible-smoked-bacon-brochette-shashlik-695329.jpg'),
    new Recipe('recipe3', '3rd test Recipe', 'https://get.pxhere.com/photo/dish-meal-food-meat-cuisine-taco-carnitas-203331.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddNewRecipe = () => {
    console.log("onAddNewRecipe() is called!");
  }
}
