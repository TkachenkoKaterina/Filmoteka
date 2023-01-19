const WATCHED_KEY = 'watched';
const storageForWatched = JSON.parse(localStorage.getItem(WATCHED_KEY)) || [];
// console.log(storageForWatched);
const QUEUE_KEY = 'queue';
const storageForQueued = JSON.parse(localStorage.getItem(QUEUE_KEY)) || [];
// console.log(storageForQueued);

// const buttonAddWatched = document.querySelector('#btn-watched');
// console.log(buttonAddWatched);
// const buttonAddToQueued = document.querySelector('#btn-queue');
// const idMovie = document.querySelector('.movieID').textContent;
// const idMovie = document.querySelector('.movieID').textContent;
// console.log(idMovie);

// buttonAddWatched.addEventListener('click', addWatchedtoLocalStorage);
// buttonAddToQueued.addEventListener('click', addQueuedToLocalStorage);

function workWithButton(id) {
  const buttonAddWatched = document.querySelector('#btn-watched');
  const buttonAddToQueued = document.querySelector('#btn-queue');
  console.log(buttonAddWatched)
  console.log(id);
  checkButtonsBeforeOpen(id, buttonAddWatched, buttonAddToQueued);
  const arr = {
    a: 1,
    b: 2
  };
  buttonAddWatched.addEventListener('click', addWatchedtoLocalStorage);
  buttonAddToQueued.addEventListener('click', addQueuedToLocalStorage);

  function addWatchedtoLocalStorage() {
    console.log('add to watch');
    console.log(id);
    if (buttonAddWatched.textContent === 'ADD TO WATCHED') {
     if (buttonAddToQueued.textContent === 'REMOVE FROM QUEUE'){
      const IndexElQ = storageForQueued.indexOf(id);
      storageForQueued.splice(IndexElQ, 1);
      localStorage.setItem(QUEUE_KEY, JSON.stringify(storageForQueued));
      buttonAddToQueued.textContent = 'ADD TO QUEUE';
    }
    storageForWatched.push(id);
    localStorage.setItem(WATCHED_KEY, JSON.stringify(storageForWatched));
    buttonAddWatched.textContent = 'REMOVE FROM WATCHED';
  } else {
    const indexEl = storageForWatched.indexOf(id);
    // console.log(indexEl);
    storageForWatched.splice(indexEl, 1);
    // console.log(storageForQueued);
    // localStorage.removeItem(WATCHED_KEY);

    localStorage.setItem(WATCHED_KEY, JSON.stringify(storageForWatched));
    buttonAddWatched.textContent = 'ADD TO WATCHED';
  }
        
  }

  function addQueuedToLocalStorage() {
    if (buttonAddToQueued.textContent === 'ADD TO QUEUE') {
    if (buttonAddWatched.textContent === 'REMOVE FROM WATCHED') {
      const IndexEl = storageForWatched.indexOf(id);
      storageForWatched.splice(IndexEl, 1);
      localStorage.setItem(WATCHED_KEY, JSON.stringify(storageForWatched));
      buttonAddWatched.textContent = 'ADD WATCHED';
    }
    storageForQueued.push(id);
    console.log(storageForQueued);
    localStorage.setItem(QUEUE_KEY, JSON.stringify(storageForQueued));
    buttonAddToQueued.textContent = 'REMOVE FROM QUEUE';
    } else {
    const IndexElQ = storageForQueued.indexOf(id);
    console.log(IndexElQ);
    storageForQueued.splice(IndexElQ, 1);
    console.log(storageForQueued);
    localStorage.setItem(QUEUE_KEY, JSON.stringify(storageForQueued));
    buttonAddToQueued.textContent = 'ADD TO QUEUE';
  }
  }
  
}

function checkButtonsBeforeOpen(id, btnWatch, btnQueue) {
  const strLOcalS = localStorage.getItem(WATCHED_KEY);
  if (strLOcalS !== null) {
    const parsStr = JSON.parse(strLOcalS);
    if (parsStr && parsStr.includes(id)) {
    btnWatch.textContent = 'REMOVE FROM WATCHED';
  }
  }
  const strQULS = localStorage.getItem(QUEUE_KEY);
  if (strQULS !== null) {
    const parsStrQ = JSON.parse(strQULS);
    if (parsStrQ && parsStrQ.includes(id)){
    btnQueue.textContent = 'REMOVE FROM QUEUE';
  }
  }
}

// function addWatchedtoLocalStorage(id, btnWatch, btnQueue) {
//   console.log(id);
//   if (btnWatch.textContent === 'ADD TO WATCHED') {
//      if (btnQueue.textContent === 'REMOVE FROM QUEUE'){
//       const IndexElQ = storageForQueued.indexOf(id);
//       storageForQueued.splice(IndexElQ, 1);
//       localStorage.setItem(QUEUE_KEY, JSON.stringify(storageForQueued));
//       btnQueue.textContent = 'ADD TO QUEUE';
//     }
//     storageForWatched.push(id);
//     localStorage.setItem(WATCHED_KEY, JSON.stringify(storageForWatched));
//     btnWatch.textContent = 'REMOVE FROM WATCHED';
//   } else {
//     const indexEl = storageForWatched.indexOf(id);
//     // console.log(indexEl);
//     storageForWatched.splice(indexEl, 1);
//     // console.log(storageForQueued);
//     // localStorage.removeItem(WATCHED_KEY);

//     localStorage.setItem(WATCHED_KEY, JSON.stringify(storageForWatched));
//     btnWatch.textContent = 'ADD TO WATCHED';
//   }
// }
// function addQueuedToLocalStorage(id, btnWatch, btnQueue) {
//   console.log(btnWatch);
//   if (btnQueue.textContent === 'ADD TO QUEUE') {
//     if (btnWatch.textContent === 'REMOVE FROM WATCHED') {
//       const IndexEl = storageForWatched.indexOf(id);
//       storageForWatched.splice(IndexEl, 1);
//       localStorage.setItem(WATCHED_KEY, JSON.stringify(storageForWatched));
//       btnWatch.textContent = 'ADD WATCHED';
//     }
//     storageForQueued.push(id);
//     console.log(storageForQueued);
//     localStorage.setItem(QUEUE_KEY, JSON.stringify(storageForQueued));
//     btnQueue.textContent = 'REMOVE FROM QUEUE';
//   } else {
//     const IndexElQ = storageForQueued.indexOf(id);
//     console.log(IndexElQ);
//     storageForQueued.splice(IndexElQ, 1);
//     console.log(storageForQueued);
//     localStorage.setItem(QUEUE_KEY, JSON.stringify(storageForQueued));
//     btnQueue.textContent = 'ADD TO QUEUE';
//   }
// }

export {
  workWithButton,
  addWatchedtoLocalStorage,
  addQueuedToLocalStorage,
  checkButtonsBeforeOpen,
};
