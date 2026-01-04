// Sélectionne le bouton "Accueil"
const btn = document.querySelector('a[aria-label="Accueil"]');

// Change la couleur du texte
btn.style.color = 'red';

// Change la couleur de fond
btn.style.backgroundColor = 'yellow';

// Sélectionne le span du solde
const soldeSpan = document.querySelector('span.badge-solde span');

// Clique dessus
if (soldeSpan) soldeSpan.click();
