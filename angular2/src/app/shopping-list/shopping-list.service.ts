import {Ingredients} from '../shared/ingredient.modal';
import{Subject} from 'rxjs';
export class  ShoppingListService{
    ingredientsChanged= new Subject<Ingredients[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredients[]=[
        new Ingredients('Bread',2),
        new Ingredients('Tomatoes',5)
      ];
      getIngre(){
          return this.ingredients.slice();
      }
      getIngredient(index: number){
        return this.ingredients[index];
      }
      addIngre(ingredient: Ingredients){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
      }
      addIngredients(ingredients: Ingredients[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
      }
      updateIngre(index: number, newIngredient: Ingredients){
        this.ingredients[index]= newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
}
deleteIngre(index:number){
this.ingredients.splice(index, 1);
this.ingredientsChanged.next(this.ingredients.slice());
}

}