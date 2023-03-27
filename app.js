
// Помогает позволяет нам дождаться загрузки всего документа и только тогда выполнять какие то действия с ДОМ элементами гашего сайта

$(function() {

// Fixed Header //
let header = $("#header"); //Селектор элемента: что мы хотим выбрать элемент с id = Header, #решетка ставиться когда есть id, а точка . ставиться когда есть class
 let intro = $("#intro");
 let introH = intro.innerHeight(); // Высота блока интро, .height method takes withous padding. Method innerheight takes the size with padding// 
 let scrollPos = $(window).scrollTop(); //Это позиция нашего скрола! сравнивая высоту элемента с высотой сколько мы проскролили и получать значения.  образаемся к окну (window) через метод .scrollTop сколько от вверха страницы
 let nav = $("#nav");
 let navToggle = $("#navToggle");

 checkScroll(scrollPos, introH);

 // если мы хотим следить за событием скрола для нашей страницы (window),  по событию .on("scroll", при перезагрузке сайта - load, при изменении размеров экрана- resize
$(window).on("scroll load resize", function() { 
    introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();           // $(this) - обращаемся к этому окну
    
    checkScroll(scrollPos, introH);
    
    });

    function checkScroll(scrollPos, introH) {
        if(scrollPos > introH) {
            header.addClass("fixed");      
        } else {
            header.removeClass("fixed"); 

        } 
    }   

    // Smooth scroll // - 

    // выборка элемента через атрибут data-scroll, on("click" - это событие
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault(); // отменить стандаоьное поведение ссылки при клике
                        // при помощи конструкции $(this) мы получаем доступ к элементу по которуму будем кликать и получить дата атрибут
        let elementId = $(this).data('scroll');
        // чтобы получить позицию элемента от вверха страницы. elementOffset - его отступ сверху через метод .offset().top;
        let elementOffset = $(elementId).offset().top;
        
        nav.removeClass("show"); // Скрыть навигацию меню бургера при клике
    

        //чтобы проскролить страницу плавно до значения elementOffset при помощи метода .animate 

        $("html, body").animate({
            scrollTop: elementOffset - 70 // маленький отступ чтобы не накладывалось сверху
        }, 500); // скорость прокрутки в сек - 1=1000 милисекунд

    }); 
    
// Nav Toggle //

navToggle.on("click", function(event) {
    event.preventDefault();

    nav.toggleClass("show"); // показывает либо скрывает меню через метд класс
});
 
 
// Reviews: https://kenwheeler.github.io/slick/ //

let slider = $("#reviewsSlider");
 
slider.slick({
    infinite: true,  // опция - всевремя будет скролиться бесконечно
    slidesToShow: 1, // сколько слайдов будет показывать
    slidesToScroll: 1,  //сколько будет скролиться при клике
    fade: true,// чтобы затемнялись нащи отзывы, один исчезал и появлялся другой на его месте
    arrows: false, // remove arrows
    dots: true // 
});

});


//header.addClass("fixed"); //  addClass - хотим добавить класс