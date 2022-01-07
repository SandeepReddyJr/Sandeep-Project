import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {


    recipeSelected = new EventEmitter<Recipe>();



    private recipes: Recipe[] = [
        new Recipe('A Fat Burger Recipe', 'Its a Simple Double Decker Recipe', 'https://www.leanandgreenbusiness.com/wp-content/uploads/2019/04/images1889-5ca5983e24411.jpg', [new Ingredients('Mutton', 4), new Ingredients('French Fries', 4)]),
        new Recipe('A Pasta  Recipe', 'Its  sphagetti  Recipe', 'https://www.leanandgreenbusiness.com/wp-content/uploads/2019/04/images1889-5ca5983e24411.jpg', [new Ingredients('Buns', 5), new Ingredients('Patty', 5)])
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice(); //slice--makes it an exact copy of the array (not the original array is returned)
    }

    addIngredientsToShoppingList(ingredients: Ingredients[]) {
        this.slService.addIngredients(ingredients);
    }

    getSingleRecipe(index: number) {
        return this.recipes[index];
    }
}
