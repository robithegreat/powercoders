/**
 * Creates and returns an 'li' element for  inclusion in the shopping list.
 *
 * @param {string} itemName Name of the item to add to the list
 * @returns {HTMLElement} li element
 */

function createNewListItem(itemName, quantity) {
    const listItem = document.createElement('li');
    const span = document.createElement('p');

    span.innerText = itemName;
    listItem.appendChild(span);

    if (quantity !== '') {
        listItem.appendChild(document.createTextNode(''));
        const quantityText = document.createElement('span');
        quantityText.textContent = `(${quantity})`;
        listItem.appendChild(quantityText);
    }

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

    document.getElementById('add').addEventListener('click', function (event) {
        if (inputBox.value.trim() !== '') {
            shoppingList.appendChild(createNewListItem(inputBox.value.trim(), inputBoxQ.value.trim()));
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

        shoppingList.appendChild(createNewListItem(inputBox.value.trim(), inputBoxQ.value.trim()));
        inputBox.value = '';
        inputBoxQ.value = '';
        addItemButton.disabled = true;
        clearButton.disabled = false;
        inputBox.focus();
    });

    document.getElementById('times').addEventListener('keyup', function (event) {
        const trimValue = inputBoxQ.value.trim();
        if (trimValue === '') {
            return;
        }
        if (event.key !== 'Enter') {
            return;
        }
            shoppingList.appendChild(createNewListItem(inputBox.value.trim(), inputBoxQ.value.trim()));
            inputBoxQ.value = '';
            inputBox.value = '';
    });

    document.getElementById('clearButton').addEventListener('click', function (event) {
        let x = document.querySelectorAll('li');
        x.forEach(function (el) {
            el.remove();
            clearButton.disabled = true;
            inputBox.focus();
        });
    });

}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function (event) {
        domContenetLoaded();
    });
} else {
    domContenetLoaded();
}




