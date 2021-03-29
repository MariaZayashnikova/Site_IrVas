const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOferlay = true) {
        let trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            modalCalcEnd = modal.querySelector('[data-form]'),
            scroll = findScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if(e.target) {
                    e.preventDefault();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
            });
        });

        close.addEventListener('click', () => {
            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;

            windows.forEach(item => {
                item.style.display = 'none';
            });
        });

        modal.addEventListener('click', (e) => {
            if(e.target === modal && closeClickOferlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                modal.style.display = "none";
                document.body.style.overflow = "";
            }
        });

        if(modalCalcEnd) {
            modalCalcEnd.addEventListener('submit', (e) => {
                e.preventDefault();
                setTimeout(() => {
                    modal.style.display = 'none';
                    document.body.style.marginRight = `0px`;
                }, 4000)
            });
        }
    }
    
    function showModalInTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = "block";
            document.body.style.overflow = "hidden";
        }, time);
    }

    function findScroll() {
        let div = document.createElement('div');
        div.style.width = '25px';
        div.style.height = '25px';
        div.style.visibility = 'hidden';
        div.style.overflowY = 'scroll';
        document.body.append(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }
    

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    // showModalInTime('.popup', 6000);
}

export default modals;