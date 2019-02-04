/**
 * Create the controller to run the application.
 */
function domContenetLoaded() {
    new Controller();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
        domContenetLoaded();
    });
} else {
    domContenetLoaded();
}



