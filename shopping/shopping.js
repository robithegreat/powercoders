document.addEventListener('DOMContentLoaded',function (event) {
    document.querySelector('button').addEventListener('click', function (event) {
        let inputBox = document.getElementById('item');
        console.log(inputBox.value);
    });

});