$(document).ready(function () {

    // call pop-up
    var $callbackBtn = $('callback-btn');

     $("[data-toggle=popover]").popover({
      trigger: 'focus',
      html: true,
    });


    // SELECTS STYLES
    $('.select-multiple').select2({
        placeholder: "Выберите марку и модель авто"
    });

    $('.select-simple').selectize({
        items: null,
        create: true,
        sortField: 'text'
    });
    $('.select-inStock').selectize({
        create: true,
        sortField: 'text'
    });
    $('.select-simple-marks').selectize({
        create: true,
        sortField: 'text'
    });
    // SELECTS STYLES END -------

    // PRICE RANGE
   // polzunok#1
    $("#polzunok-price").slider({
        min: 60000,
        max: 900000,
        animate: "slow",
        range: "min",
        value: 250000,
        slide : function(event, ui) {
            $("#result-polzunok-price").text(ui.value);
        }
    });
    $( "#result-polzunok-price" ).text($( "#polzunok-price" ).slider( "value" ));

     // polzunok#2
    $("#polzunok-power").slider({
        min: 100,
        max: 1000,
        animate: "slow",
        range: "min",
        value: 500,
        slide : function(event, ui) {
            $("#result-polzunok-power").text(ui.value);
        }
    });
    $( "#result-polzunok-power" ).text($( "#polzunok-power" ).slider( "value" ));

    // PRICE RANGE END ----------

    // SLIDERS
    $('.propose-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        prevArrow: '#propose-arrow-prev',
        nextArrow: '#propose-arrow-next',
        responsive: [
            {
              breakpoint: 1199,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
            },
          ]
    });
    $('.arrivals-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
        prevArrow: '#arrivals-arrow-prev',
        nextArrow: '#arrivals-arrow-next',
        responsive: [
            {
              breakpoint: 1199,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
              }
            },
            {
              breakpoint: 992,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
            },
          ]
    });
    // banks slider
    $('.banks-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '#banks-arrow-prev',
        nextArrow: '#banks-arrow-next',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 3,
              }
            },
            {
              breakpoint: 992,
              settings: {
                  slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
              }
            },
          ]
    });
    // offers
    $('.offers-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
        prevArrow: '#offers-arrow-prev',
        nextArrow: '#offers-arrow-next',
        responsive: [
            {
              breakpoint: 1199,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
              }
            },
            {
              breakpoint: 992,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
            },
          ]
    });
    // SLIDERS END -----

    // changing image angles by hover
    $('.change-img-trigger').hover(function () {
        var $parent = $(this).parent();
        var $parentImg = $parent.find('.change-img-trigger');
        $parentImg.removeClass('active');
        $(this).addClass('active');
    });




    // initialize the vh-check
    (function () {
      var isNeeded = vhCheck('browser-address-bar');
    }());

    $(document).on('touchmove',function(e){
    e.preventDefault();
    });

    // MAP
    //Дождёмся загрузки API и готовности DOM.
    ymaps.ready(init);
    function init() {
        myMap = new ymaps.Map('map', {
            center: [37.770389, 55.650111],
            zoom: 16
        });
        myMap.geoObjects.add(new ymaps.Placemark([37.770389, 55.650111], {
              preset: 'twirl#redDotIcon'
       }));
       myMap.behaviors.disable('scrollZoom');
       // myMap.behaviors.disable('drag');
    };

});
