'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//OPENING the modal window
const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

//CLOSING the modal window
//adding and removing classes can activate and deactivate sertan styles
// at the same time
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


//Ecs key Press Event
document.addEventListener('keydown', function (e) {
  // if (e.key === 'Escape') {
  //   if (!modal.classList.contains('hidden')) {
  //     closeModal();
  //   }
  // }AGGREGATING THE TWO IF STATEMENTS TOGETHER
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
