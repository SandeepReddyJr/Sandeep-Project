import { Ingredients } from "../shared/ingredients.model";

export class Recipe {

    //model--blueprint for objects we create to look like, when created as a instance of class Recipe(byJS)

    public name: string;   //To assign propertyName:dataType; (TS)
    public description: string;
    public imagePath: string;
    public ingredients: Ingredients[];
    //can instantiate with NEW keyword and pass arguments(declared for NEW to be created from blueprint-above)
    constructor(name: string, desc: string, imagePath: string, ingredients: Ingredients[]) {
        // So inside the body of this constructor, we have to assign the arguments we receive here to the properties
        //Propeties==defined in class model(blueprint)

        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = this.ingredients;
    }

}


