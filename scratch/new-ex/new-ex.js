
document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById('robi').addEventListener('click', function (event) {
        let el = document.createElement('p');
        let pContent = document.createTextNode('WE ARE AWSOME');
        el.appendChild(pContent);
        let body = document.getElementById('ro');
        body.appendChild(el);
    });
});
