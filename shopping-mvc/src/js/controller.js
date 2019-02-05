/**
 *Controller for the shopping list application.
 */

class Controller {
    constructor(){
    console.log('Controller running!');

    /**@private {!Model} Application model */

    this.model_ = new Model(this);
    }

    /**
     * Add an item to the shopping list.
     *
     * @param name {string} name of the item to add ,may not be empty
     * @param quantity {string} the quantity of the item to add ,may not be empty
     */
    addItem(name,quantity){
        const item = new ShoppingListItem(name, quantity);
        this.model_.append(item);
    }
}