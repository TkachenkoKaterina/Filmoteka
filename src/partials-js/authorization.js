import axios from 'axios';
let flagLoggedUser = 'none';
const loginForm = document.querySelector('form#signinform');
const signupForm = document.querySelector('form#signupform');

const emailLogin = document.querySelector('[name=emailLogin]');
const pswdLogin = document.querySelector('[name=passwordLogin]');

const nameSignup = document.querySelector('[name=nameSignup]');
const emailSignup = document.querySelector('[name=emailSignup]');
const pswdSignup = document.querySelector('[name=passwordSignup]');
const pswdSignupConf = document.querySelector('[name=passwordConfSignup]');

const errorLogin = document.querySelector('.errorLogin');
const errorSignup = document.querySelector('.errorSignup');

// auth modal login & signup
const signUp = document.querySelector('#signupbox');
const signIn = document.querySelector('#signinbox');

const btnIn = document.querySelector('.btn-in');
const btnUp = document.querySelector('.btn-up');

const defaultErrorText = () => {
  errorLogin.textContent = '';
  errorSignup.textContent = '';
};

const clearFields = () => {
  emailLogin.value = '';
  pswdLogin.value = '';
  nameSignup.value = '';
  emailSignup.value = '';
  pswdSignup.value = '';
  pswdSignupConf.value = '';
};

defaultErrorText();

//const idAuthUser = '';
document.addEventListener('DOMContentLoaded', () => {
  if (location.pathname == '/my-library.html') return;
  const routeAuth = document.querySelector('.header__item-link.my-library');
  if (userLogged()) return;
  //userLogged();
  //const routeAuth = document.querySelector('a[href="./my-library.html"]');

  routeAuth.addEventListener('click', ev => {
    ev.preventDefault();
    // if (flagLoggedUser !== 'none') return;
    const authViewRef = document
      .querySelector('.login-backdrop')
      .classList.remove('full-close');
    defaultErrorText();
    clearFields();
  });
});

// window.addEventListener('closed', event => {
//   //event.preventDefault();
//   localStorage.removeItem('currentuser');
//   localStorage.removeItem('currentuserinfo');
// });

// // Switches to 'Create Account'
const createAccount = () => {
  signUp.style.display = 'block';
  signIn.style.display = 'none';
};
btnUp.addEventListener('click', createAccount);

// // Switches to 'Sign In'
const loginAccount = () => {
  signUp.style.display = 'none';
  signIn.style.display = 'block';
};
const loginActive = btnIn.addEventListener('click', loginAccount);

//-----close auth modal
const closeButton = document.querySelector('button.auth-close');
const authModalRef = document.querySelector('.login-backdrop');

const fnCloseButton = () => {
  authModalRef.classList.add('is-hidden');
  authModalRef.classList.add('full-close');
};

closeButton.addEventListener('click', () => {
  fnCloseButton();
});

//-------- auth request
const createUser = async (email, password) => {
  const baseURL =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC9fG7Shg0PcLy-7vLSSNqMkxzduprzfqU';
  if (!email || !password) return;
  try {
    const data = await axios.post(baseURL, {
      email,
      password,
      returnSecureToken: true,
    });
    return data;
  } catch (error) {
    return error;
  }
};

const authUser = async (email, password) => {
  const baseURL =
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC9fG7Shg0PcLy-7vLSSNqMkxzduprzfqU';
  if (!email || !password) return;
  try {
    const data = await axios.post(baseURL, {
      email,
      password,
      returnSecureToken: true,
    });
    return data;
  } catch (error) {
    return error;
  }
};

const getDb = async idItem => {
  const baseURL = `https://filmoteks-users-base-default-rtdb.europe-west1.firebasedatabase.app/data.json?orderBy="$key"&equalTo="${idItem}"`; //print=silent&auth=tWeiO5yEVGBN5KucivUx9IwIJRtfqL2eFCzC4GCM';
  try {
    const data = await axios.get(baseURL);
    return data;
  } catch (error) {
    return error;
  }
};

const postDb = async item => {
  const baseURL =
    'https://filmoteks-users-base-default-rtdb.europe-west1.firebasedatabase.app/data.json';
  try {
    const data = await axios.patch(baseURL, { item });
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

// ------ авторизація
loginForm.addEventListener('submit', async ev => {
  ev.preventDefault();
  if (!emailLogin.value || !pswdLogin.value) return;
  emailLogin.value.trim();

  const res = await authUser(emailLogin.value, pswdLogin.value);
  if ((await res.status) != 200) {
    const message = res.response.data.error.message.replaceAll('_', ' ');
    loginForm.addEventListener('click', defaultErrorText);
    errorAuth('Login', message);
    return;
  }
  const idItem = userId(emailLogin.value);
  console.log(idItem);
  const userInfo = await getDb(idItem);

  if (userInfo.status == 200) {
    //console.log(userInfo.data);
    loginForm.removeEventListener('click', defaultErrorText);
    const { email, name } = userInfo.data[idItem];
    const info = { email, name };
    flagLoggedUser = email;
    console.log('flagLoggedUser');
    console.log(flagLoggedUser);
    //userLogged(flagLoggedUser);
    // console.log('------------');
    // console.log(flagLoggedUser);
    localStorage.setItem('currentuserinfo', JSON.stringify(info));
    localStorage.setItem('currentuser', JSON.stringify(email));
    defaultErrorText();
    clearFields();
    document.location.href = './my-library.html';
  }
});

// ---- реестрація

signupForm.addEventListener('submit', async ev => {
  ev.preventDefault();

  if (!emailSignup.value || !pswdSignup.value) return;
  if (pswdSignup.value !== pswdSignupConf.value) {
    errorAuth('Signup', 'invalid passwordConf');
    return;
  }
  emailSignup.value.trim();

  const res = await createUser(emailSignup.value, pswdSignup.value);
  if ((await res.status) != 200) {
    const message = res.response.data.error.message.replaceAll('_', ' ');
    signupForm.addEventListener('click', defaultErrorText);
    errorAuth('Signup', message);
    return;
  }

  // let idItem = emailSignup.value.replace('@', '').replaceAll('.', '');
  const idItem = userId(emailSignup.value);
  const userItem = {};
  userItem[idItem] = {
    id: '',
    name: nameSignup.value,
    email: emailSignup.value,
    password: pswdSignup.value,
  };

  const userInfo = await postDb(userItem);
  if (userInfo.status == 200) {
    signupForm.removeEventListener('click', defaultErrorText);
    const tempLogin = emailSignup.value;
    defaultErrorText();
    loginAccount();
    clearFields();
    emailLogin.value = tempLogin;
  }
});

const errorAuth = (elem, message) => {
  console.log(elem, message);
  if (message.includes('EMAIL')) {
    document.querySelector(`[name=email${elem}]`).classList.add('error-border');
  }
  if (message.includes('PASSWORD')) {
    document
      .querySelector(`[name=password${elem}]`)
      .classList.add('error-border');
  }
  if (message.includes('passwordConf')) {
    document
      .querySelector(`[name=passwordConf${elem}]`)
      .classList.add('error-border');
  }
  document.querySelector(`.error${elem}`).textContent = message;
};

const userId = email => {
  return email.replace('@', '').replaceAll('.', '');
};

const userLogged = () => {
  const currentuser = JSON.parse(localStorage.getItem('currentuser'));
  if (currentuser == null) {
    console.log('currentuser == null');
    return false;
  }
  // console.log(email, name);
  // console.log(flagLoggedUser);
  // console.log('-------------');
  // console.log(currentuser);
  return true;
};
