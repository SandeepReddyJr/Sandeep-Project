import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

    @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef;
    newIngredient: Ingredients[];

    constructor(private slService: ShoppingListService) { }

    ngOnInit() {
    }

    onAddItem() {
        const ingName = this.nameInputRef.nativeElement.value;
        const amtName = this.amountInputRef.nativeElement.value;
        const newIngredient = new Ingredients(ingName, amtName);
        this.slService.addIngredients(this.newIngredient);


    }
}
