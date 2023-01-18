import Glide from '@glidejs/glide';
import axios from 'axios';
import errorUrl from '../images/oh-no.jpg';
import { requestGet } from './requestGet';
import { MAIN_PART_URL, TRENDS_REQUEST_PART, API_KEY } from './vars';
sliderFetch();

function sliderFetch() {
  requestGet(MAIN_PART_URL, TRENDS_REQUEST_PART, API_KEY).then(res => {
    const arr = res.data.results;
    console.log(arr);
    return arr;
  });
}

// sliderRender();

// function sliderRender(arr) {
//   const markup = arr
//     .map(arrItem => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     })
//     .join('');
//   userList.innerHTML = markup;
// }
