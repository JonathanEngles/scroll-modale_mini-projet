console.log('Hello World');
//on sélectionne et on stocke la modal 
const modal = document.querySelector('.modal-container');

//on sélectionne et on stocke le bouton 
const btn = document.querySelector('.submit');

const icone = document.querySelector('.fa-times');
// console.log(icone);

function displayModale() {
  let hauteur = document.documentElement.scrollTop;  
  //   console.log(hauteur + 'nb de pixels parcouru depuis le haut');
  if ( hauteur > 1000) {
    console.log('affichage de la modale!!');
    modal.classList.add('display');
    //ajout du time out avoir un fondu dans l'apparition de la modale
    setTimeout(() => {
      modal.classList.add('show');
    }, 0);
  }
}

window.addEventListener('scroll', displayModale);

btn.addEventListener('click', () => {

  //au click, je fais apparaitre le nom du  profil...
  btn.innerText = 'Jonathan Engles';
  

  // au second clique j'ouvre le lien associé
  btn.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/jonathan-engles74/', '_blank');
  });

});




icone.addEventListener('click', () => {
  //au click, je fais disparaitre la modale
  modal.style.display = 'none';

  // j'annule l'évènement du scroll ppur ne pas reproduire l'apparation de la modale

  window.removeEventListener('scroll', displayModale);
});
