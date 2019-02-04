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

function domContenetLoaded() {

    /**widget that the use typesson item in to.*/
    const inputBoxQ = document.getElementById('times');
    const inputBox = document.getElementById('item');
    const shoppingList = document.querySelector('ul');
    const addItemButton = document.querySelector('#add');
    const clearButton = document.getElementById('clearButton');
    addItemButton.disabled = true;
    inputBox.focus();
    clearButton.disabled = true;

    document.getElementById('add').addEventListener('click', function () {
        if (inputBox.value.trim() !== '') {
            const item = new ShoppingListItem(inputBox.value.trim(), inputBoxQ.value.trim());
            shoppingList.appendChild(item.toListItem());
            inputBox.value = '';
            inputBoxQ.value = '';
            inputBox.focus();
            addItemButton.disabled = true;
            clearButton.disabled = false;
        }
        inputBox.focus();
    });

    document.querySelector('input').addEventListener('keyup', onkeyup);
    document.getElementById('times').addEventListener('keyup',onkeyup);


    document.getElementById('clearButton').addEventListener('click', function () {
        let x = document.querySelectorAll('li');
        x.forEach(function (el) {
            el.remove();
            clearButton.disabled = true;
            inputBox.focus();
        });
    });
}


function onkeyup() {

    const inputBoxQ = document.getElementById('times');
    const inputBox = document.getElementById('item');
    const shoppingList = document.querySelector('ul');
    const addItemButton = document.querySelector('#add');
    const clearButton = document.getElementById('clearButton');
    const trimValue = inputBoxQ.value.trim();
    const trimmedValue = inputBox.value.trim();

    if (trimmedValue === '') {
        return;

    }

    if (trimValue === '') {
        return;

    }
    if (event.key !== 'Enter') {
        return;
    }

    const item = new ShoppingListItem(inputBox.value.trim(), inputBoxQ.value.trim());
    shoppingList.appendChild(item.toListItem());
    inputBox.value = '';
    inputBoxQ.value = '';
    addItemButton.disabled = true;
    clearButton.disabled = false;
    inputBox.focus();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
        domContenetLoaded();
    });
} else {
    domContenetLoaded();
}



