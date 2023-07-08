const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
const itemList = document.querySelector('#formList');

leftArrow.addEventListener('click', function() {
  itemList.scrollLeft -= 600;
});

rightArrow.addEventListener('click', function() {
  itemList.scrollLeft += 600;
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}
let felvetelInput = document.getElementById('felvetel-datuma');
let leadasInput = document.getElementById('leadas-datuma');

// Eseményfigyelő hozzáadása a dátum mezőkhöz
felvetelInput.addEventListener('change', ellenorizDatumokat);
leadasInput.addEventListener('change', ellenorizDatumokat);

function ellenorizDatumokat() {
  let felvetelDatum = new Date(felvetelInput.value);
  let leadasDatum = new Date(leadasInput.value);

  // Ellenőrzés, hogy a leadás dátuma legalább 3 nappal nagyobb-e, mint a mai nap
  let maiDatum = new Date();
  maiDatum.setDate(maiDatum.getDate() + 2); // Hozzáadjuk a 3 napot a mai dátumhoz

  if (leadasDatum < maiDatum) {
    alert('A leadás dátuma legalább 4 nappal későbbi kell legyen, mint a mai nap!');
    // Visszaállítjuk a mezők értékeit
    leadasInput.value = '';
  }

  // Ellenőrzés, hogy a dátumok nem múltbeli dátumok
  if (felvetelDatum < maiDatum) {
    alert('A felvétel dátuma legalább 3 nap múlva lehetséges, mint a mai nap!');
    // Visszaállítjuk a mező értékét
    felvetelInput.value = '';
  }

  // Ellenőrzés, hogy a felvétel és a leadás között legalább 1 nap különbség legyen
  let minimumKulonbseg = new Date(felvetelDatum);
  minimumKulonbseg.setDate(minimumKulonbseg.getDate());
  let maximumKulonbseg = new Date(felvetelDatum);
  maximumKulonbseg.setDate(maximumKulonbseg.getDate() + 30);

  if (leadasDatum <= minimumKulonbseg || leadasDatum > maximumKulonbseg) {
    alert('A felvétel és a leadás között legalább 1 nap, de legfeljebb 30 nap különbségnek kell lennie!');
    // Visszaállítjuk a mezők értékeit
    leadasInput.value = '';
  }
}
//Űrlap kitöltése
const megrendelemButton = document.getElementById('megrendelem-button');
const termsCheckbox = document.querySelector('.terms input[type="checkbox"]');
const nevInput = document.getElementById('nev-input');
const telefonszamInput = document.getElementById('telefonszam-input');
const emailInput = document.getElementById('email-input');
const felvetelDateInput = document.getElementById('felvetel-datuma');
const leadasDateInput = document.getElementById('leadas-datuma');
const autokSelect = document.getElementById('autok-ar');
const foglalasDetails = document.getElementById('foglalas-details');
const atvehetoSelect = document.querySelector('select[name="atveheto"]');


megrendelemButton.addEventListener('click', function(e) {

    e.preventDefault();
    const nev = nevInput.value;
    const telefonszam = telefonszamInput.value;
    const email = emailInput.value;
    const felvetelDate = new Date(felvetelDateInput.value);
    const leadasDate = new Date(leadasDateInput.value);
    const dailyPrice = parseInt(autokSelect.options[autokSelect.selectedIndex].dataset.napiAr);
    const autoTipus = autokSelect.value;
    const atveheto = atvehetoSelect.value;
    const napokSzama = Math.ceil((leadasDate - felvetelDate) / (1000 * 60 * 60 * 24));
    const osszeg = dailyPrice * napokSzama;
    
    const formattedFelvetelDate = felvetelDate.toLocaleDateString();
    const formattedLeadasDate = leadasDate.toLocaleDateString();
    
    const params = new URLSearchParams();
  params.append('nev', nev);
  params.append('telefonszam', telefonszam);
  params.append('email', email);
  params.append('felvetelDate', formattedFelvetelDate);
  params.append('leadasDate', formattedLeadasDate);
  params.append('dailyPrice', dailyPrice);
  params.append('napokSzama', napokSzama);
  params.append('autoTipus', autoTipus);
  params.append('atveheto', atveheto);
  params.append('osszeg', osszeg);

  if(!termsCheckbox.checked){
    alert('Kérem, fogadja el a szerződési feltételeket!')
  }
  else if (!termsCheckbox.checked  || !nevInput.value || !telefonszamInput.value || !emailInput.value ||
    !felvetelDateInput.value || !leadasDateInput.value || atvehetoSelect.selectedIndex === 0 || autokSelect.selectedIndex === 0) 
  {
    alert('Kérem, töltsön ki minden mezőt!');
  }
  else{
    window.location.href = 'order.html?' + params.toString();
  }
});


