$(document).ready(function () {

    $('.select-multiple').select2({
        placeholder: "Выберите марку и модель авто"
    });

    $('.select-simple').selectize({
        items: null,
        create: true,
        sortField: 'text'
    });
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
});
