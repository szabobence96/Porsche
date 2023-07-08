const urlParams = new URLSearchParams(window.location.search);
const nev = urlParams.get('nev');
const telefonszam = urlParams.get('telefonszam');
const email = urlParams.get('email');
const felvetelDate = urlParams.get('felvetelDate');
const leadasDate = urlParams.get('leadasDate');
const dailyPrice = urlParams.get('dailyPrice');
const napokSzama = urlParams.get('napokSzama');
const autoTipus = urlParams.get('autoTipus');
const atveheto = urlParams.get('atveheto');
const osszeg = urlParams.get('osszeg');
const foglalasDetailsDiv = document.getElementById('foglalas-details');
const backButton = document.querySelector('#foglalas-details a');

foglalasDetailsDiv.innerHTML = `Sikeres foglalás!<br>
  Foglalás részletei:<br>
  Név: ${nev}<br>
  Telefonszám: ${telefonszam}<br>
  E-mail cím: ${email}<br>
  Felvétel dátuma: ${felvetelDate}<br>
  Leadás dátuma: ${leadasDate}<br>
  Autó napi ára: ${dailyPrice} Ft<br>
  Foglalás időtartama: ${napokSzama} nap<br>
  Az autó típusa: ${autoTipus}<br>
  Az autó a felvétel napján reggel 6:00-kor átvehető: ${atveheto}<br>
  Összesen fizetendő: ${osszeg} Ft`;
