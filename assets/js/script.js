// Filtrage

const buttons = document.querySelectorAll('.btn');
buttons.forEach(item => {
    item.addEventListener('click', (e) => {
        if(e.target.dataset.filter) {
            for(const btn of buttons) {
                btn.classList.remove('btn-active');
            }
            
            item.classList.add('btn-active');
        }
    });
});

// Modal

document.querySelector('.section__home--contact').addEventListener('click', () => {
    const modalContainer = document.querySelector('.modal__container');
    modalContainer.style.display = 'flex';
    modalContainer.style.animation = 'FadeIn 500ms ease-in-out forwards';
});

document.querySelector('.modal__close').addEventListener('click', () => {
    const modalContainer = document.querySelector('.modal__container');
    modalContainer.style.animation = 'FadeOut 500ms ease-in-out forwards';

    setTimeout(() => { 
        modalContainer.style.display = '';
        modalContainer.style.animation = '';
    }, 500);
});

document.querySelector('.modal__form--submit').children[0].addEventListener('click', (e) => {
    e.preventDefault();
});