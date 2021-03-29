const tabs = (headerSelector, tabsSelector, contentsSelector, activeClass, display = 'block') => {
    let header = document.querySelector(headerSelector),
        tabs = document.querySelectorAll(tabsSelector),
        contents = document.querySelectorAll(contentsSelector);

    function hiddeContent () {
        contents.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
            
            if(item.querySelector('a')) {
                item.querySelector('a').classList.remove(activeClass);
            }
        });
    }

    function showContent(i = 0) {
        contents[i].style.display = display;

        tabs[i].classList.add(activeClass);
        if(tabs[i].querySelector('a')) {
            tabs[i].querySelector('a').classList.add(activeClass);
        }
    }

    hiddeContent();
    showContent();


    header.addEventListener('click', (e) => {
        let target = e.target;
        if(target &&
            (target.classList.contains(tabsSelector.replace(/\./, "")) ||
            target.parentNode.classList.contains(tabsSelector.replace(/\./, "")))) {
            tabs.forEach((item, i) => {
                if(target == item || target.parentNode == item) {
                    hiddeContent();
                    showContent(i);
                }
            });
        }
    });
}

export default tabs;