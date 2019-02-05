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

        this.items_ = [];

    /**@private {!View} view for this model */

    this.view_ = new View(this, controller);

        this.view_.update();
    }

    /**
     * Appends a new item to the list.
     *
     * @returns {ShoppingListItem[]}
     */
    append(item){
        this.items_.push(item);
        this.view_.update();
    }

    get items() {
        return this.items_.slice();
    }

}

