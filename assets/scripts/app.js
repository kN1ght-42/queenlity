$(function() {
    // $(window).on("scroll load resize", function() {
    //     scrollSpot = $(this).scrollTop();

    //     if (scrollSpot > headerHeight) {
    //         header.addClass("fixed");
    //     } else {
    //         header.removeClass("fixed");
    //     }
    // });

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        console.log(elementOffset);

        $("html, body").animate({
            scrollTop: elementOffset
        });
    });

});