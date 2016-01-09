var Azth = function () {

    this.run = function () {
        jQuery('head').append('<link rel="stylesheet" type="text/css" href="' + Azth.URL_CSS + 'style.css">');

        jQuery("#wrapper").load(Azth.URL_TEMPLATE + "wrapper.html", function () {
            jQuery("#logo").attr("src", Azth.URL_DATA + "img/logo.png");

            appFramework.loadExternal();
        });


    };
};

Azth.URL_ROOT = AppFramework.URL_MODULES + "azerothshard/";
Azth.URL_SRC = Azth.URL_ROOT + "src/";
Azth.URL_DATA = Azth.URL_ROOT + "data/";
Azth.URL_TEMPLATE = Azth.URL_SRC + "template/";
Azth.URL_CSS = Azth.URL_TEMPLATE + "css/";


var azth = new Azth();

jQuery(document).ready(function () {
    azth.run();
});
