document.addEventListener('DOMContentLoaded',function (event) {
    document.querySelector('button').addEventListener('click', function (event) {
        let inputBox = document.getElementById('item');
        console.log(inputBox.value);

    });

});


function createNewListItem(itemName) {

    let li = document.createElement('li');

    let spann = document.createElement('span');

    spannText = document.createTextNode(itemName);
    spann.appendChild(spannText);

    let button = document.createElement('button');
    buttonText = document.createTextNode('Delete');
    button.appendChild(buttonText);

    li.appendChild(spann);
    li.appendChild(button);
    return li;
}
