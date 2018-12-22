document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById('robi').addEventListener('click', function (event) {
        let elU = document.createElement('ul');
        let LI = document.createElement('li');
        liContent = document.createTextNode('Hello every body how are you doing so far!');
        LI.appendChild(liContent);

        let LIII = document.createElement('li');
        liContent = document.createTextNode('I hope we are goingmake nik proud');
        LIII.appendChild(liContent);

        let EM = document.createElement('em');
        emContent = document.createTextNode('I hope we are going');
        EM.appendChild(emContent);

        let LII = document.createElement('li');
        liContent = document.createTextNode('i wish you all happy x-mass');
        LII.appendChild(liContent);

        LIII.appendChild(EM);

        elU.appendChild(LI);

        elU.appendChild(LIII);

        elU.appendChild(LII);

        let body = document.getElementById('ro');
        body.appendChild(elU);
    });

});
