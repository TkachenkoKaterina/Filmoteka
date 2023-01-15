import { API_KEY } from "./vars";

(() => {
    const refs = {
        openModalCard: document.querySelector('.open__modal--js'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        modal: document.querySelector('[data-modal]'),
    
    };

    refs.openModalCard.addEventListener('click', openModal);
    refs.closeModalBtn.addEventListener('click', openModal);

    function openModal() {
        refs.modal.classList.toggle('is-hidden');
    
    }

})();




