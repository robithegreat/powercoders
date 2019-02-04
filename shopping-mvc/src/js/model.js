/**
 * Shopping list model.
 *
 *This list is modelled as an array.
 */

class Model {

    /** @param  controller {!Controller} App controller */

    constructor(controller) {
        console.log('Controller running!');

    /**@private {!ShoppingListItem[]} Item in the  list */

    this.items_ = [];

    /**@private {!View} view for this model */

    this.view_ = new View(this, controller);
    }
}