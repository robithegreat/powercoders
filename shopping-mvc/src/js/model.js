/**
 * Shopping list model.
 *
 *This list is modelled as an array.
 */
class Model{

    /** @param controller {!controller} Application controller */

    constructor(controller) {

    console.log('Controller running!');

    /**@private {!ShoppingListItem[]} Item in the  list */

        this.items_ = [new ShoppingListItem('First item','q1'),
            new ShoppingListItem('Second item','q2'),
            new ShoppingListItem('Third item','q3')];

    /**@private {!View} view for this model */

    this.view_ = new View(this, controller);

        this.view_.update();
    }

    get items() {
        return this.items_.slice();
    }

}

