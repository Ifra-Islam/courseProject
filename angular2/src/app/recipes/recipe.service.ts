import {Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredients } from '../shared/ingredient.modal';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Recipe} from './recipe.modal';
@Injectable()
export class RecipeService {
  recipesChanged= new Subject<Recipe[]>();
  private  recipes: Recipe[]=[
        new Recipe('Nutritous Food Recipe', 
        'Delicious',
        'https://assets.myfoodandfamily.com/adaptivemedia/rendition/mff-hero-quick-easy-healthy-living-recipes-1349x475.jpg?id=4665bf72ef77dd1b02b4df592c22904a91b268cc&ht=524&wd=1349&version=1&clid=pim',
        [
          new Ingredients('Chicken',2),
          new Ingredients('Tomatoes', 4),
          new Ingredients('Onion', 3)
        ]),
        new Recipe('Healthy Dinner Recipe', 
        'Taste of Home',
        'https://www.shanazrafiq.com/wp-content/uploads/2020/05/2-Chicken-Cheese-Toast-2wm.jpg'
        ,[
          new Ingredients('Bread',2),
          new Ingredients('Meat', 4),
          new Ingredients('Lemon', 4)
        ])
      ];
      constructor(private slService: ShoppingListService ){}
      getRecipes(){
          return this.recipes.slice();
      }

      
      addIngredientsToShoppingList(ingredients: Ingredients[]){
        this.slService.addIngredients(ingredients);
      }
      getRecipe(index: number){
        return this.recipes[index];
      }
      addRecipe(recipe: Recipe){
this.recipes.push(recipe);
this.recipesChanged.next(this.recipes.slice());
      }
      updateRecipe(index:  number , newRecipe: Recipe){
this.recipes[index]= newRecipe;
this.recipesChanged.next(this.recipes.slice());
      }
      deleteRecipe(index: number){
      this.recipes.splice(index,1);
      this.recipesChanged.next(this.recipes.slice());
      }
}