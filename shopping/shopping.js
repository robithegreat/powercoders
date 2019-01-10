function createNewListItem(itemName) {
    let li = document.createElement('li');
    let spann = document.createElement('spann');
    spann.textContent = itemName;
    li.appendChild(spann);
    let button = document.createElement('button');
    button.textContent = 'Delete';
    li.appendChild(button);
    button.addEventListener('click', function (event) {
        li.remove();
    });

    document.querySelector('ul').appendChild(li);
    return li;
}

document.addEventListener('DOMContentLoaded', function (event) {
    document.querySelector('button').addEventListener('click', function (event) {
        let inputBox = document.getElementById('item');
        let li = createNewListItem(inputBox.value);
        document.querySelector('ul').appendChild(li);
        inputBox.value = '';
    });

    document.querySelector('input').addEventListener('keyup',function (event) {
        if (event.key === 'Enter') {
            let inputBox = document.getElementById('item');
            let li = createNewListItem(inputBox.value);
            document.querySelector('ul').appendChild(li);
            inputBox.value = '';
        }
    });
});
