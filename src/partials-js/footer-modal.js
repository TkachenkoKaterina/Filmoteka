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
import victoriaKushnarovaUrl from '../images/team/victoria-kushnarova.jpg';
import volodymyrDenysovUrl from '../images/team/volodymyr-denysov.jpg';
import yevheniyKlymovychUrl from '../images/team/yevheniy-klymovych.jpg';
import volodymyrBednovUrl from '../images/team/volodymyr-bednov.jpg';

const markup = `
 <div class="modal modal__footer">
            <h2 class="team-title">&#127916; Our team</h2>
            <ul class="team-list list">
                <li class="team-member">
                    <div class="thumb">

                        <img src="${katerinaTkachenkoUrl}" alt="foto Katerina Tkachenko" width="150" />
                    </div>

                    <div class="team-card">
                        <a class="team-member-title" href="https://github.com/TkachenkoKaterina" target="_blank" rel="noreferrer noopener">
                            Katerina <br> Tkachenko
                        </a>
                        <p class="team-member-position" lang="en">Team lead</p>

                    </div>
                </li>
               <li class="team-member">
                    <div class="thumb">

                        <img src="${oleksiiNarovskyiUrl}" alt="foto Oleksii Narovskyi" width="150" />
                    </div>

                    <div class="team-card">
                        <a class="team-member-title" href="https://github.com/narovskyi" target="_blank" rel="noreferrer noopener">
                            Oleksii <br> Narovskyi
                        </a>
                        <p class="team-member-position" lang="en">Scrum master</p>

                    </div>
                </li>
                <li class="team-member">
                    <div class="thumb">

                        <img src="${antonSushchenkoUrl}" alt="foto Anton Sushchenko" width="150" />
                    </div>

                    <div class="team-card">
                        <a class="team-member-title" href="https://github.com/Anton0694" target="_blank" rel="noreferrer noopener">
                            Anton <br> Sushchenko
                        </a>
                        <p class="team-member-position" lang="en">Developer</p>

                    </div>
                </li>
                <li class="team-member">
                    <div class="thumb">

                        <img src="${olehRosinskyidUrl}" alt="foto Oleh Rosinskyi" width="150" />
                    </div>

                    <div class="team-card">
                        <a class="team-member-title" href="https://github.com/OlegRosinskyi" target="_blank" rel="noreferrer noopener">
                            Oleh <br> Rosinskyi
                        </a>
                        <p class="team-member-position" lang="en">Developer</p>

                    </div>
                </li>
               <li class="team-member">
                    <div class="thumb">

                        <img src="${denysFedorenkoUrl}" alt="foto Denys Fedorenko" width="150" />
                    </div>

                    <div class="team-card">
                        <a class="team-member-title" href="https://github.com/DenFedor" target="_blank" rel="noreferrer noopener">
                            Denys <br> Fedorenko
                            </a>
                        <p class="team-member-position" lang="en">Developer</p>

                    </div>
                </li>
                <li class="team-member">
                    <div class="thumb">

                        <img src="${katerynaKovaliukUrl}" alt="foto Kateryna Kovaliuk"  width="150" />
                    </div>

                    <div class="team-card">
                        <a class="team-member-title" href="https://github.com/katekovaliuk" target="_blank" rel="noreferrer noopener">
                            Kateryna <br> Kovaliuk
                        </a>
                        <p class="team-member-position" lang="en">Developer</p>

                    </div>
                </li>
                <li class="team-member">
                    <div class="thumb">

                        <img src="${olexandraCherepaniaUrl}" alt="foto Olexandra Cherepania" width="150" />
                    </div>

                    <div class="team-card">
                        <a class="team-member-title" href="https://github.com/AlexandraCherepania" target="_blank" rel="noreferrer noopener">
                            Olexandra <br> Cherepania
                        </a>
                        <p class="team-member-position" lang="en">Developer</p>

                    </div>
                </li>
                <li class="team-member">
                    <div class="thumb">

                        <img src="${olhaRolinskaUrl}" alt="foto Olha Rolinska" width="150" />
                    </div>

                    <div class="team-card">
                        <a class="team-member-title" href="https://github.com/rollingolya" target="_blank" rel="noreferrer noopener">
                            Olha <br> Rolinska
                        </a>
                        <p class="team-member-position" lang="en">Developer</p>

                    </div>
                </li>
                <li class="team-member">
                    <div class="thumb">

                        <img src="${sabrinaMatsyukUrl}" alt="foto Sabrina Matsyuk" width="150" />
                    </div>

                    <div class="team-card">
                        <a class="team-member-title" href="https://github.com/sabmat" target="_blank" rel="noreferrer noopener">
                           Sabrina <br> Matsyuk
                        </a>
                        <p class="team-member-position" lang="en">Developer</p>

                    </div>
                </li>
                <li class="team-member">
                    <div class="thumb">

                        <img src="${victoriaKushnarovaUrl}" alt="foto Victoria Kushnarova" width="150" />
                    </div>

                    <div class="team-card">
                        <a class="team-member-title" href="https://github.com/Highgradecode" target="_blank" rel="noreferrer noopener">
                            Victoria <br> Kushnarova
                        </a>
                        <p class="team-member-position" lang="en">Developer</p>

                    </div>
                </li>
                <li class="team-member">
                    <div class="thumb">

                        <img src="${volodymyrDenysovUrl}" alt="foto Volodymyr Denysov" width="150" />
                    </div>

                    <div class="team-card">
                        <a class="team-member-title" href="https://github.com/vladdengoit" target="_blank" rel="noreferrer noopener">
                            Volodymyr <br> Denysov
                        </a>
                        <p class="team-member-position" lang="en">Developer</p>

                    </div>
                </li>
                <li class="team-member">
                    <div class="thumb">

                        <img src="${yevheniyKlymovychUrl}" alt="foto Yevheniy Klymovych"  width="150" />
                    </div>

                    <div class="team-card">
                        <a class="team-member-title" href="https://github.com/jullyrud" target="_blank" rel="noreferrer noopener">
                           Yevheniy <br> Klymovych
                        </a>
                        <p class="team-member-position" lang="en">Developer</p>

                    </div>
                </li>
                <li class="team-member">
                    <div class="thumb">

                        <img src="${volodymyrBednovUrl}" alt="foto Volodymyr Bednov"  width="150" />
                    </div>

                    <div class="team-card">
                        <a class="team-member-title" href="https://github.com/Volodymyr-Bednov" target="_blank" rel="noreferrer noopener">
                            Volodymyr <br> Bednov
                        </a>
                        <p class="team-member-position" lang="en">Developer</p>

                    </div>
                </li>
                
            </ul>
        </div>
`

const container = document.querySelector('.footer__link');
console.log(container);

container.addEventListener('click', onLinkClick);
const modalWindow = basicLightbox.create(markup);

function onLinkClick(event) {
    event.preventDefault();
    
  modalWindow.show();
  window.addEventListener('keydown', onEscKeyPress);
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    modalWindow.close();
    window.removeEventListener('keydown', onEscKeyPress);
  }
}

