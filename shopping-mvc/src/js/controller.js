/**
 *Controller for the shopping list application.
 */

class Controller {
    constructor(){
    console.log('Controller running!');

    /**@private {!Model} Application model */

    this.model_ = new Model(this);
    }
}