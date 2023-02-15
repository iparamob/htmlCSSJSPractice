var userAgent = navigator.userAgent;
if (userAgent.indexOf("Trident/") > -1 || userAgent.indexOf("MSIE ") > 0) {
    var mens = "Este sitio web no funciona con internet explorer, por favor usa otro navegador como Edge, Firefox, Chrome.";
    alert(mens);
}
