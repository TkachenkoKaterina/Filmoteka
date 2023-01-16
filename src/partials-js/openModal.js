import { API_KEY } from "./vars";

const refs = {
    openModalCard: document.querySelectorAll('.open__modal--js'),
    closeModalBtn: document.querySelector('.modal__close-btn'),
    backdrop: document.querySelector('.js-backdrop'),
};

// refs.openModalCard.addEventListener('click', onOpenModal(this));
Array.prototype.forEach.call(refs.openModalCard, function(modal) {
    modal.addEventListener("click", onOpenModal);
    });
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal (element) {
    console.log(element);
    document.body.classList.add('show-modal');
}

function onCloseModal() {
    document.body.classList.remove('show-modal');
}
function onBackdropClick(e) {
    if (e.currentTarget === e.target) {
        onCloseModal();
    }
}

// var buttons = document.querySelectorAll("selector-for-the-buttons");
// Array.prototype.forEach.call(buttons, function(btn) {
//     btn.addEventListener("click", handler, false);
// });


// onclick="onOpenModal()"


