$(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 1200,
		autoplay: true,
		autoplaySpeed: 2000,
		adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"</button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
				    dots: false,
				    arrows: true
				}
			},
			{
			  	breakpoint: 768,
			 	settings: {
                    slidesToShow: 2,
                    dots: false,
                    arrows: false,
                    slidesToScroll: 2
			  	}
			},
			{
			  	breakpoint: 576,
			  	settings: {
                    slidesToShow: 2,
                    dots: false,
                    arrows: false,
                    slidesToScroll: 1
			  	}
			}
		]
	});

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function(i){
        $(this).on('click', function(){
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

    //Валидность

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите ваше имя",
                    minlength: jQuery.validator.format("Введите не менее {0} символов!")
                },
                phone: "Пожалуйста, введите ваш номер телефона",
                email: {
                    required: "Пожалуйста, введите ваш E-mail ",
                    email: "Неверный E-mail"
                }
            }
        });
    };
    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");
});