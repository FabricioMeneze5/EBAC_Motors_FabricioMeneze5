$(document).ready(function() {
    $('#image-carousel').slick({
        autoplay: true,
    });

    $('.menu-burguer').click(function() {
        $('nav').slideToggle();
    })

    $('#telephone').mask('(+000) 000 000 000', {
        placeholder:'(+CCC) 000 000 000'
    });

    $('form').validade({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telephone: {
                required: true
            },
            mensage: {
                required: true
            },
            interestedVehicle: {
                required: false
            }
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(event, validator) {
            let incorrectFields = validator.numberOfInvalids();
            console.log(incorrectFields)
        }
    })

    $('.cars-list button').click(function() {
        const destiny = $('#contact');
        const vehicleName = $(this).parent().find('h3').text();

        $('#interested-vehicle').val(vehicleName);

        $('html').animate({
            scrollTop: destiny.offset().top
        }, 1000)
    })
})