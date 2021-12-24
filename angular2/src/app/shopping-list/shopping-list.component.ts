import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredients } from '../shared/ingredient.modal';
import{ShoppingListService} from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
ingredients: Ingredients[]=[];


  private subscription!: Subscription;
  constructor(private slService: ShoppingListService  ) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngre();
    this.subscription = this.slService.ingredientsChanged
    .subscribe(
      (ingredients:Ingredients[]) =>{
        this.ingredients = ingredients;
      }
    );
  }
  onEditItem(index: number){
this.slService.startedEditing.next(index);
  }
 ngOnDestroy() {
     this.subscription.unsubscribe();
 }

}
