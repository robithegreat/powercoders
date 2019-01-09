
function createNewListItem(itemName) {
    let li = document.createElement('li');

    let spann = document.createElement('span');
    spann.textContent = itemName;
    li.appendChild(spann);

    let button = document.createElement('button');
    button.textContent = 'Delete';
    li.appendChild(button);

    button.addEventListener('click', function (event) {
        li.remove();
        console.log('Delete button is clicked:' + itemName);
    });
    document.querySelector('ul').appendChild(li);
    return li;
};

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('button').addEventListener('click', function(event) {
        let inputBox = document.getElementById('item');
        console.log(inputBox.value);
        let li = createNewListItem(inputBox.value);
        let ul=document.querySelector('ul');
        ul.appendChild(li);
    });
});
