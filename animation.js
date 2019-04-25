//Jojojo hab mal ein paar Kommentare zum Verständnis dazu geschrieben

var handler = onVisibilityChange(
    //Hier kommt das zu überprüfende Element hin
    document.getElementById("test"),
    //Hier hab ich die Sichtbarkeit als zu erwartenden Parameter hinzugefügt
    function(visible) {
        //Hier ist der code vom callback, also was ausgeführt wird wenn sich die Sichtbarkeit geändert hat

        //Mit dem sichtbarkeits-parameter kann man überprüfen ob das element aufgetaucht oder verschwunden ist
        if(visible) {
            console.log("Element ist sichtbar geworden");
        } else {
            console.log("Element ist nicht mehr sichtbar");
        }
    }
);

//Immer wenn sich der Viewport ändert, also wenn die Events DOMContentLoaded, load, scroll oder resize gefeuert werden
//soll handler ausgeführt werden, welcher onVisibilityChange aufruft.

//Also: immer wenn sich der Viewport ändert, überprüfe ob sich die Sichtbarkeit des Elements geändert hat
if (window.addEventListener) {
    addEventListener('DOMContentLoaded', handler, false); 
    addEventListener('load', handler, false); 
    addEventListener('scroll', handler, false); 
    addEventListener('resize', handler, false); 
} else if (window.attachEvent)  {
    attachEvent('onDOMContentLoaded', handler); // IE9+ :(
    attachEvent('onload', handler);
    attachEvent('onscroll', handler);
    attachEvent('onresize', handler);
}



//Gibt einen boolean zurück ob das Element im Viewport ist
function isElementInViewport (el) {

    //Position des Elements
    var rect = el.getBoundingClientRect();
    //Größe des Viewports
    var height = (window.innerHeight || document.documentElement.clientHeight);
    var width = (window.innerWidth || document.documentElement.clientWidth);

    // Der Bums der hier vorher stand gibt nur true zurück wenn das ganze Element sichtbar ist und false wenn es nur teilweise sichtbar ist
    // Aber eigentlich ist es doch auch sichtbar, wenn es noch nicht komplett sichtbar ist, sondern nur ein Teil vom Element oder?
    // return (
    //     rect.top >= 0 &&
    //     rect.left >= 0 &&
    //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
    //     rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    // );

    // Meine Version
    // Ich habs mal nur auf vertikale Bewegung begrenzt, aber so gibt er true zurück, sobald das Element teilweise im Bild ist
    return (
        //Wenn das Element oben aus dem Viewport raus ist, muss die untere Seite im Bild sein
        rect.top < 0  && rect.bottom > 0
        //oder
        ||
        //Wenn das Element unten aus dem Viewport raus ist, muss die obere Seite innerhalb des Viewports sein
        rect.bottom > height  && rect.top < height
        //oder
        ||
        //Wenn das Element halt komplett im Viewport ist
        rect.top >= 0 && rect.bottom <= height
    );
}

//Führt die mitgegebene Funktion(callback) aus, wenn sich das die Sichtbarkeit des Elements geändert hat
function onVisibilityChange(el, callback) {
    var old_visible;
    return function () {
        var visible = isElementInViewport(el);
        if (visible != old_visible) {
            old_visible = visible;
            if (typeof callback == 'function') {
                //Hab hier noch die Sichtbarkeit als parameter mitgegeben
                callback(visible);
            }
        }
    }
}