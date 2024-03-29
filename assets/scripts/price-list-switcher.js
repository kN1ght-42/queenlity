document.addEventListener("DOMContentLoaded", function() {
    var switchButton        = document.querySelectorAll(".switcher__item");
    var content             = document.querySelector('.list__inner');

    var listInnerItemActive = document.querySelector('.list__inner--item.active');
    var listItemOfActive    = listInnerItemActive.querySelectorAll('.list__item');
    listItemOfActive.forEach(el => {
        el.classList.add('active');
    });
    
    content.style.height = (content.scrollHeight + 20) + 'px';
    
    function priceListSwitcher(el) {
        document.querySelector(".switcher__item.active").classList.remove('active');
        el.classList.add('active');

        document.querySelector(".list__inner--item.active").classList.remove('active');
        document.querySelectorAll(".list__inner--item")[el.id].classList.add('active');

        content.style.height = 0;
        content.style.height = (content.scrollHeight + 20)+ 'px';
    }

    function priceListAnimate() {
        let listInnerItemActive = document.querySelector('.list__inner--item.active');
        let listItem = listInnerItemActive.querySelectorAll('.list__item');
            
        let time = 200;

        listItem.forEach(el => {
            setInterval(function() {
                el.classList.add('active');
            }, time)
            time = time + 200;
        })
    }

    switchButton.forEach(el => {
        el.addEventListener("click", function() {
            priceListSwitcher(el);

            priceListAnimate();
        });
    });

    
});