import * as basicLightbox from 'basiclightbox';
import katerinaTkachenkoUrl from '../images/team/katerina-tkachenko.jpg';
import oleksiiNarovskyiUrl from '../images/team/oleksii-narovskyi.jpg';
import antonSushchenkoUrl from '../images/team/anton-sushchenko.jpg';
import olehRosinskyidUrl from '../images/team/oleh-rosinskyi.jpg';
import denysFedorenkoUrl from '../images/team/denys-fedorenko.jpg';
import katerynaKovaliukUrl from '../images/team/kateryna-kovaliuk.jpg';
import olexandraCherepaniaUrl from '../images/team/olexandra-cherepania.jpg';
import olhaRolinskaUrl from '../images/team/olha-rolinska.jpg';
import sabrinaMatsyukUrl from '../images/team/sabrina-matsyuk.jpg';
import tvictoriaKushnarovaUrl from '../images/team/victoria-kushnarova.jpg';
import volodymyrDenysovUrl from '../images/team/volodymyr-denysov.jpg';
import yevheniyKlymovychUrl from '../images/team/yevheniy-klymovych.jpg';
import volodymyrBednovUrl from '../images/team/volodymyr-bednov.jpg';

// const linkRef = document.querySelector(".footer__link");
// console.log(linkRef);

// linkRef .addEventListener("click", onLinkClick);

// let modalWindow;

const markup = `
     <div class="modal modal__footer">
            <h2 class="team-title">Our team</h2>
            <ul class="team-list list">
                <li class="team-member">
                    <div class="thumb">

                        <img src="&{katerinaTkachenkoUrl}" alt="foto Katerina Tkachenko" width="150" />
                    </div>

                    <div class="team-card">
                        <a class="team-member-title" href="https://github.com/TkachenkoKaterina">
                            Katerina <br> Tkachenko
                        </a>
                        <p class="team-member-position" lang="en">Team lead</p>

                    </div>
                </li>
               <li class="team-member">
                    <div class="thumb">

                        <img src="&{oleksiiNarovskyiUrl}" alt="foto Oleksii Narovskyi" width="150" />
                    </div>

                    <div class="team-card">
                        <a class="team-member-title" href="https://github.com/narovskyi">
                            Oleksii <br> Narovskyi
                        </a>
                        <p class="team-member-position" lang="en">Scrum master</p>

                    </div>
                </li>
                <li class="team-member">
                    <div class="thumb">

                        <img src="&{antonSushchenkoUrl}" alt="foto Anton Sushchenko" width="150" />
                    </div>

                    <div class="team-card">
                        <a class="team-member-title" href="https://github.com/Anton0694">
                            Anton <br> Sushchenko
                        </a>
                        <p class="team-member-position" lang="en">Developer</p>

                    </div>
                </li>
                <li class="team-member">
                    <div class="thumb">

                        <img src="&{olehRosinskyiUrl}" alt="foto Oleh Rosinskyi" width="150" />
                    </div>

                    <div class="team-card">
                        <a class="team-member-title" href="https://github.com/OlegRosinskyi">
                            Oleh <br> Rosinskyi
                        </a>
                        <p class="team-member-position" lang="en">Developer</p>

                    </div>
                </li>
               <li class="team-member">
                    <div class="thumb">

                        <img src="&{denysFedorenkoUrl}" alt="foto Denys Fedorenko" width="150" />
                    </div>

                    <div class="team-card">
                        <a class="team-member-title" href="https://github.com/DenFedor">
                            Denys <br> Fedorenko
                            </a>
                        <p class="team-member-position" lang="en">Developer</p>

                    </div>
                </li>
                <li class="team-member">
                    <div class="thumb">

                        <img src="&{katerynaKovaliukUrl}" alt="foto Kateryna Kovaliuk"  width="150" />
                    </div>

                    <div class="team-card">
                        <a class="team-member-title" href="https://github.com/katekovaliuk">
                            Kateryna <br> Kovaliuk
                        </a>
                        <p class="team-member-position" lang="en">Developer</p>

                    </div>
                </li>
                <li class="team-member">
                    <div class="thumb">

                        <img src="&{olexandraCherepaniaUrl}" alt="foto Olexandra Cherepania" width="150" />
                    </div>

                    <div class="team-card">
                        <a class="team-member-title" href="https://github.com/AlexandraCherepania">
                            Olexandra <br> Cherepania
                        </a>
                        <p class="team-member-position" lang="en">Developer</p>

                    </div>
                </li>
                <li class="team-member">
                    <div class="thumb">

                        <img src="&{olhaRolinskaUrl}" alt="foto Olha Rolinska" width="150" />
                    </div>

                    <div class="team-card">
                        <a class="team-member-title" href="https://github.com/rollingolya">
                            Olha <br> Rolinska
                        </a>
                        <p class="team-member-position" lang="en">Developer</p>

                    </div>
                </li>
                <li class="team-member">
                    <div class="thumb">

                        <img src="&{SsabrinaMatsyukUrl}" alt="foto Sabrina Matsyuk" width="150" />
                    </div>

                    <div class="team-card">
                        <a class="team-member-title" href="https://github.com/sabmat">
                           Sabrina <br> Matsyuk
                        </a>
                        <p class="team-member-position" lang="en">Developer</p>

                    </div>
                </li>
                <li class="team-member">
                    <div class="thumb">

                        <img src="&{victoriaKushnarovaUrl}" alt="foto Victoria Kushnarova" width="150" />
                    </div>

                    <div class="team-card">
                        <a class="team-member-title" href="https://github.com/Highgradecode">
                            Victoria <br> Kushnarova
                        </a>
                        <p class="team-member-position" lang="en">Developer</p>

                    </div>
                </li>
                <li class="team-member">
                    <div class="thumb">

                        <img src="&{volodymyrDenysovUrl}" alt="foto Volodymyr Denysov" width="150" />
                    </div>

                    <div class="team-card">
                        <a class="team-member-title" href="https://github.com/vladdengoit">
                            Volodymyr <br> Denysov
                        </a>
                        <p class="team-member-position" lang="en">Developer</p>

                    </div>
                </li>
                <li class="team-member">
                    <div class="thumb">

                        <img src="&{yevheniyKlymovychUrl}" alt="foto Yevheniy Klymovych"  width="150" />
                    </div>

                    <div class="team-card">
                        <a class="team-member-title" href="https://github.com/jullyrud">
                           Yevheniy <br> Klymovych
                        </a>
                        <p class="team-member-position" lang="en">Developer</p>

                    </div>
                </li>
                <li class="team-member">
                    <div class="thumb">

                        <img src="&{volodymyrBednovUrl}" alt="foto Volodymyr Bednov"  width="150" />
                    </div>

                    <div class="team-card">
                        <a class="team-member-title" href="https://github.com/Volodymyr-Bednov">
                            Volodymyr <br> Bednov
                        </a>
                        <p class="team-member-position" lang="en">Developer</p>

                    </div>
                </li>
                
            </ul>
        </div>`

