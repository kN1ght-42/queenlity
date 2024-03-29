document.addEventListener('DOMContentLoaded', function() {
    var slider = document.getElementById('slider');
    var buttons = slider.querySelectorAll('.button');
    var items = slider.querySelectorAll('.intro__item');

    var idInt;
    
    executer();

    function executer() {
        if (!idInt) { 
            idInt = setInterval(autoSwitcher, 5000);
        }
    }

    function executerStop () {
        clearInterval(idInt);
        idInt = null;
        executer();
    }

    function autoSwitcher () {
        let activeItem = slider.querySelector('.intro__item.active');
    
        let activeItemId = Number(activeItem.id);

        if ( (activeItemId) == 2) {
            switcher(0);
        } else {
            switcher(activeItemId + 1);
        }
    }

    function switcher(indexButton) {
        let activeButton = slider.querySelector('.button.active');
        let activeItem = slider.querySelector('.intro__item.active');

        activeItem.classList.remove('active');
        items[indexButton].classList.add('active');

        activeButton.classList.remove('active');
        buttons[indexButton].classList.add('active');
    }

    buttons.forEach (el => {
        el.addEventListener('click', function () {
            let itemIndex = el.id;

            switcher(itemIndex);
            executerStop();
        }) 
    });
});