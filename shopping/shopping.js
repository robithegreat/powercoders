/**
 * Creates and returns an 'li' element for  inclusion in the shopping list.
 *
 * @param {string} itemName Name of the item to add to the list
 * @returns {HTMLElement} li element
 */

function createNewListItem(itemName) {
    const listItem = document.createElement('li');
    const span = document.createElement('p');

    span.innerText = itemName;
    listItem.appendChild(span);

    const deleteButton = document.createElement('button');
    const text = document.createTextNode('Delete');

    deleteButton.addEventListener('click', function (event) {
        listItem.remove();

        document.getElementById('clearButton').disabled = document.querySelectorAll('li').length === 0;

    });

    deleteButton.appendChild(text);
    listItem.appendChild(deleteButton);

    return listItem;
}

document.addEventListener('DOMContentLoaded', function (event) {
    /**widget that the use typesson item in to.*/
    const inputBox = document.getElementById('item');
    const shoppingList = document.querySelector('ul');
    const addItemButton = document.querySelector('#add');
    const clearButton = document.getElementById('clearButton');
    addItemButton.disabled = true;
    inputBox.focus();
    clearButton.disabled = true;

    document.getElementById('add').addEventListener('click', function (event) {
        if (inputBox.value.trim() !== '') {
            shoppingList.appendChild(createNewListItem(inputBox.value.trim()));
            inputBox.value = '';
            addItemButton.disabled = true;
            clearButton.disabled = false;

        }
        inputBox.focus();
    });

    document.querySelector('input').addEventListener('keyup', function (event) {
        const trimmedValue = inputBox.value.trim();
        addItemButton.disabled = trimmedValue === '';

        if (trimmedValue === '') {
            return;

        }
        if (event.key !== 'Enter') {
            return;
        }

        shoppingList.appendChild(createNewListItem(trimmedValue));
        inputBox.value = '';
        addItemButton.disabled = true;
        clearButton.disabled = false;
        inputBox.focus();
    });

    document.getElementById('clearButton').addEventListener('click', function (event) {
        let x = document.querySelectorAll('li');
        x.forEach(function (el) {
            el.remove();
            clearButton.disabled = true;
            inputBox.focus();
        });
    });


});



