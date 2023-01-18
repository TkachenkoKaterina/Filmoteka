import axios from 'axios';

// auth modal login & signup
const signUp = document.querySelector('#signupbox');
const signIn = document.querySelector('#signinbox');

const btnIn = document.querySelector('.btn-in');
const btnUp = document.querySelector('.btn-up');

// // Switches to 'Create Account'
btnUp.addEventListener('click', () => {
  signUp.style.display = 'block';
  signIn.style.display = 'none';
});

// // Switches to 'Sign In'
btnIn.addEventListener('click', () => {
  signUp.style.display = 'none';
  signIn.style.display = 'block';
});

//--------------
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
//----------------------

//-------- auth request
//const loginText = document.querySelector('.title-text .login');
const loginForm = document.querySelector('form#signinform');
const signupForm = document.querySelector('form#signupform');
//const loginBtn = document.querySelector('button#loginsubmit');
//const signupBtn = document.querySelector('button#signupsubmit');

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
    //console.log(data);
    return data;
  } catch (error) {
    //console.log(error.response.data.error.message.replaceAll('_', ' '));
    //console.log(error);
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
    //console.log(data);
    return data;
  } catch (error) {
    // console.log(error.response.data.error.message.replace('_', ' '));
    //console.log('-----------------------------');
    //console.log(error);
    return error;
  }
};

const getDb = async () => {
  const baseURL =
    'https://filmoteks-users-base-default-rtdb.europe-west1.firebasedatabase.app/data.json';
  try {
    const data = await axios.get(baseURL);
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

const postDb = async item => {
  const baseURL =
    'https://filmoteks-users-base-default-rtdb.europe-west1.firebasedatabase.app/data.json';
  try {
    const data = await axios.patch(baseURL, item);
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};
// console.log(createUser(email, password));
// console.log(authUser(email, password));
// console.log(postDb());
// console.log(getDb());

/// ---------- work html
//const loginForm = document.querySelector('form.login');
const mailLogin = document.querySelector('[name=mailLogin]');
const pswdLogin = document.querySelector('[name=pswdLogin]');
//const error = document.querySelector('#error');

const nameSignup = document.querySelector('[name=nameSignup]');
const emailSignup = document.querySelector('[name=emailSignup]');
const pswdSignup = document.querySelector('[name=pswdSignup]');
const pswdSignupConf = document.querySelector('[name=pswdSignupConf]');
const errorIn = document.querySelector('.errIn');
const errorUp = document.querySelector('.errUp');

const defaultErrorText = () => {
  errorIn.textContent = '';
  errorUp.textContent = '';
  //   error.textContent = 'enter email and password';
  //   error.textContent = 'new user';
};

const clearFields = () => {
  mailLogin.value = '';
  pswdLogin.value = '';
  nameSignup.value = '';
  emailSignup.value = '';
  pswdSignup.value = '';
  pswdSignupConf.value = '';
};

defaultErrorText();
//console.dir(mailLogin);
loginForm.addEventListener('submit', async ev => {
  ev.preventDefault();
  //console.log(mailLogin.value, pswdLogin.value);
  if (!mailLogin.value || !pswdLogin.value) return;

  mailLogin.value.trim();
  const res = await authUser(mailLogin.value, pswdLogin.value);
  //console.log(await res);

  if ((await res.status) != 200) {
    const message = res.response.data.error.message.replaceAll('_', ' ');
    //const message = res.data.error.message.replaceAll('_', ' ');

    //console.log(message);
    errorIn.textContent = message;
    loginForm.addEventListener('click', defaultErrorText);
    //console.log(message.includes('email'));
    if (message.includes('EMAIL')) {
      mailLogin.classList.add('error-border');
    }
    console.log(message.includes('PASSWORD'));
    if (message.includes('PASSWORD')) {
      pswdLogin.classList.add('error-border');
    }
    return;
  }

  const userInfo = await getDb();

  if (userInfo.status == 200) {
    loginForm.removeEventListener('click', defaultErrorText);
    defaultErrorText();
    clearFields();
    document.location.href = './my-library.html';
  }

  //const itemId = mailLogin.value.replace('@', '').replaceAll('.', '');
});

signupForm.addEventListener('submit', async ev => {
  ev.preventDefault();
  //                      console.log(ev);
  if (!emailSignup.value || !pswdSignup.value) return;
  if (pswdSignup.value !== pswdSignupConf.value) return;
  mailLogin.value.trim();

  const res = await createUser(emailSignup.value, pswdSignup.value);
  //console.log(res);

  if ((await res.status) != 200) {
    const message = res.response.data.error.message.replaceAll('_', ' ');
    errorUp.textContent = message;
    signupForm.addEventListener('click', defaultErrorText);

    return;
  }

  // console.log('1-----------');
  let idItem = emailSignup.value.replace('@', '').replaceAll('.', '');
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
    defaultErrorText();
    clearFields();
  }
  //console.log(idItem);
});
