const WATCHED_KEY = 'watched';
const storageForWatched = JSON.parse(localStorage.getItem(WATCHED_KEY)) || [];
console.log(storageForWatched);
const QUEUE_KEY = 'queue';
const storageForQueued = JSON.parse(localStorage.getItem(QUEUE_KEY)) || [];
console.log(storageForQueued);

const buttonAddWatched = document.querySelector('#btn-watched');
const buttonAddToQueued = document.querySelector('#btn-queue');
const idMovie = document.querySelector('.movieID').textContent;

buttonAddWatched.addEventListener('click', addWatchedtoLocalStorage);
buttonAddToQueued.addEventListener('click', addQueuedToLocalStorage);

const strLOcalS = localStorage.getItem(WATCHED_KEY);
const parsStr = JSON.parse(strLOcalS);
if (parsStr && parsStr.includes(idMovie)) {
  buttonAddWatched.textContent = 'REMOVE FROM WATCHED';
}

const strQULS = localStorage.getItem(QUEUE_KEY);
const parsStrQ = JSON.parse(strQULS);
if (parsStrQ && parsStrQ.includes(idMovie)) {
  buttonAddToQueued.textContent = 'REMOVE FROM QUEUED';
}

function addWatchedtoLocalStorage() {
  if (buttonAddWatched.textContent === 'ADD TO WATCHED') {
    storageForWatched.push(idMovie);
    localStorage.setItem(WATCHED_KEY, JSON.stringify(storageForWatched));
    buttonAddWatched.textContent = 'REMOVE FROM WATCHED';
  } else {
    const indexEl = storageForWatched.indexOf(idMovie);
    console.log(indexEl);
    storageForWatched.splice(indexEl, 1);
    console.log(storageForQueued);
    // localStorage.removeItem(WATCHED_KEY);

    localStorage.setItem(WATCHED_KEY, JSON.stringify(storageForWatched));
    buttonAddWatched.textContent = 'ADD TO WATCHED';
  }
}
function addQueuedToLocalStorage() {
  if (buttonAddToQueued.textContent === 'ADD TO QUEUED') {
    storageForQueued.push(idMovie);
    console.log(storageForQueued);
    localStorage.setItem(QUEUE_KEY, JSON.stringify(storageForQueued));
    buttonAddToQueued.textContent = 'REMOVE FROM QUEUED';
  } else {
    const IndexElQ = storageForQueued.indexOf(idMovie);
    console.log(IndexElQ);
    storageForQueued.splice(IndexElQ, 1);
    console.log(storageForQueued);
    localStorage.setItem(QUEUE_KEY, JSON.stringify(storageForQueued));
    buttonAddToQueued.textContent = 'ADD TO QUEUED';
  }
}

export { addWatchedtoLocalStorage, addQueuedToLocalStorage };
