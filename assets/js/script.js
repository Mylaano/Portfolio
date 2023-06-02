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

document.querySelector('.contact-me').addEventListener('click', () => {
    const modalContainer = document.querySelector('.modal-container');
    modalContainer.style.display = 'flex';
    modalContainer.style.animation = 'FadeIn 500ms ease-in-out forwards';
});

document.querySelector('.close-modal').addEventListener('click', () => {
    const modalContainer = document.querySelector('.modal-container');
    modalContainer.style.animation = 'FadeOut 500ms ease-in-out forwards';

    setTimeout(() => { 
        modalContainer.style.display = 'none';
    }, 500);
});

document.querySelector('.form-submit').children[0].addEventListener('click', (e) => {
    e.preventDefault();
});