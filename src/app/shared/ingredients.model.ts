export class Ingredients {


    //     We can get rid of the declaration of our properties up here and get rid of the content in the body
    // of this constructor and simply add an accessor in front of the property name here, so public in front
    // of both arguments.What that will do is behind the scenes, it will create the same effect we had before,
    // so it will automatically give us properties with the names we specify here as argument names, so name
    // and amount.
    // in this case and it will automatically assign the values we receive in this constructor to these newly
    // created properties.So nice and convenient shortcut.
    // }

    constructor(public name: string, public amount: number) { }
}