const container = document.querySelector('.js-team-modal');
console.log(container);

container.addEventListener('click', onLinkClick);
const modalWindow = basicLightbox.create(markup);

function onLinkClick(event) {
    event.preventDefault();

    // console.log(event.target.dataset.source);
 
    // modalWindow = basicLightbox.create(`
    //  <div class="modal">
    //         <h2 class="team-title">Our team</h2>
    //         <ul class="team-list list">
    //             <li class="team-member">
    //                 <div class="thumb">

    //                     <img src="&{teamLeadUrl}" alt="foto Katerina Tkachenko" width="150" />
    //                 </div>

    //                 <div class="team-card">
    //                     <a class="team-member-title" href="https://github.com/TkachenkoKaterina">
    //                         Katerina Tkachenko
    //                     </a>
    //                     <p class="team-member-position" lang="en">Team lead</p>

    //                 </div>
    //             </li>
    //            <li class="team-member">
    //                 <div class="thumb">

    //                     <img src="./images/oleksii-narovskyi.jpg" alt="foto Oleksii Narovskyi" width="150" />
    //                 </div>

    //                 <div class="team-card">
    //                     <a class="team-member-title" href="https://github.com/narovskyi">
    //                         Oleksii Narovskyi
    //                     </a>
    //                     <p class="team-member-position" lang="en">Scrum master</p>

    //                 </div>
    //             </li>
    //             <li class="team-member">
    //                 <div class="thumb">

    //                     <img src="./images/anton-sushchenko.jpg" alt="foto Anton Sushchenko" width="150" />
    //                 </div>

    //                 <div class="team-card">
    //                     <a class="team-member-title" href="https://github.com/Anton0694">
    //                         Anton Sushchenko
    //                     </a>
    //                     <p class="team-member-position" lang="en">Developer</p>

    //                 </div>
    //             </li>
    //             <li class="team-member">
    //                 <div class="thumb">

    //                     <img src="./images/oleh-rosinskyi.jpg" alt="foto Oleh Rosinskyi" width="150" />
    //                 </div>

    //                 <div class="team-card">
    //                     <a class="team-member-title" href="https://github.com/OlegRosinskyi">
    //                         Oleh <br> Rosinskyi
    //                     </a>
    //                     <p class="team-member-position" lang="en">Developer</p>

    //                 </div>
    //             </li>
    //            <li class="team-member">
    //                 <div class="thumb">

    //                     <img src="./images/denys-fedorenko.jpg" alt="foto Denys Fedorenko" width="150" />
    //                 </div>

    //                 <div class="team-card">
    //                     <a class="team-member-title" href="https://github.com/DenFedor">
    //                         Denys Fedorenko
    //                         </a>
    //                     <p class="team-member-position" lang="en">Developer</p>

    //                 </div>
    //             </li>
    //             <li class="team-member">
    //                 <div class="thumb">

    //                     <img src="./images/kateryna-kovaliuk.jpg" alt="foto Kateryna Kovaliuk"  width="150" />
    //                 </div>

    //                 <div class="team-card">
    //                     <a class="team-member-title" href="https://github.com/katekovaliuk">
    //                         Kateryna Kovaliuk
    //                     </a>
    //                     <p class="team-member-position" lang="en">Developer</p>

    //                 </div>
    //             </li>
    //             <li class="team-member">
    //                 <div class="thumb">

    //                     <img src="./images/olexandra-cherepania.jpg" alt="foto Olexandra Cherepania" width="150" />
    //                 </div>

    //                 <div class="team-card">
    //                     <a class="team-member-title" href="https://github.com/AlexandraCherepania">
    //                         Olexandra Cherepania
    //                     </a>
    //                     <p class="team-member-position" lang="en">Developer</p>

    //                 </div>
    //             </li>
    //             <li class="team-member">
    //                 <div class="thumb">

    //                     <img src="./images/olha-rolinska.jpg" alt="foto Olha Rolinska" width="150" />
    //                 </div>

    //                 <div class="team-card">
    //                     <a class="team-member-title" href="https://github.com/rollingolya">
    //                         Olha <br> Rolinska
    //                     </a>
    //                     <p class="team-member-position" lang="en">Developer</p>

    //                 </div>
    //             </li>
    //             <li class="team-member">
    //                 <div class="thumb">

    //                     <img src="./images/sabrina-matsyuk.jpg" alt="foto Sabrina Matsyuk" width="150" />
    //                 </div>

    //                 <div class="team-card">
    //                     <a class="team-member-title" href="https://github.com/sabmat">
    //                        Sabrina Matsyuk
    //                     </a>
    //                     <p class="team-member-position" lang="en">Developer</p>

    //                 </div>
    //             </li>
    //             <li class="team-member">
    //                 <div class="thumb">

    //                     <img src="./images/victoria-kushnarova.jpg" alt="foto Victoria Kushnarova" width="150" />
    //                 </div>

    //                 <div class="team-card">
    //                     <a class="team-member-title" href="https://github.com/Highgradecode">
    //                         Victoria Kushnarova
    //                     </a>
    //                     <p class="team-member-position" lang="en">Developer</p>

    //                 </div>
    //             </li>
    //             <li class="team-member">
    //                 <div class="thumb">

    //                     <img src="./images/volodymyr-denysov.jpg" alt="foto Volodymyr Denysov" width="150" />
    //                 </div>

    //                 <div class="team-card">
    //                     <a class="team-member-title" href="https://github.com/vladdengoit">
    //                         Volodymyr Denysov
    //                     </a>
    //                     <p class="team-member-position" lang="en">Developer</p>

    //                 </div>
    //             </li>
    //             <li class="team-member">
    //                 <div class="thumb">

    //                     <img src="./images/yevheniy-klymovych.jpg" alt="foto Yevheniy Klymovych"  width="150" />
    //                 </div>

    //                 <div class="team-card">
    //                     <a class="team-member-title" href="https://github.com/jullyrud">
    //                        Yevheniy Klymovych
    //                     </a>
    //                     <p class="team-member-position" lang="en">Developer</p>

    //                 </div>
    //             </li>
    //             <li class="team-member">
    //                 <div class="thumb">

    //                     <img src="./images/volodymyr-bednov.jpg" alt="foto Volodymyr Bednov"  width="150" />
    //                 </div>

    //                 <div class="team-card">
    //                     <a class="team-member-title" href="https://github.com/Volodymyr-Bednov">
    //                         Volodymyr Bednov
    //                     </a>
    //                     <p class="team-member-position" lang="en">Developer</p>

    //                 </div>
    //             </li>
                
    //         </ul>
    //     </div>`);

    modalWindow.show();
    window.addEventListener('keydown', onEscKeyPress);
  
};



   function onEscKeyPress(event){
         if (event.code === 'Escape'){
             modalWindow.close();
             window.removeEventListener('keydown', onEscKeyPress);
            
    };
   
    }