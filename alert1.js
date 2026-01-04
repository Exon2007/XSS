const btn = document.querySelector('a[aria-label="Accueil"]');
if (btn) {
  btn.style.color = 'red';
  btn.style.backgroundColor = 'yellow';
  btn.click(); // clique dessus après avoir changé le style
}
