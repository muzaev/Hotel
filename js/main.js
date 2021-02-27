$(document).ready(function () {
    var hotelSlider = new Swiper('.hotel-slider', {
        // Optional parameters
        loop: true,
    
        // Navigation arrows
    
        navigation:  {
            nextEl: '.hotel-slider__button--next',
            prevEl: '.hotel-slider__button--prev',
        },
        // Перелистывать слайдер с помощью клавиатуры
        keyboard: {
            enabled: true,
        }   
    })
    var reviewsSlider = new Swiper('.reviews-slider', {
        // Optional parameters
        loop: true,
    
        // Navigation arrows
    
        navigation:  {
            nextEl: '.reviews-slider__button--next',
            prevEl: '.reviews-slider__button--prev',
        },
        // Перелистывать слайдер с помощью клавиатуры
        keyboard: {
            enabled: true,
        }   
    })
    
    var menuButton = document.querySelector('.menu-button')
    menuButton.addEventListener('click', function () {
        console.log('Клик по кнопке меню')
        document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible')
    })

    var modalButton = $('[data-toggle=modal]')
    var closeModalButton = $('.modal__close')
    modalButton.on('click', openModal)
    closeModalButton.on('click', closeModal)

    function openModal () {
        var modalOverlay = $('.modal__overlay')
        var modalDialog = $('.modal__dialog')
        modalOverlay.addClass('modal__overlay--visible')
        modalDialog.addClass('modal__dialog--visible')
    }

    function closeModal (event) {
        event.preventDefault()
        var modalOverlay = $('.modal__overlay')
        var modalDialog = $('.modal__dialog')
        modalOverlay.removeClass('modal__overlay--visible')
        modalDialog.removeClass('modal__dialog--visible')
    }

    // Закрытие модального окна при нажатии ESC
    $(document).keyup(function(e) { 
       if (e.keyCode == 27) {
        var modalOverlay = $('.modal__overlay')
        var modalDialog = $('.modal__dialog')
        modalOverlay.removeClass('modal__overlay--visible')
        modalDialog.removeClass('modal__dialog--visible')
       }   
   })

    // Обработка форм
    $('.form').each(function () {
        $(this).validate({
            errorClass: "invalid",
            messages: {
                name: {
                    required: "Укажите имя",
                    minlength: "Имя должно быть не короче 2 букв"
                },
                email: {
                  required: "We need your email address to contact you",
                  email: "Your email address must be in the format of name@domain.com"
                },
                phone: {
                    required: "Телефон обязателен",
                },
            },     
        })
    })
    // Маска для номера телефона
    var maskedInput = $('input[type="tel"]'); 
        maskedInput.each(function(){
        $(this).mask("+7 (999) 999-99-99");
    });
});
