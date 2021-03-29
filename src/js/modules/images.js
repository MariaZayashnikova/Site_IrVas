const images = () => {
    const workSection = document.querySelector('.works'),
          modal = document.createElement('div'),
          bigImg = document.createElement('img');
    
    modal.classList.add('popup');
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.display = 'none';
    
    modal.append(bigImg);
    workSection.append(modal);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;

        if(target && target.classList.contains('preview')) {
            modal.style.display = 'flex';
            let path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
            document.body.style.overflow = 'hidden';
        }

        if(target && target.matches('div.popup')) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}

export default images;