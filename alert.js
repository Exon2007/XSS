(function(){
  const iframe = document.querySelector("iframe");
  if(!iframe){
    console.log("❌ Aucune iframe trouvée");
    return;
  }

  // Attendre que l'iframe soit chargée
  iframe.addEventListener("load", () => {
    setTimeout(() => {
      try {
        const doc = iframe.contentWindow.document;

        // Sélecteur CSS basé sur ce que tu as donné
        const bouton = doc.querySelector("a.item-actif");

        if(!bouton){
          console.log("ℹ️ Aucun bouton trouvé pour le test");
          return;
        }

        // Ajouter un écouteur pour vérifier si l'événement est capté
        bouton.addEventListener("click", () => {
          console.log("🎯 Clic détecté !");
          alert("🎯 Clic détecté sur l'élément 'Accueil'");
        });

        // Déclencher le clic programmatique
        const event = new MouseEvent("click", { bubbles: true, cancelable: true });
        bouton.dispatchEvent(event);

        console.log("🧪 Test de clic envoyé après 2 secondes");

      } catch(e){
        console.log("🚫 Impossible d'accéder à l'iframe :", e);
      }
    }, 2000); // 2 secondes
  });
})();
