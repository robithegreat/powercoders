/**HTML View for the ShoppingList.*/
class View {
    /**
     * @param model {!Model} App data model
     * @param controller {!controller} App controller
     */
    constructor(model, controller){
        console.log('View ready');

        /**@param {!Model} App data model */
        this.model_ = model;

        /**@private {!Controller}App controller */
        this.controller_ = controller;

        /**@private {!HTMLElement} Shopping list element */
        this.shoppingList_= document.querySelector('ul');

    }
    /**
     * Update the UI with the shopping list contents.
     */
    update(){
        while (this.shoppingList_.firstChild) {
            this.shoppingList_.firstChild.remove();
        }

        for (let i = 0; i < this.model_.items.length; i++) {
            const item = this.model_.items[i];
            const listItem = item.toListItem();
            this.shoppingList_.appendChild(listItem);
        }
    }
}