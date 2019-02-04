/**
 *Represents an item in the shopping list.
 */
class ShoppingListItem {
    /**
     * @param name {string} Name
     *@param quantity {string} Quantity
     */
    constructor(name, quantity){
        this.name = name;
        this.quantity = quantity;
    }

    /**
     * Creates and returns an 'li' element for  inclusion in the shopping list.
     *
     * @returns {HTMLElement} li element
     */
    toListItem(){
        const listItem = document.createElement('li');
        const span = document.createElement('p');

        span.innerText = this.name;
        listItem.appendChild(span);

        if (this    .quantity !== '') {
            listItem.appendChild(document.createTextNode(''));
            const quantityText = document.createElement('span');
            quantityText.textContent = `(${this.quantity})`;
            listItem.appendChild(quantityText);
        }

        const deleteButton = document.createElement('button');
        const text = document.createTextNode('Delete');

        deleteButton.addEventListener('click', function () {
            listItem.remove();

            document.getElementById('clearButton').disabled = document.querySelectorAll('li').length === 0;

        });

        deleteButton.appendChild(text);
        listItem.appendChild(deleteButton);

        return listItem;

    }
}
