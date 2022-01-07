import { EventEmitter, Injectable } from '@angular/core';

import { Ingredients } from '../shared/ingredients.model';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredients[]>();

    private ingredients: Ingredients[] = [
        new Ingredients('Apples', 7),
        new Ingredients('Tomatoes', 12)
    ];


    constructor() { }

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredients) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredients[]) {
        //     for (let ingredient of this.ingredients){
        //         this.addIngredient(ingredients)
        //     }
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());

    }
}