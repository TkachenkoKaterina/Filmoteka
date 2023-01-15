import axios from 'axios';

const createUser = async (email, password) => {
  const baseURL =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC9fG7Shg0PcLy-7vLSSNqMkxzduprzfqU';
  if (!email || !password) return;
  try {
    const data = await axios.post(baseURL, {
      email,
      password,
      user,
      returnSecureToken: true,
    });
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error.response.data.error.message.replaceAll('_', ' '));
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
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error.response.data.error.message.replace('_', ' '));
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
const errorLogin = document.querySelector('#error');

const nameSignup = document.querySelector('[name=nameSignup]');
const emailSignup = document.querySelector('[name=emailSignup]');
const pswdSignup = document.querySelector('[name=pswdSignup]');
const pswdSignupConf = document.querySelector('[name=pswdSignupConf]');
const errorSignup = document.querySelector('#err');

const defaultErrorText = () => {
  errorLogin.textContent = 'enter email and password';
  errorSignup.textContent = 'new user';
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

loginForm.addEventListener('submit', async ev => {
  ev.preventDefault();
  if (!mailLogin.value || !pswdLogin.value) return;

  mailLogin.value.trim();
  const res = await authUser(mailLogin.value, pswdLogin.value);
  // console.log(res);

  if ((await res.status) != 200) {
    const message = res.response.data.error.message.replaceAll('_', ' ');
    errorLogin.textContent = message;
    loginForm.addEventListener('click', defaultErrorText);
    return;
  }

  const userInfo = await getDb();

  if (userInfo.status == 200) {
    signupForm.removeEventListener('click', defaultErrorText);
    clearFields();
  }

  const itemId = mailLogin.value.replace('@', '').replaceAll('.', '');
});

signupForm.addEventListener('submit', async ev => {
  ev.preventDefault();
  if (!emailSignup.value || !pswdSignup.value) return;
  if (pswdSignup.value !== pswdSignupConf.value) return;
  mailLogin.value.trim();

  const res = await createUser(emailSignup.value, pswdSignup.value);
  // console.log(res);

  if ((await res.status) != 200) {
    const message = res.response.data.error.message.replaceAll('_', ' ');
    errorSignup.textContent = message;
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
    clearFields();
  }

  // console.log(idItem);
  // console.log(userItem);

  // console.log('----0---------');
  // console.log(userInfo);
});
