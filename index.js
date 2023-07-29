console.log('funguju!');

let aktualniCislo = 1;
const kostka = document.querySelector('.dice');
const otocKostku = () => {
  aktualniCislo = aktualniCislo + 1;
  if (aktualniCislo === 7) {
    aktualniCislo = 1;
  }
  kostka.src = `img/side${aktualniCislo}.svg`;
};
document.addEventListener('click', otocKostku);
