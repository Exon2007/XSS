  // Attendre que le DOM soit chargé
  document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner la balise <ed-modal-reconnexion>
    const modal = document.querySelector("ed-modal-reconnexion");

    if (modal) {
      // Appliquer un fond rouge et texte blanc
      modal.style.backgroundColor = "red";
      modal.style.color = "white";

      // Optionnel : bordure rouge foncé
      modal.style.border = "2px solid darkred";
    }
  });
