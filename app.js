console.log('Hello World');
//on sélectionne et on stocke la modal 
const modal = document.querySelector('.modal-container');

//on sélectionne et on stocke le bouton 
const btn = document.querySelector('button');

const profil = document.querySelector('.profil-linkedin');


// console.log(profil);

const icone = document.querySelector('.fa-times');
// console.log(icone);

function displayModale() {
  let hauteur = document.documentElement.scrollTop;  
  //   console.log(hauteur + 'nb de pixels parcouru depuis le haut');
  if ( hauteur > 1000) {
    console.log('affichage de la modale!!');
    modal.style.display = 'flex';
  }
}

window.addEventListener('scroll', displayModale);

btn.addEventListener('click', () => {

  //au click, je fais apparaitre le profil...
  profil.style.display = 'block';

  //...et disparaitre le bouton
  btn.style.display = 'none';
});


icone.addEventListener('click', () => {
  //au click, je fais disparaitre la modale
  modal.style.display = 'none';

  // j'annule l'évènement du scroll ppur ne pas reproduire l'apparation de la modale

  window.removeEventListener('scroll', displayModale);
});
